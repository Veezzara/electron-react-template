import credentialsStore from "../utils/credentials-store";

const credentialsExposes = {
  getCredentials: () => credentialsStore.getCredentials(),
  saveCredentials: (account: string, password: string) =>
    credentialsStore.saveCredentials(account, password),
  deleteCredentials: (account: string) =>
    credentialsStore.deleteCredentials(account),
};

export default credentialsExposes;
export type credentialsExposesType = typeof credentialsExposes;
