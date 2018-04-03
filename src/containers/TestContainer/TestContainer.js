import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { testRedux } from './action';


class TestContainer extends Component {
  static propTypes = {
    testRedux: PropTypes.func,
  };

 

  data={
    name: 'med',
  };
  componentDidMount() {
    this.props.testRedux(this.data);
  }
 
  render() {
    const { data } = this.props;
    return (
      <div>
        Test
      </div>
    );
  }
}

function mapStateToProps({ testReduxReducer }) {
  return {
    data: testReduxReducer.get('data'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    testRedux: data => dispatch(testRedux(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
