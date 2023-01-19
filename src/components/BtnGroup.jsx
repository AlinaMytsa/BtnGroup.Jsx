import React from "react";
import cn from "classnames";

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusLeft: 'inert',
      statusRight: 'inert'
    }
  };

  handleClick = (side) => () => {
    if (side === 'left'){
      this.setState({
        statusLeft: true,
        statusRight: false,
      })
    }

    if (side === 'right'){
      this.setState({
        statusLeft: false,
        statusRight: true,
      })
    }
  }

  handleClickLeft = this.handleClick('left');
  handleClickRight = this.handleClick('right');



  render() {
    const statusOfLeftBtn = cn('btn btn-secondary', {
      'left': true,
      'active': this.state.statusLeft
    })

    const statusOfRightBtn = cn('btn btn-secondary',{
      'right': true,
      'active': this.state.statusRight
    })

    return (
      <div className="btn-group" role="group">
        <button type="button" className={statusOfLeftBtn} onClick={this.handleClickLeft}>Left</button>
        <button type="button" className={statusOfRightBtn} onClick={this.handleClickRight}>Right</button>
      </div>
    )
  }
}


export default BtnGroup;
