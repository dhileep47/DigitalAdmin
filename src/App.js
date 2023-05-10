import Nav from "./Nav";
import Orders from "./Orders";
import Products from "./Products";
import Feedback from "./Feedback";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from "react";

function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<><Nav/><Orders/></>}></Route>
        <Route path="/feedback" element={<><Nav/><Feedback/></>}></Route>
        <Route path="/products" element={<><Nav/><Products/></>}></Route>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
