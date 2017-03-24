import React, {Component} from 'react';
import './Measure.css';



class Measure extends Component {

    render() {
        return (
            <div className="choosingMeasure">
            <div>Weight</div>
            <div>Length</div>
            <div>Temperature</div>
            </div>
        );
    }
}

export default Measure;