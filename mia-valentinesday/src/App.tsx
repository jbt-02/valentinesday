import { useState } from "react";
import "./App.css";
import OpenLetterComponent from "./OpenLetter.component";

function App() {
  const [letterOpen, setLetterOpen] = useState<boolean>(false);
  return (
    <>
      {!letterOpen && (
        <div>
          <a>
            <img
              src="envelope.png"
              className="logo"
              onClick={() => setLetterOpen(true)}
            />
          </a>

          <h1>Open Letter</h1>
        </div>
      )}
      {letterOpen && <OpenLetterComponent />}
    </>
  );
}

export default App;
