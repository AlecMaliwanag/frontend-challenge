import React from 'react';

var TopSalesItem = (props) => {

    return (
      <div>
      <p>name : {props.name}</p>
      <p>count: {props.count} </p>
      <p>Revenue: {props.revenue}</p> 
      </div>
    );
};
export default TopSalesItem;