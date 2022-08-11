import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import Navbar from './components/global/navbar.js'

function App() {
    return (
        <Router>
            <div class="m-0 h-min w-screen xs:w-screen bg-gray-900">
                <div class="container mx-auto lg:w-10/12 xl:w-8/12">
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
