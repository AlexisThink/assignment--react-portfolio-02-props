import React from 'react';

class Degree extends React.Component{
    render(){
        return(
            <div className="degree-">
                <h5 className="degree__institute">{this.props.institute}</h5>
                <p className="degree__field">{this.props.field}</p>
                <p className="degree__dates">{this.props.dates}</p>
            </div>
        );
    }
}

export default Degree;