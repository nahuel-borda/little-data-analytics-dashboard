import {Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react'
import React from 'react'
import { Block, ButtonInline } from '@tremor/react'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

export const ServicesTableBase = (props) => {
    return (
        <Card>
            <Link to='/dashboard'>
                    <ButtonInline
                        size="sm"
                        text="Back to dashboard"
                        icon={ RiIcons.RiArrowLeftCircleFill }
                        iconPosition="left"
                    />
                </Link>  
            <Title>List of services</Title>

            <Table marginTop='mt-5'>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Operator</TableHeaderCell>
                        <TableHeaderCell>Ingress date</TableHeaderCell>
                        <TableHeaderCell>Start date</TableHeaderCell>
                        <TableHeaderCell>Due date</TableHeaderCell>
                        <TableHeaderCell>Description</TableHeaderCell>
                        <TableHeaderCell>Client</TableHeaderCell>
                        <TableHeaderCell>Phone number</TableHeaderCell>
                        <TableHeaderCell>Device</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { props.dataset.map((item) => (
                        <TableRow>
                            <TableCell> {item.id} </TableCell>
                            <TableCell> {item.operator?.firstname} {item.operator?.lastname}</TableCell>
                            <TableCell> {item.ingress_date} </TableCell>
                            <TableCell> {item.start_date} </TableCell>
                            <TableCell> {item.end_date} </TableCell>
                            <TableCell> {item.description} </TableCell>
                            <TableCell> {item.device.client.firstname}  {item.device.client.lastname}</TableCell>
                            <TableCell> {item.device.client.phone}</TableCell>
                            <TableCell> {item.device.brand.name} {item.device.model.name} - {item.device.id}</TableCell>
                            <TableCell> <Badge text={item.status} color="teal"/> </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </Card>
    )
}