import CredentialsDemo from "../credentials-demo/credentials-demo";

const App = () => {
  return (
    <main>
      <h1>React App!</h1>
      <span>{`This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`}</span>
      <br />
      <br />
      <CredentialsDemo />
    </main>
  );
};

export default App;
