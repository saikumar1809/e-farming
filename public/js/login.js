/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (addhar, password) => {
  try {
    console.log(addhar, password);
    const res = await axios({
      method: 'POST',
      url: 'users/login',
      data: {
        addhar,
        password,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      // console.log(res.data.data.user);

      window.setTimeout(() => {
        location.assign(res.data.data.user.role);
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
    //console.log('i am coming here');
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'users/logout',
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    showAlert('error', 'Error logging out! Try again.');
  }
};
