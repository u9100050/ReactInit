/**
 * Created by NekrasovAA on 11.05.2016.
 */
import React, {/*PropTypes,*/ Component} from 'react';
import {Panel} from 'react-bootstrap';
export default class MapViewPort extends Component {
    render() {
        return (
            <div className='mapViewPort'>
                <Panel className='mapPanel'>
                    <Panel className='map'/>
                </Panel>
                <Panel className='infoPanel'/>
            </div>
        )
    }
}

// MapViewPort.propTypes ={
//     // elems: PropTypes.array.isRequired
// };