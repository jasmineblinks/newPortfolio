import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { StyledLayout } from "./components/layout/Layout";
import Works from "./components/works/Works";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Works />
      <Footer />
    </>
  );
}

export default App;
