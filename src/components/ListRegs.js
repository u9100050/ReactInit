import React, {PropTypes, Component} from 'react'
import {ListGroup, ListGroupItem, FormControl, Panel} from 'react-bootstrap'

export default class ListOfRegs extends Component {
    onBtnClick(e) {
        alert(e.target.textContent);
    }

    onChangeFilter(e) {
        this.props.changeFilter(e.target.value)
    }

    componentWillMount() {
        this.props.getRegions()
    }

    render() {
        const {regs} = this.props;
        // const {setFilter} = this.props;
        return (
            <div className='leftSide'>
                <div className='filterWrapper'>
                    <FormControl
                        className='filter'
                        placeholder='Поиск...'
                        onChange={::this.onChangeFilter}
                    />
                </div>
                <Panel className='listWrapper'>
                    <ListGroup>
                        {regs.map((reg, regIndex)=> {
                            return (
                                <ListGroupItem
                                    key={regIndex}
                                    onClick={::this.onBtnClick}
                                >{reg.RegName}
                                </ListGroupItem>
                            )
                        })}
                    </ListGroup>
                </Panel>
            </div>
        )
    }
}

ListOfRegs.propTypes = {
    regs: PropTypes.array.isRequired,
    getRegions: PropTypes.func.isRequired,
    changeFilter: PropTypes.func.isRequired
}
