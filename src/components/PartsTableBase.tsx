import { ButtonInline, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react';
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

export const PartsTableBase = (props: any) => {
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
            <Title>List of Parts</Title>

            <Table marginTop='mt-5'>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Provider</TableHeaderCell>
                        <TableHeaderCell>Brand</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!props.loading && props.dataset.parts && props.dataset.parts.map((item: any) => (
                        <TableRow>
                            <TableCell> {item.id} </TableCell>
                            <TableCell> {item.name}</TableCell>
                            <TableCell> {item.provider?.name} </TableCell>
                            <TableCell> {item.brand?.name} </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </Card>
    )
}