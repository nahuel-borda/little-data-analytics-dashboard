import { Card, LineChart, Title } from "@tremor/react";

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export const StatusCountLineChartBox = (props: any) => {
  return (
    <Card>
      <Title>New services by date</Title>
      <LineChart
        data={props.dataset}
        dataKey="date"
        categories={["count"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
        marginTop="mt-6"
        yAxisWidth="w-10"
      />
    </Card>
  )
}