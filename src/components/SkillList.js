import React from 'react';
import Skill from './Skill';
import {skills} from '../data/datasource';

class SkillList extends React.Component{
    render(){
        return(
            <section>
                <h4>Skills</h4>
                <div className="skills-list">
                {
                    skills.map(function(currentSkill){
                        return <Skill type={currentSkill} />
                    })
                }
                </div>     
            </section>
        );
    }
}
export default SkillList;