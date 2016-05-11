import React, {PropTypes, Component} from 'react';

export default class ListOfRegs extends Component {
    constructor(){
        this.props.getRegions();
    }
    render() {
        const {regs} = this.props;
        return (
            <div className="leftSide">
                {regs}
            </div>
        )
    }
}

ListOfRegs.propTypes = {
    regs: PropTypes.array.isRequired
};
