import React from 'react';
import { Checkbox } from 'element-react';

class CheckboxCheckAll extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      checkAll: props.defaultValue,
      checkText: props.defaultValue ? 'unchecked': 'checked',
      cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
      checkedCities: ['Shanghai', 'Beijing'],
      isIndeterminate: true,
    }
  }
  
  handleCheckAllChange(checked) {
    const checkedCities = checked ? ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'] : [];
  
    this.setState({
      isIndeterminate: false,
      checkAll: this.state.checkAll ? false : checked,
      checkText: this.state.checkAll ? 'checked' : 'unchecked',
      checkedCities: checkedCities,
    });
  }
  
  handleCheckedCitiesChange(value) {
    const checkedCount = value.length;
    const citiesLength = this.state.cities.length;
  
    this.setState({
      checkedCities: value,
      checkAll: checkedCount === citiesLength,
      isIndeterminate: checkedCount > 0 && checkedCount < citiesLength,
    });
  }
  
  render() {
    const {checkAll, checkedCities, cities, checkText, isIndeterminate} = this.state;
    return (
      <div>
        <Checkbox
          checked={checkAll}
          indeterminate={isIndeterminate}
          onChange={this.handleCheckAllChange.bind(this)}>{checkText} all</Checkbox>
        <div style={{margin: '15px 0'}}></div>
        <Checkbox.Group
          value={checkedCities}
          onChange={this.handleCheckedCitiesChange.bind(this)}>
          {
            cities.map((city, index) =>
              <Checkbox key={index} label={city}></Checkbox>
            )
          }
        </Checkbox.Group>
      </div>
    )
  }
}
export default CheckboxCheckAll;