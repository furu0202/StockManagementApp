import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'src/components/Header';
import Main from 'src/components/Main';

const ManagementScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Main navigate={navigate} />
    </div>
  );
};

export default ManagementScreen;
