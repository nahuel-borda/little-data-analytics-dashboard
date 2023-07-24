import { Block, Col, ColGrid, Tab, TabList } from '@tremor/react'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { SyncLoader } from 'react-spinners'
import { ServiceStatusChartDonut } from './ChartDonut'
import { ClientChartDonut } from './ClientChartDonut'
import { ClientLineChartBox } from './ClientLineChart'
import { ClientsTableBase } from './ClientsTableBase'
import { StatusCountLineChartBox } from './LineChart'
import { OperatorBarChartBox } from './OperatorBarChart'
import { OperatorWorkloadChartDonut } from './OperatorWorkloadChartDonut'
import { OperatorsTableBase } from './OperatorsTableBase'
import { ProviderBarChartBox } from './ProviderBarChart'
import { ProviderParticipationChartDonut } from './ProviderParticipationChartDonut'
import { ProvidersTableBase } from './ProvidersTableBase'
import { ServicesTableBase } from './ServicesTableBase'


export const DashboardBase = (props: any) => {
    const data = props.dataset;
    const loading = props.loading;
    const navigate = useNavigate();
    const location = useLocation();

    const getViewFromQueryParam = React.useCallback(() => {
        const params = new URLSearchParams(location.search);
        const view = params.get("view") ? params.get("view") : 1;
        return Number(view);
    }, [location.search]);

    const [selectedView, setSelectedView] = React.useState(getViewFromQueryParam());

    useEffect(() => {
        const view = getViewFromQueryParam();
        setSelectedView(view);
    }, [getViewFromQueryParam]);

    const handleViewSelection = (view) => {
        setSelectedView(view);
        navigate(`/dashboard/?view=${view}`);
    };


    return (
        <main className='bg-gray-50 p-6 sm:p-10'>
            <TabList defaultValue={selectedView} onValueChange={value => handleViewSelection(value)} color="sky">
                <Tab value={1} text="Overview" />
                <Tab value={2} text="Services" />
                <Tab value={3} text="Providers" />
                <Tab value={4} text="Clients" />
                <Tab value={5} text="Operators" />
            </TabList>

            {(() => {
                if (!loading) {
                    if (selectedView === 1) {

                        return (
                            <>
                                <Block marginTop='mt-6'>
                                    <ColGrid numColsMd={2} numColsLg={4} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
                                        <Col >
                                            <ServiceStatusChartDonut dataset={data.services_by_status} />
                                        </Col>
                                        <Col >
                                            <OperatorWorkloadChartDonut dataset={data.operator_by_workload} />
                                        </Col>
                                        <Col >
                                            <ProviderParticipationChartDonut dataset={data.provider_by_participation} />
                                        </Col>
                                        <Col >
                                            <ClientChartDonut dataset={data.clients_by_services} />
                                        </Col>
                                    </ColGrid>
                                </Block>

                                <Block marginTop='mt-6'>
                                    <ColGrid numColsMd={2} numColsLg={2} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
                                        <Col >
                                            <StatusCountLineChartBox dataset={data.service_ingress_count_by_date} />
                                        </Col>
                                        <Col >
                                            <OperatorBarChartBox dataset={data.top_operator_by_workload} />
                                        </Col>
                                        <Col >
                                            <ProviderBarChartBox dataset={data.top_provider_by_participation} />
                                        </Col>
                                        <Col >
                                            <ClientLineChartBox dataset={data.top_clients_by_services} />
                                        </Col>
                                    </ColGrid>
                                </Block>
                            </>
                        )
                    } else if (selectedView === 2) {
                        return (
                            <>
                                <Block marginTop='mt-6'>
                                    <ColGrid numColsMd={2} numColsLg={2} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
                                        <Col >
                                            <ServiceStatusChartDonut dataset={data.services_by_status} />
                                        </Col>
                                        <Col >
                                            <StatusCountLineChartBox dataset={data.status_count_by_date} />
                                        </Col>
                                    </ColGrid>
                                </Block>
                                <Block marginTop='mt-6'>
                                    <ServicesTableBase dataset={data} />
                                </Block>
                            </>
                        )
                    } else if (selectedView === 3) {
                        return (
                            <>
                                <Block marginTop='mt-6'>
                                    <ColGrid numColsMd={2} numColsLg={2} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
                                        <Col >
                                            <ProviderParticipationChartDonut dataset={data.provider_by_participation} />
                                        </Col>
                                        <Col >
                                            <ProviderBarChartBox dataset={data.top_provider_by_participation} />
                                        </Col>
                                    </ColGrid>
                                </Block>
                                <Block marginTop='mt-6'>
                                    <ProvidersTableBase dataset={data} />
                                </Block>
                            </>
                        );
                    } else if (selectedView === 4) {
                        return (
                            <>
                                <Block marginTop='mt-6'>
                                    <ColGrid numColsMd={2} numColsLg={2} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
                                        <Col >
                                            <ClientChartDonut dataset={data.clients_by_services} />
                                        </Col>
                                        <Col >
                                            <ClientLineChartBox dataset={data.top_clients_by_services} />
                                        </Col>
                                    </ColGrid>
                                </Block>
                                <Block marginTop='mt-6'>
                                    <ClientsTableBase dataset={data} />
                                </Block>
                            </>
                        );
                    } else {
                        return (
                            <>
                                <Block marginTop='mt-6'>
                                    <ColGrid numColsMd={2} numColsLg={2} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
                                        <Col >
                                            <OperatorWorkloadChartDonut dataset={data.operator_by_workload} />
                                        </Col>
                                        <Col >
                                            <OperatorBarChartBox dataset={data.top_operator_by_workload} />
                                        </Col>
                                    </ColGrid>
                                </Block>
                                <Block marginTop='mt-6'>
                                    <OperatorsTableBase dataset={data} />
                                </Block>
                            </>
                        );
                    }
                } else {
                    return (
                        <Block marginTop='mt-6'>
                            <ColGrid numColsMd={1} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
                                <Col >
                                    <div className="sweet-loading">
                                        <SyncLoader
                                            color={'#123abc'}
                                            loading={loading}
                                        />
                                    </div>

                                </Col>
                            </ColGrid>
                        </Block>

                    );
                }
            })()}

        </main>
    );
}