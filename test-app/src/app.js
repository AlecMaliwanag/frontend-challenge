import React from 'react';
import ReactDOM from 'react-dom';
import TopSalesList from "../../dist/TopSalesList/index.js";
import transformData from "../../dist/Utils/transformData.js";
import request from 'request';

request.get('http://localhost:3000/PurchaseOrders', function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
  ReactDOM.render(<TopSalesList purchaseOrders = {body} />, document.getElementById('app'));
  }
  
});
