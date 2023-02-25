import React from 'react';
import 'src/styles/header.css';

const Header = () => {
  return (
    <div className='siteHeader'>
      {/* ========= 戻るエリア ======== */}
      <div className={'goBackButton'}>TOP画面へ戻る</div>

      {/* ======== タイトル画面エリア ======== */}
      <div className={'title'}>商品管理画面</div>

      {/* ======== 検索画面エリア ======== */}
      <input
        type='search'
        className='text'
        placeholder='商品名を入力してください。'
      />
    </div>
  );
};

export default Header;
