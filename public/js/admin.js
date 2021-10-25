import axios from 'axios';
import { showAlert } from './alerts';
export const sendAdminTip = async (tip) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/tips/',
      data: {
        message: tip,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', ' tip sent successfully✔!');
      window.setTimeout(() => {
        location.assign('/admin');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
