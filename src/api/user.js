import Axios from "axios";
import { getPrefix, getSession, getSessionToken } from "../bandung";
import { objectToFormData } from "./helpers";

const getUserImage = () => `${getPrefix()}/app/user/imageimage`;
const getViewUserEndPoint = () => `${getPrefix()}/app/user/view`;
const getShortDescriptionEndPoint = () => `${getPrefix()}/app/user/textshortdescription?sessionToken=${getSessionToken()}`;
const updateShortDescriptionEndPoint = () => `${getPrefix()}/app/user/textshortdescription`;
const getLongDescriptionEndPoint = () => `${getPrefix()}/app/user/textlongdescription?sessionToken=${getSessionToken()}`;
const updateLongDescriptionEndPoint = () => `${getPrefix()}/app/user/textshortdescription`;

const viewUser = async () => {
  const form = objectToFormData({
    "sessionToken": getSessionToken(),
    "userEntityId": getSession().userEntityId,
  });
  try {
    const response = await Axios.post(getViewUserEndPoint(), form);
    if (!response.data.error) {
      return {
        code: "SUCCESS",
        message: "User retrieved successfully.",
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

const viewShortDescription = async () => {
  try {
    const response = await Axios.get(getShortDescriptionEndPoint());
    if (!response.data.error) {
      return {
        code: "SUCCESS",
        message: "Short description retrieved successfully.",
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

const updateShortDescription = async (shortDescription) => {
  const form = objectToFormData({
    "userEntityId": getSession().userEntityId,
    "shortDescription": shortDescription,
  });
  try {
    const response = await Axios.post(updateShortDescriptionEndPoint(), form);
    if (!response.data.error) {
      return {
        code: "SUCCESS",
        message: "Short description updated successfully.",
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

const viewLongDescription = async () => {
  try {
    const response = await Axios.get(getLongDescriptionEndPoint());
    if (!response.data.error) {
      return {
        code: "SUCCESS",
        message: "Long description retrieved successfully.",
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

const updateLongDescription = async (longDescription) => {
  const form = objectToFormData({
    "userEntityId": getSession().userEntityId,
    "longDescription": longDescription,
  });
  try {
    const response = await Axios.post(updateLongDescriptionEndPoint(), form);
    if (!response.data.error) {
      return {
        code: "SUCCESS",
        message: "Long description updated successfully.",
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
  getUserImage,
  viewUser,
  viewShortDescription,
  updateShortDescription,
  viewLongDescription,
  updateLongDescription,
};