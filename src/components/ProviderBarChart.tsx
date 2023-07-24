import { BarChart, Card, Title } from "@tremor/react";

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export const ProviderBarChartBox = (props: any) => {
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