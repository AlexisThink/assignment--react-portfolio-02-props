import React from 'react';

class Skill extends React.Component{
    render(){
        return(
            <span className="skills-list__single">{this.props.type}</span>
        );
    }
}

export default Skill