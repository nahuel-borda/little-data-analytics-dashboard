import { Card, Title, BarChart } from "@tremor/react";
import React from "react";
import { Block, ButtonInline } from '@tremor/react'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export const OperatorBarChartBox = (props:any) =>{
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