import React, { FC } from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.less';

const App: FC = () => (<div className='app'>
  <Header />
  <Body />
  <Footer />
</div>

);

export default App;