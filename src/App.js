import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PoemDetails from "./PoemDetails/PoemDetails";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <nav>
          <ul>
            <li>Стихове</li>
            <li>Моите стихове</li>
          </ul>
        </nav>
        <div id="mainContainer">
          <PoemDetails></PoemDetails>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
