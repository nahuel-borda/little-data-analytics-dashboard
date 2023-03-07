import { Card, Title, AreaChart } from "@tremor/react";
import React from "react";


const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

class ChartDonut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          servicesDataset: []
        }
    }

    parseServices(services) {
        // Add each service status to the statusCountDataset object
        let servicesDatasetList = services
        
        // Update the state
        this.setState(
          { 
            'servicesDataset': servicesDatasetList
          }
        );
    }

    componentDidMount() {
        fetch('http://35.193.132.91:8000/services')
        .then(res => res.json())
        .then(
        json => {this.parseServices(json)}
        )
    }

    render() {
        return (
            <Card>
                <Title>Newsletter revenue over time (USD)</Title>
                <AreaChart
                    data={this.state.services}
                    categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                    dataKey="date"
                    height="h-72"
                    colors={["indigo", "cyan"]}
                    valueFormatter={dataFormatter}
                    marginTop="mt-4"
                />
            </Card>
          )
    };
}

export default ChartDonut