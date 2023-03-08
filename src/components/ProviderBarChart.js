import { Card, Title, BarChart } from "@tremor/react";
import React from "react";

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

class ProviderBarChartBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dataset: []
        }
    }

    parseServices(data) {
        // Add each service status to the statusCountDataset object
        let datasetList = data
        
        // Update the state
        this.setState(
          { 
            'dataset': datasetList
          }
        );
    }

    componentDidMount() {
        fetch('http://localhost:8000/providers/provider_by_participation/')
        .then(res => res.json())
        .then(
            json => {this.parseServices(json)}
        )
    }

    render() {
        return (
            <Card>
                <Title>Providers participation</Title>
                <BarChart
                data={this.state.dataset}
                dataKey="name"
                categories={["count"]}
                colors={["violet"]}
                valueFormatter={dataFormatter}  
                marginTop="mt-6"         
                yAxisWidth="w-10"
                />
            </Card>
          )
    };
}

export default ProviderBarChartBox