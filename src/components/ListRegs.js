import React, {PropTypes, Component} from 'react';

export default class ListOfRegs extends Component {
    componentWillMount(){
      this.props.getRegions();  
    }
    render() {
        const {regs} = this.props;
        console.log(this.props);
        return (
            <div className='leftSide'>
                {regs}
            </div>
        )
    }
}

ListOfRegs.propTypes = {
    regs: PropTypes.array.isRequired,
    getRegions: PropTypes.func.isRequired
};
