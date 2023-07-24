import { ButtonInline, Card, DonutChart, Footer, Title } from '@tremor/react';
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

export const ClientChartDonut = (props: any) => {
  return (
    <Card>
      <Title>Clients by Service</Title>
      <DonutChart
        data={props.dataset}
        category='count'
        dataKey='name'
        marginTop='mt-6'
        colors={["yellow", "violet", "indigo", "green", "cyan", "rose"]}
      />
      <Footer>
        <Link to='/clients/'>
          <ButtonInline
            size="sm"
            text="View details"
            icon={RiIcons.RiArrowRightCircleFill}
            iconPosition="right"
          />
        </Link>
      </Footer>
    </Card>
  );
}