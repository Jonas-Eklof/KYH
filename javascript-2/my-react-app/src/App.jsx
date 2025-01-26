import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import ProfileCard from "./components/profile-card/ProfileCard.jsx";
import Parent from "./components/profile-card/Parent.jsx";
import Grandparent from "./components/ancestree/Grandparent.jsx";
import InputDisplay from "./components/input-display/InputDisplay.jsx";
import Counter from "./components/counter/Counter.jsx";
import Teman from "./components/teman/Teman.jsx";
import Card from "./components/memory-game/Card.jsx";
import KnappMedState from "./components/knapp-med-state/KnappMedState.jsx";
import Greeting from "./components/greeting/Greeting.jsx";
import SidebarNav from "./components/sidebar-nav/SidebarNav.jsx";
import ToggleInvisible from "./components/toggle-invisible/ToggleInvisible.jsx";
import Hackathon from "./components/hackathon/Hackathon.jsx";
import ClassButtons from "./components/class-buttons/ClassButtons.jsx";
import PropStyleButton from "./components/prop-style-button/PropStyleButton.jsx";
import ToDo from "./components/todo/ToDo.jsx";
import Timer from "./components/timer/Timer.jsx";
import ReduxCounter from "./components/redux-counter/ReduxCounter.jsx";
import Gallery from "./components/gallery/Gallery.jsx";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SidebarNav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ProfileCard />} />
          <Route path="/ParentProfileCard" element={<Parent />} />
          <Route path="/Ancestree" element={<Grandparent />} />
          <Route path="/InputDisplay" element={<InputDisplay />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Timer" element={<Timer />} />
          <Route path="/ButtonWithState" element={<KnappMedState />} />
          <Route path="/MemoryGame" element={<Card />} />
          <Route path="/Greeting" element={<Greeting />} />
          <Route path="/ToggleVisible" element={<ToggleInvisible />} />
          <Route path="/Hackathon" element={<Hackathon />} />
          <Route path="/ClassButtons" element={<ClassButtons />} />
          <Route
            path="/PropStyleButton"
            element={
              <>
                <PropStyleButton variant="primary" size="small">
                  Small Primary
                </PropStyleButton>
                <PropStyleButton
                  variant="secondary"
                  size="medium"
                  onClick={() => alert("Medium secondary button clicked")}
                >
                  Medium Secondary
                </PropStyleButton>
                <PropStyleButton
                  variant="danger"
                  size="large"
                  onClick={() => alert("Large danger button clicked")}
                >
                  Large Danger
                </PropStyleButton>
                <PropStyleButton
                  variant="danger"
                  size="large"
                  disabled="disabled"
                  onClick={() => alert("Large danger button clicked")}
                >
                  Disabled Large Danger
                </PropStyleButton>
              </>
            }
          />
          <Route path="/Todo" element={<ToDo />} />
          <Route path="/ReduxCounter" element={<ReduxCounter />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
