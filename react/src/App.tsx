
import { Button } from '@headlessui/react';

import Footer from './components/Footer';
import NavBar from './components/Navbar';
import logo from './assets/react.svg';
import logoVite from './assets/vite.svg';
import Dashboard from './pages/DashBoard';
import About from './pages/About';
import Playground from './pages/Playground';
import NotFoundPage from './pages/NotFoundPage';
import Login from './pages/Login';

import { Link, Routes, Route } from 'react-router-dom';

// PascalCase 
function App() {
  return (
    <>
      <div className="bg-gray-900">
        <NavBar />

        <Routes>
          <Route path='/'
            element={
              <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-900 via-gray-700 to-gray-900">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-0">
                    <div className="mt-22 md:mt-0 text-center">
                      <h1 className="text-5xl md:text-6xl font-bold leading-tight pb-4]">Dynamic website in React, using Tailwind CSS and TypeScript</h1>
                      <Link to="/dashboard" >
                        <Button
                          className='cursor-pointer border text-green-300 border-green-300 rounded-lg px-4 py-2 mt-4 hover:bg-sky-400/50 hover:border-sky-400/55 hover:text-white'>Check this out
                        </Button>
                      </Link>
                    </div>
                    <div className="hidden md:flex justify-center text-5xl gap-4">
                      <img src={logo} width='200' alt='Ilustración' />
                      <span className="p-4"> + </span>
                      <img src={logoVite} width='200' alt='Ilustración' />
                    </div>
                  </div>
                </div>
              </div>
            } />

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/playground' element={<Playground />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <div className="p-0">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
