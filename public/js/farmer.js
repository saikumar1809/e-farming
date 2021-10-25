import axios from 'axios';
import { showAlert } from './alerts';
export const submitFarmerComplaint = async (complaint) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/complaints/',
      data: {
        name: complaint,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'complaint registered!');
      window.setTimeout(() => {
        location.assign('/farmer');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const postAdvertisment = async (name, price, quantity) => {
  try {
    console.log('in postadvertisment');
    const res = await axios({
      method: 'POST',
      url: '/advertisment',
      data: {
        cropname: name,
        price,
        quantity,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'post success✔');
      let url = '';
      if (res.data.data.url == 'farmer') url = '/farmer';
      else url = '/supplier';
      window.setTimeout(() => {
        location.assign(url);
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
