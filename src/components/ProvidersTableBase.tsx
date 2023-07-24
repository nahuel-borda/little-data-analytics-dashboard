//import {  } from '@heroicons/react/24/solid'
import { ButtonInline, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react';
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

export const ProvidersTableBase = (props: any) => {
    return (
        <Card>
            <Link to='/dashboard'>
                <ButtonInline
                    size="sm"
                    text="Back to dashboard"
                    icon={RiIcons.RiArrowLeftCircleFill}
                    iconPosition="left"
                />
            </Link>
            <Title>List of providers</Title>
            <Table marginTop='mt-5'>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Address</TableHeaderCell>
                        <TableHeaderCell>Celphone</TableHeaderCell>
                        <TableHeaderCell>Email</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!props.loading && props.dataset.providers && props.dataset.providers.map((item: any) => (
                        <TableRow>
                            <TableCell> {item.id} </TableCell>
                            <TableCell> {item.name}</TableCell>
                            <TableCell> {item.address} </TableCell>
                            <TableCell> {item.celphone} </TableCell>
                            <TableCell> {item.email} </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
        </Card >
    )
}