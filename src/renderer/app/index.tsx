import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    bridge.ipcExposes.testHandler("some message").then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <main>
      <h1>React App!</h1>
      <div>{bridge.versionsExposes.electron()}</div>
    </main>
  );
};

export default App;
