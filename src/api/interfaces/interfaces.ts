
export interface Item {
    id: number
}

export interface Model extends Item {
    id: number,
    name: string,
}

export interface Brand extends Item {
    id: number,
    name: string,
}

export interface Part extends Item {
    id: number,
    name: string,
    provider?: Provider,
    brand?: Brand
}

export interface Client {
    id: number,
    firstname: string,
    lastname: string,
}

export interface Device extends Item {
    patent: string,
    model: Model,
    brand: Brand,
    client: Client,
}

export interface Provider extends Item {
    patent: string,
    name: string,
    address: string,
    celphone: string,
    email: string
}

export interface Operator extends Item {
    firstname: string,
    lastname: string,
    personal_id: number,
    celphone: string,
    email: string
}

export interface Service extends Item {
    operator?: Operator,
    ingress_date : string,
    start_date: string,
    end_date: string,
    description: string,
    device: Device,
    status: string,
}

export interface ChartItem{
    data?: string,
    date?: string,
    count: number,
}

export interface DevicesDataset extends Array<Device> {}

export interface ClientsDataset extends Array<Client> {}

export interface BrandsDataset extends Array<Brand> {}

export interface ModelsDataset extends Array<Model> {}

export interface ProvidersDataset extends Array<Provider> {}

export interface OperatorDataset extends Array<Operator> {}

export interface PartsDataset extends Array<Part> {}

export interface ServicesDataset extends Array<Service> {}

export interface ChartsDataset extends Array<ChartItem> {}

export interface APIResponse {
    key: string,
    output: DevicesDataset | ClientsDataset | BrandsDataset | ModelsDataset | ProvidersDataset | OperatorDataset | PartsDataset | ServicesDataset | ChartsDataset,
}

export interface DashboardDataset {
    brands?: BrandsDataset,
    clients?: ClientsDataset,
    devices?: DevicesDataset,
    models?: ModelsDataset,
    providers?: ProvidersDataset,
    operators?: OperatorDataset,
    parts?: PartsDataset,
    services?: ServicesDataset,
    clients_by_services?: ChartsDataset,
    top_clients_by_services?: ChartsDataset,
    services_by_status?: ChartsDataset,
    new_services_by_date?: ChartsDataset,
    services_status_count_by_date?: ChartsDataset,
    operators_by_status?: ChartsDataset,
    top_operators_by_status?: ChartsDataset,
    providers_by_participation?: ChartsDataset,
    top_providers_by_participation?: ChartsDataset,
    status: number,
    data?: any
}

