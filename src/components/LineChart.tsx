import { Card, Title, LineChart } from "@tremor/react";
import React from "react";
import { Block, ButtonInline } from '@tremor/react'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export const StatusCountLineChartBox = (props:any) => {
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