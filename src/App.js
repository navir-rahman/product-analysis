import './App.css';
import Header from './component/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home/Home';
import Review from './component/review/Review';
import Blog from './component/blog/Blog';
import Dashboard from './component/dashboard/Dashboard';
import NotFound from './component/notFoundPage/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Home></Home> }></Route>
        <Route path='/home' element={ <Home></Home>}></Route>
        <Route path='/review' element={ <Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/review' element={ <Blog></Blog> }></Route>
        <Route path='*' element={ <NotFound></NotFound> }></Route>
      </Routes>
    </div>
  );
}

export default App;
