import React from 'react';
import Job from './Job';
import {jobsList} from '../data/datasource';

class WorkHistory extends React.Component{
    render(){
        return(
            <section>
                <h4>Work Experience</h4>
                {
                    jobsList.map(function(currentJob){
                        return <Job 
                        end = {currentJob.years.end}
                        start = {currentJob.years.start}
                        title = {currentJob.title}
                        company = {currentJob.company}
                        description = {currentJob.description}
                    />
                    })

                }
            </section>
        );
    }
}

export default WorkHistory;