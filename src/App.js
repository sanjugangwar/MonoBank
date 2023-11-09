
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Admin from './components/admin/Admin';
import AddBank from './components/bank/AddBank';
import AddCustomer from './components/customer/AddCustomer';
import AddAccount from './components/account/AddACount';
import Navbar from './components/shared/navbar/Navbar';
import Customer from './components/customer/Customer';
import Footer from './components/shared/footer/Footer';
import Transaction from './components/customer/Transaction';
import EditProfile from './components/customer/EditProfile';
import AccountsDetail from './components/account/AccountsDetail';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
        <Route exact path="/" element={<Login></Login>}></Route>
        <Route exact path="/admin" element={<Admin></Admin>}></Route>
        <Route exact path="/customer" element={<Customer/>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/logout" element={<Login></Login>}></Route>
        <Route exact path="/getAllBanks" element={<AddBank></AddBank>}></Route>
        <Route exact path="/getAllCustomers" element={<AddCustomer></AddCustomer>}></Route>
        <Route exact path="/getAllAccounts" element={<AddAccount></AddAccount>}></Route>
        <Route exact path="/transaction" element={<Transaction></Transaction>}></Route>
        <Route exact path="/editProfile" element={<EditProfile></EditProfile>}></Route>
        <Route exact path="/accountsDetail" element={<AccountsDetail></AccountsDetail>}></Route>

      </Routes>

    </>

  );
}

export default App;

