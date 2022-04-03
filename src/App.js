import Sidebar from "./components/side-bar/Sidebar";
import Topbar from "./components/top-bar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import "./app.css";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  return (
    <Router className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/user/:userId" element={<User/>}/>
          <Route path="/newUser" element={<NewUser />}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/product/:productId" element={<Product />}/>
          <Route path="/newProduct" element={<NewProduct />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
