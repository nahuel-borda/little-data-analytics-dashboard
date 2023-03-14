import { Card, Title, AreaChart } from "@tremor/react";
import React from "react";


const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

export const ChartDonut = (props) => {

    return (
        <Card>
            <Title>Newsletter revenue over time (USD)</Title>
            <AreaChart
                data={props.dataset}
                categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                dataKey="date"
                height="h-72"
                colors={["indigo", "cyan"]}
                valueFormatter={dataFormatter}
                marginTop="mt-4"
            />
        </Card>
    )
}