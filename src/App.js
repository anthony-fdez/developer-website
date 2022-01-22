import "./App.css";

// Components
import Header from "./components/header/header";
import Work from "./components/work/work";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <div className="about-jumbo">
          <h3>Hi, I'm Anthony! 👋</h3>
          <h1>
            I'm a fullstack developer. Focused on building better apps every
            day.
          </h1>
          <p></p>
          <a
            target="_blank"
            href="mailto:anthonyfdez23@gmail.com"
            className="main-button"
            rel="noreferrer"
          >
            Contact Me
          </a>
        </div>
        <br></br>
        <h2 className="work-title">Work</h2>
        <Work />
        <About />
      </main>
    </div>
  );
}

export default App;
