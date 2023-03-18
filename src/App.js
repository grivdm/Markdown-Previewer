import "./App.css";
import MainPage from "./MainPage";
import Header from "./components/Header";
import './scss/custom.scss'

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
