import { useState } from "react";
import Dashboard from "./components/dashboard";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="w-10 h-10 bg-red-400"></div> */}

      {/* primary color = #3D90D7 */}
      {/* text color = #1E1E1E and #595959 */}

      
      <Dashboard></Dashboard>
    </>
  );
}

export default App;
