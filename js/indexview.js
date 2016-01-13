import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { dummyAction } from './actions';

class IndexView extends Component {
  componentWillMount() {
    this.sendDummyAction(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id === this.props.id) return;

    this.sendDummyAction(nextProps);
  }

  sendDummyAction(props) {
    if (!props.id) return;

    props.dummyAction(props.id);
  }

  render() {
    const list = this.props.list;
    if (list.length === 0) return null;

    const items = list.map(number => {
      return (
        <li key={number}>
          <Link to={'/dummy/' + number}>{number}</Link>
        </li>
      )
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    list: state.dummy.list,
    id: props.params.id
  }
}

export default connect(mapStateToProps, {
  dummyAction
})(IndexView);
