import "./styles.css";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About";
export default function App() {
  return (
    <div className="App">
      <div className="contain">
        <div className="first-contain">
          <Navigation />
        </div>
        <div className="second-contain">
          <About />
        </div>
      </div>
    </div>
  );
}
