//feel free to use lodash; it provides alot of type methods that are native to other languages
//import {function} from 'lodash';

//transform data if needed here
export default function transformData (data) {
  //transform data to a single object of products with count and revenue
  // double iterate over array, if it exists in new object, aggregate the values
  let soldProducts = {};
  let items = [];
  data.forEach(purchase => {
    purchase.products.forEach(item => {
      if (soldProducts[item.name]) {
        soldProducts[item.name].count +=item.order_count;
        soldProducts[item.name].revenue += item.order_count * (item.vendor_price.value / Math.pow(10,item.vendor_price.scale));
      } else {
        soldProducts[item.name] = {
          count: item.order_count,
          revenue: item.order_count * (item.vendor_price.value / Math.pow(10, item.vendor_price.scale)),
          name: item.name
        };
      }
    });
  });
  //push every single object into an array
  for (let key in soldProducts) {
    items.push(soldProducts[key]);
  }
  //sort array
  items.sort((a, b) => {
    if (a.count > b.count) return -1;
    else if (a.count === b.count) {
      if (a.revenue > b.revenue) return -1;
      else return 1;
    } else return 1;
  });
  console.log(items.slice(0,10));
  return items.slice(0,10);
}