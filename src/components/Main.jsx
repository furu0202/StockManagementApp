import React from 'react';
import { mocList } from 'src/moc';
import 'src/styles/Main.css';

const Main = () => {
  return (
    <div>
      <table border='1'>
        <tr>
          <th>商品コード</th>
          <th>商品名</th>
          <th>分類</th>
          <th>在庫数</th>
        </tr>
        {mocList.map((listData, key) => {
          return (
            <tr key={key}>
              <td>{listData.itemCode}</td>
              <td>{listData.itemName}</td>
              <td>{listData.category}</td>
              <td>{listData.stock}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Main;
