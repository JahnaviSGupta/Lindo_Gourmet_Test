import Axios from "axios";
import { getPrefix, getSessionToken } from "../bandung";
import { objectToFormData } from "./helpers";

const getListUserEmailsEndPoint = () => `${getPrefix()}/app/session/listuseremail?sessionToken=${getSessionToken()}`;
const getCreateUserEmailEndPoint = () => `${getPrefix()}/app/session/createuseremail`;
const getDeleteUserEmailEndPoint = () => `${getPrefix()}/app/session/deleteuseremail`;

const loadUserEmails = async () => {
  try {
    const response = await Axios.get(getListUserEmailsEndPoint());
    if (!response.data.error) {
      return {
        code: "SUCCESS",
        message: "Email loaded successfully.",
        data: response.data,
      };
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    return {
      code: "ERROR",
      message: error.message || "An error occurred.",
    };
  }
};

const createUserEmail = async (newEmail) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  if (!emailRegex.test(newEmail)) {
    return {
      code: "INVALID_EMAIL_ERROR",
      message: "This email is invalid.",
    };
  }

  const currentEmails = (await loadUserEmails()).data;
  if (currentEmails.some(email => email.email === newEmail)) {
    return {
      code: "REPEAT_EMAIL_ERROR",
      message: "This email is already on your account.",
    };
  }

  const form = objectToFormData({
    "sessionToken": getSessionToken(),
    "email": newEmail,
  });
  try {
    const response = await Axios.post(getCreateUserEmailEndPoint(), form);
    if (!response.data.error) {
      return {
        code: "SUCCESS",
        message: "Email added successfully.",
      };
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    return {
      code: "ERROR",
      message: error.message || "An error occurred.",
    };
  }
};

const deleteUserEmail = async (emailId) => {
  const form = objectToFormData({
    "sessionToken": getSessionToken(),
    "userEmailEntityId": emailId,
  });
  try {
    const response = await Axios.post(getDeleteUserEmailEndPoint(), form);
    if (!response.data.error) {
      return {
        code: "SUCCESS",
        message: "Email deleted successfully.",
      };
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    return {
      code: "ERROR",
      message: error.message || "An error occurred.",
    };
  }
};

const sortEmailsByCreateDate = (emails) => emails.sort(
  (a, b) => new Date(a.createDate) - new Date(b.createDate),
);

export {
  loadUserEmails,
  createUserEmail,
  deleteUserEmail,
  sortEmailsByCreateDate,
};