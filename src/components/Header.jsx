import React from 'react';
import 'src/styles/header.css';
import { GrSearch } from 'react-icons/gr';
const Header = () => {
  return (
    <div className='siteHeader'>
      {/* ========= 戻るエリア ======== */}
      <div className={'goBackButton'}>TOP画面へ戻る</div>
      {/* ======== タイトル画面エリア ======== */}
      <div className={'titleArea'}>商品管理画面</div>
      {/* ======== 検索画面エリア ======== */}
      <div className={'searchArea'}>
        <GrSearch className='GrSearch' />
        <input
          type='search'
          className='text'
          placeholder='商品名を入力してください。'
        />
      </div>
    </div>
  );
};

export default Header;
