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
    console.log('this ran');
    console.log(this.state.data);
    return (
      <div>
      <div>all my small compoments
      <div>
      {this.state.data.map((product, i) => <TopSalesItem revenue={product.revenue} name={product.name} count={product.count} index = {i}/>)}
      </div>
      </div>

      <p>test</p>
      </div>
    );
  }
}

export default TopSalesList;

//{