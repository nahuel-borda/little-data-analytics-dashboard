import React from 'react'
import { Card, DonutChart, Title } from '@tremor/react'

class ServiceStatusChartDonut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          statusCountDataset: []
        }
    }

    parseStatusCountDataset(status_count) {
        // Add each service status to the statusCountDataset object
        let statusCountDatasetList = status_count
        
        // Update the state
        this.setState(
          { 
            'statusCountDataset': statusCountDatasetList
          }
        );
    }

    componentDidMount() {
        fetch('http://35.193.132.91:8000/services/status_count/')
        .then(res => res.json())
        .then(
        json => {this.parseStatusCountDataset(json)}
        )
    }

    render() {
        return (
            <Card maxWidth="max-w-sm">
                <Title>Service by status</Title>
                <DonutChart 
                    data={this.state.statusCountDataset}
                    category='count'
                    dataKey='name'
                    marginTop='mt-6'
                   i colors={["yellow", "violet", "indigo", "green", "cyan", "rose"]}
                />
            </Card>
          )
    };
}

export default ServiceStatusChartDonut