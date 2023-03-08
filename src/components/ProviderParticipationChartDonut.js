import React from 'react'
import { Card, DonutChart, Title, Footer, ButtonInline } from '@tremor/react'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

class ProviderParticipationChartDonut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dataset: []
        }
    }
  
  
    componentDidMount() {
        fetch('http://localhost:8000/providers/provider_by_participation/')
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
                <Title>Provider by Participation</Title>
                <DonutChart 
                    data={this.state.dataset}
                    category='count'
                    dataKey='name'
                    marginTop='mt-6'
                    colors={["yellow", "violet", "indigo", "green", "cyan", "rose"]}
                />
                <Footer>
                    <Link to='/providers/'>
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
  
  export default ProviderParticipationChartDonut