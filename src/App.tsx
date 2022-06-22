import React, { FC, useCallback, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import './App.less';
import Admin from './pages/admin';
import Login from './pages/user/Login';
import NoFoundPage from './pages/404';
import { useAppDispatch, useAppSelector } from './feartures/hooks';
import { RootState } from './feartures/store';
import { useMeMutation } from './services/auth/api';
import { logOut, setCredentials } from './feartures/auth/auth.slice';

const App: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const token = useAppSelector((state: RootState) => state.auth.token);
  const [me, { isLoading }] = useMeMutation();


  const getMe = useCallback(

    async () => {
      try {
        const user = await me(null).unwrap()
        dispatch(setCredentials(user))
        navigate('/')
      } catch (err) {
        dispatch(logOut())
        navigate('/login')
      }
    },
    [dispatch, me, navigate],
  )

  useEffect(() => {
    if (!token) {
      navigate('/login')
    } else {
      getMe()
    }

  }, [token, me, navigate, getMe])


  return (<div className='app'>
    <Header />
    {isLoading ? <div>Loading...</div> :
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NoFoundPage />} />
      </Routes>
    }

    <Footer />
  </div>

  )
};

export default App;