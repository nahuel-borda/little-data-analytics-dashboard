import React from 'react'
import { Card, DonutChart, Title } from '@tremor/react'

class ProviderParticipationChartDonut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dataset: []
        }
    }
  
  
    componentDidMount() {
        fetch('http://35.193.132.91:8000/providers/provider_by_participation/')
        .then(res => res.json())
        .then(
          json => {this.setState(
            { 
              'dataset': json
            }
          );
        }
        )
    }
  
    render() {
        return (
            <Card maxWidth="max-w-sm">
                <Title>Provider by Participation</Title>
                <DonutChart 
                    data={this.state.dataset}
                    category='count'
                    dataKey='name'
                    marginTop='mt-6'
                    colors={["yellow", "violet", "indigo", "green", "cyan", "rose"]}
                />
            </Card>
          )
    };
  }
  
  export default ProviderParticipationChartDonut