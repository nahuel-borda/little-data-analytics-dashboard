import { ButtonInline, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react';
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

export const ClientsTableBase = (props: any) => {
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
            <Title>List of clients</Title>

            <Table marginTop='mt-5'>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Personal ID</TableHeaderCell>
                        <TableHeaderCell>Celphone</TableHeaderCell>
                        <TableHeaderCell>Email</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!props.loading && props.dataset.clients && props.dataset.clients.map((item: any) => (
                        <TableRow>
                            <TableCell> {item.id} </TableCell>
                            <TableCell> {item.firstname} {item.lastname}</TableCell>
                            <TableCell> {item.personal_id} </TableCell>
                            <TableCell> {item.celphone} </TableCell>
                            <TableCell> {item.email} </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}