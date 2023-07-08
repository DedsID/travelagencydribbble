import "./App.css";
import Header from "./components/Header";
import Embark from "./components/Embark";
import Feature from "./components/Feature";
import Services from "./components/Services";
import Stories from "./components/Stories";
import Popular from "./components/Popular";
import Revo from "./components/Revo";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="px-[10%]">
        <Embark />
        <Feature />
        <Services />
        <Stories />
        <Popular />
        <Revo />
        <Footer />
      </div>
    </div>
  );
}

export default App;
