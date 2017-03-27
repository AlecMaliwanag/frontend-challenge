import React from 'react';

var TopSalesItem = (props) => {
  return (
    <div style={itemWrapper}>
    <div style = {numberWrapper}>
    <p style={numberStyle}> {props.index + 1} </p>
    </div>
    <div style={productTextWrapper}>
    <p style={itemName}>{props.name}</p>
    <p style={itemRevenue}>{props.revenue}</p>
    </div> 
    </div>
  );
};
/*============================================STYLES============================================*/
const itemWrapper = {
  width: '100%',
  height: '44px',
  display: 'flex',
  flexDirection: 'row'
};
const numberWrapper = {
  width: '15%',
  height: '100%'
};
const numberStyle = {
  margin: 'auto',
  backgroundColor: '9BCA3C',
  borderRadius: '100%',
  textAlign: 'center',
  width: '30px',
  height: '23px',
  paddingTop: '7px',
  color: 'white',
  marginTop: '8px'
};
const productTextWrapper = {
  width: '85%',
  marginBottom: '0px',
  borderTopWidth: '1px',
  borderTopStyle: 'solid',
  borderColor: 'EEEEEF'
};
const itemName = {
  width: '100%',
  fontSize: '14px',
  marginTop: '4px',
  marginBottom: '0px'
};
const itemRevenue = {
  marginTop: '4px',
  fontSize: '10px',
  color: '#CCCCCC'
};

export default TopSalesItem;