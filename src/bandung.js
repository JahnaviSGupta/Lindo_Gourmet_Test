let prefix = null;
let session = JSON.parse(localStorage.getItem("bandung"));

const getPrefix = () => prefix ?? "";
const setPrefix = (newPrefix) => {
  prefix = newPrefix;
};

const getSession = () => session;
const setSession = (newSession) => {
  session = newSession;
  localStorage.setItem("bandung", JSON.stringify(session));
};
const clearSession = () => setSession(null);
const validSession = () => session && session.passcode;

const getSessionToken = () => session.sessionToken ?? "";
const getSessionUserEntityId = () => getSession().userEntityId ?? "";

const adminPermission = () => getSession().administrator ?? false;
const editorPermission = () => getSession().editor ?? false;
const managerPermission = () => getSession().manager ?? false;

export {
  adminPermission,
  clearSession,
  editorPermission,
  getPrefix,
  getSession,
  getSessionToken,
  getSessionUserEntityId,
  managerPermission,
  setPrefix,
  setSession,
  validSession,
};