import React from 'react'
import { Card, DonutChart, Title, Footer, ButtonInline } from '@tremor/react'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

class ClientChartDonut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dataset: []
        }
    }
  
  
    componentDidMount() {
        fetch('http://localhost:8000/clients/top_client_by_services/')
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
                <Title>Clients by Service</Title>
                <DonutChart 
                    data={this.state.dataset}
                    category='count'
                    dataKey='name'
                    marginTop='mt-6'
                    colors={["yellow", "violet", "indigo", "green", "cyan", "rose"]}
                />
                <Footer>
                    <Link to='/clients/'>
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
  
  export default ClientChartDonut