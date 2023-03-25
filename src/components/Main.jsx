import React from 'react';
import { mocList } from 'src/moc';
import 'src/styles/Main.css';

const Main = () => {
  return (
    <div>
      <table border='1'>
        <tr>
          <th>商品コード</th>
          <th>分類</th>
          <th>商品名</th>
          <th>在庫数</th>
          <th>最終発注日</th>
        </tr>
        {mocList.map((listData, key) => {
          return (
            <tr key={key} className={key % 2 === 0 ? '' : 'bg-gray'}>
              <td>{listData.itemCode}</td>
              <td>{listData.category}</td>
              <td>{listData.itemName}</td>
              <td>{listData.stock}</td>
              <td>{listData.lastOrder}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Main;
