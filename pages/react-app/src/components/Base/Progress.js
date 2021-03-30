import React from 'react';
import { Progress } from 'element-react';

class ProgressBase extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      value: this.props.value,
      status: this.props.value>=50 ? 'success':'exception'
    }
  }
  render() {
    const {value, status} = this.state;
    return (
      <div>
        <Progress percentage={value} status={status} />
      </div>
    )
  }
}
export default ProgressBase;