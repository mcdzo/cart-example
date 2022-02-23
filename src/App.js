import "./App.css";
import Home from "./pages/Home";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Home></Home>
      </CartContextProvider>
    </div>
  );
}

export default App;
