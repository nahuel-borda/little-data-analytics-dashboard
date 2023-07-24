import { BarChart, Card, Title } from "@tremor/react";
import React from "react";


const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export const ClientLineChartBox = (props: any) => {

  const memoizedComponent = React.useMemo(() => (

    <Card>
      <Title>Clients services</Title>
      <BarChart
        data={props.dataset.map((item: any) => ({
          ...item,
          count: dataFormatter(item.count)
        }))}
        dataKey="name"
        categories={["count"]}
        colors={["green"]}
        marginTop="mt-6"
        yAxisWidth="w-10"
      />
    </Card>
  ), [props.dataset]);

  return memoizedComponent;
}