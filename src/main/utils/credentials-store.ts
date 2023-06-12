import { findCredentials, setPassword, deletePassword } from "keytar";

const CREDENTIALS_SERVICE = "CREDENTIALS_SERVICE";

const getCredentials = () => findCredentials(CREDENTIALS_SERVICE);

const saveCredentials = (account: string, password: string) => {
  return setPassword(CREDENTIALS_SERVICE, account, password);
};

const deleteCredentials = (account: string) => {
  return deletePassword(CREDENTIALS_SERVICE, account);
};

export default {
  getCredentials,
  saveCredentials,
  deleteCredentials,
};
