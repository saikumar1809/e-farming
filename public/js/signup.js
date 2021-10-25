import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (
  name,
  addhar,
  email,
  role,
  phoneNo,
  address,
  password,
  passwordConfirm
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'users/signup',
      data: {
        name,
        addhar,
        email,
        role,
        phoneNo,
        address,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'team CSP welcomes you!');

      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
    // console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
    // console.log(err.response);
  }
};

export const storeMentorRequest = async (
  name,
  email,
  phoneNumber,
  workingAt,
  jobRole,
  question1,
  question2,
  question3
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/mentorRequest',
      data: {
        name,
        email,
        phoneNumber,
        workingAt,
        jobRole,
        question1,
        question2,
        question3,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'team E farming  welcomes you!');

      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
    // console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
    // console.log(err.response);
  }
};
export const signupMentor = async (
  name,
  DOB,
  email,
  gender,
  languages,
  currentCompany,
  currentJob,
  phoneNo,
  qualification,
  address,
  password,
  passwordConfirm
) => {
  console.log(email, password);
  const role = 'mentor';
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        DOB,
        email,
        role,
        gender,
        languages,
        currentCompany,
        currentJob,
        phoneNo,
        qualification,
        address,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'team CSP welcomes you!');

      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
    // console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
    // console.log(err.response);
  }
};
export const signupStudent = async (
  name,
  DOB,
  email,
  fatherName,
  motherName,
  fatherOccupation,
  motherOccupation,
  goal,
  phoneNo,
  fatherPhone,
  motherPhone,
  siblings,
  study,
  school,
  GPA,
  mentor,
  gender,
  langs,
  phone,
  address,
  password,
  passwordConfirm
) => {
  const role = 'student';
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/students/studentSignup',
      data: {
        name,
        DOB,
        role,
        email,
        fatherName,
        motherName,
        fatherOccupation,
        motherOccupation,
        goal,
        phoneNo,
        fatherPhone,
        motherPhone,
        siblings,
        study,
        school,
        GPA,
        mentor,
        gender,
        langs,
        phone,
        address,
        password,
        passwordConfirm,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Regestration sucessfull🎉');

      window.setTimeout(() => {
        location.assign('/api/v1/students/');
      }, 1500);
    }
    // console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
    // console.log(err);
    // console.log(err.response);
  }
};
export const signupCohortLead = async (
  name,
  email,
  gender,
  languages,
  phoneNo,
  qualification,
  password,
  passwordConfirm
) => {
  console.log(email, password);
  const role = 'cohortLead';
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/cohortLeads/cohortLeadSignup',
      data: {
        name,
        email,
        role,
        gender,
        languages,
        phoneNo,
        qualification,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Regestration sucessfull🎉');

      window.setTimeout(() => {
        location.assign('/api/v1/cohortLeads/');
      }, 1500);
    }
    // console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
    // console.log(err.response);
  }
};

export const createNewCohort = async (
  name,
  cohortLead,
  description,
  images,
  imageCover
) => {
  const slug = name;
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/cohort/',
      data: {
        name,
        cohortLead,
        description,
        images,
        duration: 6,
        imageCover,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Cohort created successfully ✔');

      window.setTimeout(() => {
        location.assign('/coordinator');
      }, 1500);
    }
    // console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
    // console.log(err.response);
  }
};
