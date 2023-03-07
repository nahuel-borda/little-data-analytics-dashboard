import { Card, Title, LineChart } from "@tremor/react";
import React from "react";

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

class LineChartBox extends React.Component {
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
        fetch('http://35.193.132.91:8000/services/status_count_by_date/')
        .then(res => res.json())
        .then(
            json => {this.parseServices(json)}
        )
    }

    render() {
        return (
            <Card>
                <Title>New services by date.</Title>
                <LineChart
                data={this.state.dataset}
                dataKey="date"
                categories={["count"]}
                colors={["blue"]}
                valueFormatter={dataFormatter}  
                marginTop="mt-6"         
                yAxisWidth="w-10"
                />
            </Card>
          )
    };
}

export default LineChartBox