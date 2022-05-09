import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/header/header";
import Work from "./components/work/work";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";

import NotFound404 from "./components/notFound/notFound404";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <div className="about-jumbo">
          <h3>Hi, I'm Anthony!</h3>
          <h1>
            I'm a fullstack developer. Focused on building better software every
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
        <div id="work">
          <Work />
        </div>
        <div id="about">
          <About />
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
