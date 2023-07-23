import { Card, Title, BarChart, Block, ButtonInline } from "@tremor/react";
import React from "react";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export const ProviderBarChartBox = (props:any) => {
    return (
        <Card>
            <Title>Providers participation</Title>
            <BarChart
              data={props.dataset}
              dataKey="name"
              categories={["count"]}
              colors={["violet"]}
              valueFormatter={dataFormatter}  
              marginTop="mt-6"         
              yAxisWidth="w-10"
            />
        </Card>
    );
}