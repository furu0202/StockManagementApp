import React from 'react';
import { useNavigate } from 'react-router-dom';

const Top = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>TOP画面</h1>
      <button onClick={() => navigate('/Home/')}>商品管理画面へ戻る</button>
    </div>
  );
};

export default Top;
