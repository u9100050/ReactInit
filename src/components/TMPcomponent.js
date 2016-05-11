import React, {PropTypes, Component} from 'react'

export default class TMP extends Component {
    onBtnClick(e) {}

    render() {
        const {elem} = this.props;
        return <div>
            <p>
                <button onClick={::this.onBtnClick}>{elem}</button>
            </p>
        </div>
    }
}

TMP.propTypes = {};
