import React from 'react';
import Styles from './top_sales.scss';
import transformData from "../../dist/Utils/transformData.js";
import TopSalesItem from "./top_sales_item.component.js";



// export default TopSalesList;
//write top sales list component here
class TopSalesList extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {data:[]};
  }
  componentWillMount() {
    this.setState({data:transformData(JSON.parse(this.props.purchaseOrders))});
  }

  render() {
    return (
      <div>
      <div style={divStyle}>
      <p style={listTitle}>Top Sales Items</p>
      <div style={itemRowWrapper}>
      {this.state.data.map((product, i) => <TopSalesItem revenue={product.revenue} name={product.name} count={product.count} index = {i}/>)}
      </div>
      </div>
      </div>
    );
  }
}
/*============================================STYLES============================================*/
const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '5% 2% 5% 5%',
  width: '48%',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'EEEEEF',
  justifyContent: 'center',
  alignItems: 'center'
};
const listTitle = {
  fontSize: '16px',
  color: '#000000',
  display: 'flex',
  alignSelf: 'flex-start',
  paddingLeft: '2%',
  marginTop: '2%',
  marginBottom: '5%'
};
const itemRowWrapper = {
  width: '95%'
};

export default TopSalesList;

