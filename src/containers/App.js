import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/Actions'

class App extends Component {
  render() {
    const { elems } = this.props.elems;
    const { func } = this.props.func;

    return <div func={func} props={elems}></div>
  }
}

function mapStateToProps(state) {
  return {
    elems: state.elems,
    func: state.func
  }
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
