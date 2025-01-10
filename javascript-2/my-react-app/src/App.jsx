import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ProfileCard from "./ProfileCard.jsx";
import Parent from "./parent.jsx";
import Grandparent from "./Grandparent.jsx";
import InputDisplay from "./InputDisplay.jsx";
import Counter from "./Counter.jsx";
import Teman from "./Teman.jsx";
import Card from "./components/Card.jsx";
import KnappMedState from "./components/knapp-med-state/KnappMedState.jsx";
import Greeting from "./components/Greeting.jsx";

function App() {
  return (
    <div className="wrapper">
      {/* <Header /> */}
      {/* <ProfileCard /> */}
      {/* <Parent /> */}
      {/* <Grandparent /> */}
      {/* <Footer /> */}
      {/* <InputDisplay /> */}
      {/* <Counter /> */}
      {/* <Teman /> */}
      {/* <KnappMedState /> */}
      <h1>Card Memory Game</h1>
      <Card />
      {/* <Greeting namn="Jonas" /> */}
      {/* <Greeting namn="Gäst" /> */}
    </div>
  );
}

export default App;
