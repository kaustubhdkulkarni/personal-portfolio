import "./App.css";
import About from "./Component/About/About";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <main className="main">
          <Home/>
          <About/>
        </main>
      </>
    </div>
  );
}

export default App;
