import Axios from "axios";
import {
  getPrefix,
  getSessionToken,
  getSessionUserEntityId,
  setSession,
} from "../bandung";
import { objectToFormData } from "./helpers";

const getJoinSessionEndPoint = () => `${getPrefix()}/app/session/join`;
const getSigninEndPoint = (
  email,
  password,
) => `${getPrefix()}/app/session/signin?sessionEmail=${email}&sessionPassword=${password}`;
const getViewSessionEndPoint = () => `${getPrefix()}/app/session/view?sessionToken=${getSessionToken()}`;
const getUpdateSessionEndPoint = () => `${getPrefix()}/app/session/update`;

const joinSession = async (
  firstName,
  lastName,
  email,
  emailRepeat,
  password,
  passwordRepeat,
) => {

  if (email !== emailRepeat) {
    return {
      code: "EMAIL_MISMATCH",
      message: "Emails don't match.",
    };
  }

  if (password !== passwordRepeat) {
    return {
      code: "PASSWORD_MISMATCH",
      message: "Passwords don't match.",
    };
  }

  const form = objectToFormData({
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "password": encodeURIComponent(password),
    "passwordRepeat": encodeURIComponent(passwordRepeat),
  });
  try {
    const response = await Axios.post(getJoinSessionEndPoint(), form);
    if (!response.data.error) {
      return {
        code: "SUCCESS",
        message: "Joined successfully.",
        data: response.data
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

const signinSession = async (
  email,
  password,
) => {
  try {
    const response = await Axios.get(getSigninEndPoint(email, password));
    if (!response.data.error) {
      return {
        code: "SUCCESS",
        message: "Signed in successfully",
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

const viewSession = async () => {
  try {
    const response = await Axios.get(getViewSessionEndPoint());
    if (!response.data.error) {
      return {
        code: "SUCCESS",
        message: "Session retrieved successfully",
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

const updateSession = async ({
  firstName,
  lastName,
  email,
  phone,
  linkedinUserId,
  facebookUserId,
  gmailUserId,
  skypeUserId,
}) => {
  const form = objectToFormData({
    "sessionToken": getSessionToken(),
    "userEntityId": getSessionUserEntityId(),
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "phone": phone,
    "linkedinUserId": linkedinUserId,
    "facebookUserId": facebookUserId,
    "gmailUserId": gmailUserId,
    "skypeUserId": skypeUserId,
  });
  try {
    const response = await Axios.post(getUpdateSessionEndPoint(), form);
    if (!response.data.error) {
      const prevLocalSession = JSON.parse(localStorage.getItem("bandung"));
      setSession({
        ...prevLocalSession,
        firstName,
        lastName,
        email,
        phone,
        linkedinUserId,
        facebookUserId,
        gmailUserId,
        skypeUserId,
      });
      return {
        code: "SUCCESS",
        message: "Update successful.",
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

export {
  joinSession,
  signinSession,
  updateSession,
  viewSession
};