import './App.css';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar'
import Homescreen from './screens/Homescreen'
import About from './screens/About'
import Contact from './screens/contact'
import {OrderScreen} from './screens/orderScreen'
import{BrowserRouter,Route, Routes} from 'react-router-dom'
// import AdminScreen from './screens/AdminScreen';
import UserList from './components/Admin/UserList';
import PizzaList from './components/Admin/PizzaList';
import AddNewPizza from './components/Admin/AddNewPizza';
import OrderList from './components/Admin/OrderList';
import EditPizza from './components/Admin/EditPizza';
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Homescreen/>}/>
      <Route path="/admin"  element={<UserList/>}/>
      <Route path="/admin/userlist"  element={<UserList/>}/>
      <Route path="/admin/editpizza/:pizzaId"  element={<EditPizza/>}/>
      <Route path="/admin/orderlist"  element={<OrderList/>}/>
      <Route path="/admin/pizzalist"  element={<PizzaList/>}/>
      <Route path="/admin/addnewpizza"  element={<AddNewPizza/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path="/orders"  element={<OrderScreen/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
