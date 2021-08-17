import Home from "./Pages/Home";
import EllisePicture from "./assets/Ellipse.png";

function App() {
  const profile = {
    userImage: EllisePicture,
    userName: "Jane",
    city: "San Francisco, CA",
  };

  return <Home userInfo={profile} />;
}

export default App;
