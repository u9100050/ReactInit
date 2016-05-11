import React, {PropTypes, Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export default class ListOfRegs extends Component {
    componentWillMount() {
        this.props.getRegions();
    }

    onBtnClick() {

    }

    render() {
        const {regs} = this.props;

        return (
            <div className='leftSide'>
                <div className="filterWrapper">

                </div>
                <div className="listWrapper">
                    <ListGroup>
                        {regs.map((reg, regIndex)=> {
                            return <ListGroupItem
                                key={regIndex}
                                onClick={this.onBtnClick}
                            >{reg.RegName}</ListGroupItem>
                        })}
                    </ListGroup>
                </div>
            </div>
        )
    }
}

ListOfRegs.propTypes = {
    regs: PropTypes.array.isRequired,
    getRegions: PropTypes.func.isRequired
};
