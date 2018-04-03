import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { extarctDates } from './action';


class TestContainer extends Component {
  static propTypes = {
    extarctDates: PropTypes.func,
  };

 

  data={
    name: 'med',
  };
  componentDidMount() {
    this.props.extarctDates(this.data);
  }
 
  render() {
    const { days } = this.props;
    days ? console.log(days.name) : console.log('gggg');
    const ff = "ff";
    return (
      <div>
        
      { days ? `${days }` : `${ff }`}
      </div>
    );
  }
}

function mapStateToProps({ scrollDayReducer }) {
  return {
    days: scrollDayReducer.get('data'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    extarctDates: data => dispatch(extarctDates(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
