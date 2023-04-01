import React from 'react';
import { mocList } from 'src/moc';
import 'src/styles/Main.css';

const Main = () => {
  return (
    <div>
      <table border='1'>
        <tbody>
          <tr>
            <th className={'itemCode'}>商品コード</th>
            <th className={'category'}>分類</th>
            <th className={'itemName'}>商品名</th>
            <th className={'stock'}>在庫数</th>
            <th className={'lastOrder'}>最終発注日</th>
            <th className={'detail'}>詳細</th>
          </tr>
          {mocList.map((listData, key) => {
            return (
              <tr key={key} className={key % 2 === 0 ? '' : 'bg-gray'}>
                <td>{listData.itemCode}</td>
                <td>{listData.category}</td>
                <td>{listData.itemName}</td>
                <td>{listData.stock}</td>
                <td>{listData.lastOrder}</td>
                <td>{listData.detail}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
