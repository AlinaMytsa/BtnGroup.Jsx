import React from "react";
import cn from "classnames";

class BtnGroup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      status: 'inert'
    }
    };

  handleClick = () => {
    this.setState({status: 'active'})
  }


  render() {
    const statusOfBtn = cn(' btn-secondary',{
      'active' : this.state.status === 'active',
      'inert': this.state.status === 'inert'
    })

    return(
      <div className="btn-group" role="group">
        <button onClick={this.handleClick} type="button" className={statusOfBtn + ' left'}>Left</button>
        <button onClick={this.handleClick} type="button" className={statusOfBtn + ' right'}>Right</button>
      </div>
    )
  }
}



export default BtnGroup;
