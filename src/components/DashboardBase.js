import { Title, Text, TabList, Tab, ColGrid, Card, Block, Col, Metric, LineChart } from '@tremor/react'
import React, { useState } from 'react'
import CardGridMap from './CardGridMap'
import ServiceStatusChartDonut from './ChartDonut'
import OperatorWorkloadChartDonut from './OperatorWorkloadChartDonut'
import ProviderParticipationChartDonut from './ProviderParticipationChartDonut'
import LineChartBox from './LineChart'
import TableBase from './ServicesTableBase'
import ProvidersTableBase from './ProvidersTableBase'
import ClientsTableBase from './ClientsTableBase'
import OperatorsTableBase from './OperatorsTableBase'
import ClientChartDonut from './ClientChartDonut'
import ClientLineChartBox from './ClientLineChart'
import ProviderBarChartBox from './ProviderBarChart'
import OperatorBarChartBox from './OperatorBarChart'

const DashboardBase = () => {
    const [selectedView, setSelectedView] = useState(1)

  return (
    <main className='bg-gray-50 p-6 sm:p-10'>
        {/*<Title>Dashboard</Title>*/}
        {/*<Text>Ejemplo de Dashboard con Tremor y React</Text>*/}

        <TabList defaultValue={selectedView} handleSelect={ value => setSelectedView(value)} color="lightblue">
            <Tab value={1} text="Overview" />
            <Tab value={2} text="Services" />
            <Tab value={3} text="Providers" />
            <Tab value={4} text="Clients" />
            <Tab value={5} text="Operators" />
        </TabList>
        

        {(() => {
        if (selectedView === 1)  {
          return (
            <>
                <Block marginTop='mt-6'>
                    <ColGrid numColsMd={2} numColsLg={4} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
                        <Col >
                            <ServiceStatusChartDonut />
                        </Col>
                        <Col >
                            <OperatorWorkloadChartDonut />
                        </Col>
                        <Col >
                            <ProviderParticipationChartDonut />
                        </Col>
                        <Col >
                            <ClientChartDonut />
                        </Col>
                    </ColGrid>
                </Block>

                <Block marginTop='mt-6'>
                <ColGrid numColsMd={2} numColsLg={2} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
                        <Col >
                            <LineChartBox />
                        </Col>
                        <Col >
                            <OperatorBarChartBox />
                        </Col>
                        <Col >
                            <ProviderBarChartBox />
                        </Col>
                        <Col >
                            <ClientLineChartBox />
                        </Col>
                    </ColGrid>
                </Block>
            </>
          )
        } else if (selectedView === 2)  {
          return (
            <>
                <Block marginTop='mt-6'>
                    <ColGrid numColsMd={2} numColsLg={2} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
                        <Col >
                            <ServiceStatusChartDonut />
                        </Col>
                        <Col >
                            <LineChartBox />
                        </Col>
                    </ColGrid>
                </Block>
                <Block marginTop='mt-6'>
                    <TableBase />
                </Block>
            </>
          )
        } else if (selectedView === 3) {
            return (
            <>
                <Block marginTop='mt-6'>
                    <ColGrid numColsMd={2} numColsLg={2} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
                        <Col >
                            <ProviderParticipationChartDonut />
                        </Col>
                        <Col >
                            <ProviderBarChartBox />
                        </Col>
                    </ColGrid>
                </Block>
                <Block marginTop='mt-6'>
                    <ProvidersTableBase />
                </Block>
            </>
            );
        } else if (selectedView === 4) {
            return (
                <>
                    <Block marginTop='mt-6'>
                        <ColGrid numColsMd={2} numColsLg={2} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
                            <Col >
                                <ClientChartDonut />
                            </Col>
                            <Col >
                                <ClientLineChartBox />
                            </Col>
                        </ColGrid>
                    </Block>
                    <Block marginTop='mt-6'>
                        <ClientsTableBase />
                    </Block>
                </>
            );
        } else {
            return (
                <>
                    <Block marginTop='mt-6'>
                        <ColGrid numColsMd={2} numColsLg={2} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
                            <Col >
                                <OperatorWorkloadChartDonut />
                            </Col>
                            <Col >
                                <OperatorBarChartBox />
                            </Col>
                        </ColGrid>
                    </Block>
                    <Block marginTop='mt-6'>
                        <OperatorsTableBase />
                    </Block>
                </>
            );
        }
      })()}


    </main>
  )
}

export default DashboardBase