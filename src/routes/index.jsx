import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SignIn from '../pages/User/SignIn';
import SignUp from '../pages/User/SignUp';
import { ProtectedRoute } from './ProtectedRoute';


export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
            {/* Routa protegida del home con ProtectedRoute */}
            <Route path='/' element={<ProtectedRoute />}>
                <Route path='/' element={<Home />} />
            </Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}