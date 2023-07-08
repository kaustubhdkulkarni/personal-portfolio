import "./App.css";
import About from "./Component/About/About";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Skills from "./Component/Skills/Skills";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <main className="main">
          <Home/>
          <About/>
          <Skills/>
        </main>
      </>
    </div>
  );
}

export default App;
