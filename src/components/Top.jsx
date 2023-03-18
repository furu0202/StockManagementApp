import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'src/styles/Top.css';

const Top = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>商品在庫管理画面</h1>
      <button onClick={() => navigate('/Home/')}>商品管理画面へ</button>
      <button>商品在庫管理画面へ</button>
      <button>商品登録画面へ</button>
      <button>設定画面へ</button>
    </div>
  );
};

export default Top;
