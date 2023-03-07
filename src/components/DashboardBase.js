import { Title, Text, TabList, Tab, ColGrid, Card, Block, Col, Metric } from '@tremor/react'
import React, { useState } from 'react'
import CardGridMap from './CardGridMap'
import ServiceStatusChartDonut from './ChartDonut'
import OperatorWorkloadChartDonut from './OperatorWorkloadChartDonut'
import ProvicerParticipationChartDonut from './ProviderParticipationChartDonut'
import LineChartBox from './LineChart'
import TableBase from './ServicesTableBase'

const DashboardBase = () => {
    const [selectedView, setSelectedView] = useState(1)

  return (
    <main className='bg-slate-200 p-6 sm:p-10'>
        {/*<Title>Dashboard</Title>*/}
        {/*<Text>Ejemplo de Dashboard con Tremor y React</Text>*/}

        <TabList defaultValue={selectedView} handleSelect={ value => setSelectedView(value)}>
            <Tab value={1} text="Overview" />
            <Tab value={2} text="Services" />
        </TabList>

        { selectedView === 1 ? (
            <>
                <CardGridMap />
                <Block marginTop='mt-6'>
                    <ColGrid numColsSm={3} gapX="gap-x-2" gapY="gap-y-2">
                        <Col >
                            <ServiceStatusChartDonut />
                        </Col>
                        <Col >
                            <OperatorWorkloadChartDonut />
                        </Col>
                        <Col >
                            <ProvicerParticipationChartDonut />
                        </Col>
                    </ColGrid>
                </Block>

                <Block marginTop='mt-6'>
                    <LineChartBox />
                </Block>
            </>
        ) : (
            <>
                <Block marginTop='mt-6'>
                    <TableBase />
                </Block>
            </>
        )

        }


    </main>
  )
}

export default DashboardBase