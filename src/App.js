import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Begin from './pages/Begin';
import Detail from './pages/detail/Detail';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
    return (
        <>
            <AuthContextProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Begin />} />
                    <Route
                        path='/home'
                        element={
                            <Home />
                        }
                    />
                    <Route path='/signup' element={<SignUp />} />
                    <Route
                        path='/account'
                        element={
                            <ProtectedRoute>
                                <Account />
                            </ProtectedRoute>
                        }
                    />
                    <Route 
                        path='/movie/:id'
                        element={<Detail/>}
                    />
                </Routes>

            </AuthContextProvider>
        </>
    );
}

export default App;
