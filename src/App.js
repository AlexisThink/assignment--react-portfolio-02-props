import React, { Component } from 'react';
import SkillList from './components/SkillList';
import EduactionHistory from './components/EducationHistory';
import WorkHistory from './components/WorkHistory';


class App extends Component {
  render() {
    return (
      <div id="app-container">
        <SkillList />
        <EduactionHistory />
        <WorkHistory />
      </div>
    );
  }
}

export default App;
