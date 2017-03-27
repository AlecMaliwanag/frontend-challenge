import React from 'react';
import ReactDOM from 'react-dom';
import TopSalesList from "../../dist/TopSalesList/index.js";
import transformData from "../../dist/Utils/transformData.js";
import request from 'request';

request.get('http://localhost:3000/PurchaseOrders', function (error, response, body) {
  if (error) {
    //handle error do I requiry the db or redirect to a 404 page?
    console.log(error)
  } else {
    console.log(typeof body);
    transformData(JSON.parse(body));
    ReactDOM.render(<TopSalesList PurchaseOrders = {body}/>, document.getElementById('app'));
  }
});
