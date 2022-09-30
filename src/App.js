import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from './components/layout/Alert';
import Footer from './components/navbar/Footer';
import Navbar from './components/navbar/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import User from './components/users/User';
import { AlertProvider } from './context/alert/AlertContext';
import { GithubProvider } from './context/github/GithubContex';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />{' '}
                {/*for not found pages */}
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
