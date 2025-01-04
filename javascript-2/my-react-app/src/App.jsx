import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ProfileCard from "./ProfileCard.jsx";
import Parent from "./parent.jsx";

function App() {
  return (
    <>
      <Header />
      <ProfileCard name="Jonas" title="Student" />
      <Parent />
      <Footer />
    </>
  );
}

export default App;
