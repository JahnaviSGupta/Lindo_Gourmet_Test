import Axios from "axios";
import { getPrefix, getSessionToken } from "../bandung";
import { objectToFormData } from "./helpers";

const getUpdatePasswordEndPoint = () => `${getPrefix()}/app/session/updatepassword`;

const updatePassword = async (
  currentPassword,
  newPassword,
  newPasswordRepeat,
) => {
  if (newPassword !== newPasswordRepeat) {
    return {
      code: "PASSWORD_MISMATCH",
      message: "Passwords don't match.",
    };
  }

  if (currentPassword === newPassword) {
    return {
      code: "REUSED_PASSWORD",
      message: "The new password is the same as the current password.",
    };
  }

  const form = objectToFormData({
    sessionToken: getSessionToken(),
    password: encodeURIComponent(currentPassword),
    passwordNew: encodeURIComponent(newPassword),
  });

  try {
    const response = await Axios.post(getUpdatePasswordEndPoint(), form);
    if (response.data.confirm === "confirm") {
      return {
        code: "SUCCESS",
        message: "Congratulations, you have successfully reset your password.",
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
  updatePassword,
};