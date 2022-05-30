import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/About/Blogs';
import Reviews from './Pages/About/Reviews';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignIn/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/SignIn/RequireAuth';
import Purchase from './Pages/About/Purchase';
import Dashboard from './Pages/About/Dashboard';
import Orders from './Pages/About/Orders';

function App() {
  return (
    <div className='px-12'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
