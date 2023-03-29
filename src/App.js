import Login from "./Login";
import Nav from "./Nav";
import Orders from "./Orders";
import Products from "./Products";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<><Login/></>}></Route>
        <Route path="/orders" element={<><Nav/><Orders/></>}></Route>
        <Route path="/products" element={<><Nav/><Products/></>}></Route>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
