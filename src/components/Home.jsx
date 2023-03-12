import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'src/components/Header';
import Main from 'src/components/Main';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
