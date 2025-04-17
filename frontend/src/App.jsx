import "./App.css";
import Wa from "./components/event/Wa";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AllRoutes />
      <Wa />
      <Footer />
    </div>
  );
}

export default App;
