import { useState, ChangeEvent, FormEvent } from "react";

const CredentialsDemo = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const controlledInputHandlerFactory = (
    stateSetter: (value: string) => void,
  ) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      stateSetter(e.target.value);
    };
  };

  const saveCredentials = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    credentialsService.saveCredentials(account, password);
  };

  const loadCredentials = async () => {
    const credentials = await credentialsService.getCredentials();
    if (credentials.length > 0) {
      setAccount(credentials[0].account);
      setPassword(credentials[0].password);
    }
  };

  return (
    <form onSubmit={saveCredentials}>
      <h2>Credentials Store Demo</h2>
      <label htmlFor="account-input">Account</label>
      <br />
      <input
        id="account-input"
        value={account}
        onChange={controlledInputHandlerFactory(setAccount)}
      />
      <br />
      <label htmlFor="password-input">Password</label>
      <br />
      <input
        id="password-input"
        type="password"
        value={password}
        onChange={controlledInputHandlerFactory(setPassword)}
      />
      <small>Value: {password}</small>
      <br />
      <input type="submit" value="Save Credentials" />
      <input type="button" value="Load credentials" onClick={loadCredentials} />
    </form>
  );
};

export default CredentialsDemo;
