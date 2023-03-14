import { Card, Title, BarChart } from "@tremor/react";
import React from "react";


const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export const ClientLineChartBox = (props) => {
    return (
        <Card>
            <Title>Clients services</Title>
            <BarChart
            data={props.dataset}
            dataKey="name"
            categories={["count"]}
            colors={["green"  ]}
            valueFormatter={dataFormatter}  
            marginTop="mt-6"         
            yAxisWidth="w-10"
            />
        </Card>
      )
}