import React from 'react';
import DashboardCard from '../../components/DashboardCard/DashboardCard';
import './Dashboard.css';

const dataComesFromServer = [
  { id: 1, title: 'GDPR', description: 'Make sure your business is compliant' },
  {
    id: 2,
    title: 'Managing people',
    description: 'Solve your everyday HR stuff with easy-to-follow processes',
  },
  {
    id: 3,
    title: 'Hiring people',
    description:
      'Build the right team with a smooth hiring process or check your business has all it needs to comply with employment law',
  },
];

class Dashboard extends React.Component {
  state = {
    selectedTopic: '',
  };

  onClickHandler = (selectedTopic) => {
    this.setState({ selectedTopic });
  };

  render() {
    const { selectedTopic } = this.state;
    const getData = dataComesFromServer.map(item => (
      <DashboardCard
        key={item.id}
        title={item.title}
        description={item.description}
        onClick={this.onClickHandler}
      />
    ));
    return (
      <div className="Dashboard-section">
        {getData}
        {selectedTopic}
      </div>
    );
  }
}

export default Dashboard;
