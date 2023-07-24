import { ButtonInline, Card, DonutChart, Footer, Title } from '@tremor/react';
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

export const ProviderParticipationChartDonut = (props:any) => {
    return (
        <Card>
            <Title>Provider by Participation</Title>
            <DonutChart 
                data={props.dataset}
                category='count'
                dataKey='name'
                marginTop='mt-6'
                colors={["yellow", "violet", "indigo", "green", "cyan", "rose"]}
            />
            <Footer>
                <Link to='/providers/'>
                  <ButtonInline
                      size="sm"
                      text="View details"
                      icon={ RiIcons.RiArrowRightCircleFill }
                      iconPosition="right"
                  />
                </Link>
            </Footer>
        </Card>
    )
}