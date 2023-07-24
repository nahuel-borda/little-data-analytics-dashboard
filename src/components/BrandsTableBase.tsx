//import {  } from '@heroicons/react/24/solid'
import { Button, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react';
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

export const BrandsTableBase = (props: any) => {

    return (
        <Card>
            <Link to='/dashboard'>
                <Button variant='light'
                    size="sm"
                    text="Back to dashboard"
                    icon={RiIcons.RiArrowLeftCircleFill}
                    iconPosition="left"
                />
            </Link>
            <Title>List of brands</Title>

            <Table marginTop='mt-5'>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {!props.loading && props.dataset.brands && props.dataset.brands.map((item: any) => (
                        <TableRow>
                            <TableCell> {item.id} </TableCell>
                            <TableCell> {item.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </Card>
    )
}