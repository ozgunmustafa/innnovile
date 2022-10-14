import Home from './pages/Home';
import Login from './pages/Login';
import './scss/main.scss';
import './tailwind.css';
import dayjs from 'dayjs';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const date = dayjs('2021-06-17').format('DD MMMM YYYY');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);

  useEffect(() => {
    const authUserMail = localStorage.getItem('authUserMail');

    if (!authUserMail) {
      return navigate('/login');
    } else {
      if (authUserMail === authUser.email) {
        return navigate('/');
      } else {
        return navigate('/login');
      }
    }
  }, [dispatch, navigate, authUser.email]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
