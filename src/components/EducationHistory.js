import React from 'react';
import {eduList} from '../data/datasource';
import Degree from './Degree';

class EducationHistory extends React.Component{
    render(){
        return(
            <section>
                <h4>Education</h4>
                {
                    eduList.map(function(currentEdu){
                       return <Degree 
                        institute = {currentEdu.institute}
                        field = {currentEdu.fieldOfStudy}
                        dates = {currentEdu.dates} />
                    })
                }
            </section>
        );
    }
}

export default EducationHistory;