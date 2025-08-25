import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [titles, setTitles] = useState("title");

  function handleClick() {
    setTitles("Changed Title");
  }
  return (
    <div>
      <h1>Test</h1>
      <ProfileCard name="NameHere" title={titles} handleClick={handleClick} />
    </div>
  );
}

export default App;
