import { ButtonInline, Card, DonutChart, Footer, Title } from '@tremor/react';
import React from 'react';
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

export const OperatorWorkloadChartDonut = (props: any) => {

    const operatorsWorkload = React.useMemo(() => (
        <Card>
            <Title>Operators by Workload</Title>
            <DonutChart
                data={props.dataset}
                category='count'
                dataKey='name'
                marginTop='mt-6'
                colors={["yellow", "violet", "indigo", "green", "cyan", "rose"]}
            />
            <Footer>
                <Link to='/operators/'>
                    <ButtonInline
                        size="sm"
                        text="View details"
                        icon={RiIcons.RiArrowRightCircleFill}
                        iconPosition="right"
                    />
                </Link>
            </Footer>
        </Card>
    ), [props.dataset]);

    return operatorsWorkload
}