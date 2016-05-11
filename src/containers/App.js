import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import ListOfRegs from '../components/ListRegs';
import MapViewPort from '../components/MapViewPort';

class App extends Component {
    render() {
        const {regions} = this.props.listData;
        const {getRegions} = this.props.Actions;
        return (
            <div className='main'>
                <ListOfRegs regs={regions} getRegions={getRegions}/>
                <MapViewPort />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        listData: state.listOfRegs
    }
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(Actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
