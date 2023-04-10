import React from 'react';
import { mocList } from 'src/moc';
import 'src/styles/Main.css';

const Main = ({ navigate }) => {
  return (
    <div>
      <table border='1'>
        <tbody>
          <tr>
            <th className={'itemCode'}>商品コード</th>
            <th className={'category'}>分類</th>
            <th className={'itemName'}>商品名</th>
            <th className={'stock'}>在庫</th>
            <th className={'lastOrder'}>最終発注日</th>
          </tr>
          {mocList.map((listData, key) => {
            return (
              <tr
                key={key}
                onClick={() => {
                  navigate(`/${listData.itemCode}`);
                }}
                className={key % 2 === 0 ? '' : 'bg-gray'}
              >
                <td className={'itemCodeValue'}>{listData.itemCode}</td>
                <td className={'categoryValue'}>{listData.category}</td>
                <td className={'itemNameValue'}>{listData.itemName}</td>
                <td className={'stockValue'}>{listData.stock}</td>
                <td className={'lastOrderValue'}>{listData.lastOrder}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
