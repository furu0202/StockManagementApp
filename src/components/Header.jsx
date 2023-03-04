import React from 'react';
import 'src/styles/header.css';

const Header = () => {
  return (
    <div className='siteHeader'>
      {/* ========= 戻るエリア ======== */}
      <div className={'goBackButton'}>TOP画面へ戻る</div>
      <p>
        <img src='img/left-icon.png' alt=''></img>
      </p>
      {/* ======== タイトル画面エリア ======== */}
      <div className={'titleArea'}>商品管理画面</div>

      {/* ======== 検索画面エリア ======== */}
      <div className={'searchArea'}>商品検索画面</div>
      <input
        type='search'
        className='text'
        placeholder='商品名を入力してください。'
      />
    </div>
  );
};

export default Header;
