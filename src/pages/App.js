import '../style/pages/App.css';
import '../style/components/Parallax.css';
import { isSafari } from "react-device-detect";

import NormalLayout from "../components/NormalLayout";
import SafariLayout from "../components/SafariLayout";


function App() {
  if (!isSafari) {
    return (
      <div className="app">
        <SafariLayout/>
      </div>
    )
  }

  return (
    <div className="app">
      <NormalLayout/>
    </div>
  );
}

export default App;
