import '../style/pages/App.css';
import '../style/components/Parallax.css';
import { isIOS, isMacOs, useMobileOrientation, isMobile } from "react-device-detect";

import NormalLayout from "../components/NormalLayout";
import SafariLayout from "../components/SafariLayout";


function App() {
  const orientation = useMobileOrientation();
  if (isIOS || isMacOs) {
    return (
      <div className="app">
        <SafariLayout isLandscape={orientation.isLandscape && isMobile}/>
      </div>
    )
  }

  return (
    <div className="app">
      <NormalLayout isLandscape={orientation.isLandscape && isMobile}/>
    </div>
  );
}

export default App;
