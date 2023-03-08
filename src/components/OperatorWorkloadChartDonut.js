import React from 'react'
import { Card, DonutChart, Title, Footer, ButtonInline } from '@tremor/react'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

class OperatorWorkloadChartDonut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dataset: []
        }
    }
  
  
    componentDidMount() {
        fetch('http://localhost:8000/operators/operator_by_workload/')
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
            <Card>
                <Title>Operators by Workload</Title>
                <DonutChart 
                    data={this.state.dataset}
                    category='count'
                    dataKey='name'
                    marginTop='mt-6'
                    colors={["yellow", "violet", "indigo", "green", "cyan", "rose"]}
                />
                <Footer>
                    <Link to='/operators/'>
                      <ButtonInline
                          size="sm"
                          text="View details"
                          icon={ RiIcons.RiArrowRightCircleFill }
                          iconPosition="right"
                      />
                    </Link>
                </Footer>
            </Card>
          )
    };
  }
  
export default OperatorWorkloadChartDonut