/* eslint-disable */
import '@babel/polyfill';

//import { displayMap } from './mapbox';
import { login, logout } from './login';
import { signup } from './signup';
import { submitFarmerComplaint, postAdvertisment } from './farmer.js';
import { sendAdminTip } from './admin.js';
// import { updateSettings } from './updateSettings';

// DOM ELEMENTS
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.logOutBtn');
const signupForm = document.querySelector('.form--register');
const complaintForm = document.querySelector('.form--complaints');
const tipsForm = document.querySelector('.form--tips');
const advertismentForm = document.querySelector('.form--advertisment');

// DELEGATION

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const addhar = document.getElementById('addhar').value;
    const password = document.getElementById('pwd').value;
    login(addhar, password);
  });
// if (logOutBtn) {
//   console.log('login is clicked');
// }
if (logOutBtn)
  logOutBtn.addEventListener('click', (e) => {
    //console.log('in thsadlkfvlksda');
    logout();
  });
if (signupForm)
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const addhar = document.getElementById('addhar').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('pwd').value;
    const passwordConfirm = document.getElementById('cpassword').value;

    signup(
      name,
      addhar,
      email,
      role,
      phoneNumber,
      address,
      password,
      passwordConfirm
    );
  });

if (complaintForm)
  complaintForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const complaint = document.getElementById('complaint').value;
    submitFarmerComplaint(complaint);
  });
if (tipsForm)
  tipsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('in the tipsForm');
    const tip = document.getElementById('tip').value;
    sendAdminTip(tip);
  });
if (advertismentForm)
  advertismentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('in the advertaisment Form');
    const cropname = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    postAdvertisment(cropname, quantity, price);
  });
const alertMessage = document.querySelector('body').dataset.alert;
if (alertMessage) showAlert('success', alertMessage, 20);
