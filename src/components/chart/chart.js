import React from 'react';
import BarChart from 'react-bar-chart';
 
const data = [
    {text: 'Apr 21', value: 345}, 
    {text: 'Apr 22', value: 149}, 
    {text: 'Apr 23', value: 736}, 
    {text: 'Apr 24', value: 431}, 
    {text: 'Apr 25', value: 192}, 
    {text: 'Apr 26', value: 332}, 
    {text: 'Apr 27', value: 76} 
];
 
const margin = {top: 20, right: 20, bottom: 30, left: 40};
 
export default class Chart extends React.Component {

  state = {
    width: 500
  }
 
  componentDidMount() {
    window.onresize = () => {
     this.setState({width: this.refs.root.offsetWidth}); 
    };
  }
 
  handleBarClick(element, id){ 
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }
 
  render() {
    return (
        <div>
            <div><h2> Visits of last week </h2></div>
            <div ref='root'style={{paddingLeft: '30%', fill: 'steelblue'}}>
                <div style={{width: '50%'}}> 
                    <BarChart ylabel='Visits'
                    width={this.state.width}
                    height={500}
                    margin={margin}
                    data={data}
                    onBarClick={this.handleBarClick}/>
                </div>
            </div>
        </div>
        
    );
  }
};