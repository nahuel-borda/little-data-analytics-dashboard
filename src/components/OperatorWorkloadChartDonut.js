import React from 'react'
import { Card, DonutChart, Title } from '@tremor/react'

class OperatorWorkloadChartDonut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dataset: []
        }
    }
  
  
    componentDidMount() {
        fetch('http://35.193.132.91:8000/operators/operator_by_workload/')
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
                <Title>Operator by Workload</Title>
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
  
export default OperatorWorkloadChartDonut