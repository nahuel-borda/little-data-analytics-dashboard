import { BarChart, Card, Title } from "@tremor/react";

const dataFormatter = (number: number) =>
    `${Intl.NumberFormat("us").format(number).toString()}`;

export const OperatorBarChartBox = (props: any) => {
    return (
        <Card>
            <Title>Operators workload</Title>
            <BarChart
                data={props.dataset}
                dataKey="name"
                categories={["count"]}
                colors={["rose"]}
                valueFormatter={dataFormatter}
                marginTop="mt-6"
                yAxisWidth="w-10"
            />
        </Card>
    )
}