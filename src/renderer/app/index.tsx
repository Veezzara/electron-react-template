import { useEffect } from "react";
import bridge from "../shared/bridge";
import isDesktop from "../shared/is-desktop";

const App = () => {
  useEffect(() => {
    (async () => {
      if (!isDesktop(bridge)) return;

      const testHandlerResult =
        await bridge.ipcExposes.testHandler("Message to Main!");

      console.log(testHandlerResult);
    })();
  }, []);

  return (
    <main>
      <h1>React App!</h1>
      {isDesktop(bridge) ? (
        <div>Electron Version is: {bridge.versionsExposes.electron()}</div>
      ) : (
        <div>App is Running in Browser!</div>
      )}
    </main>
  );
};

export default App;
