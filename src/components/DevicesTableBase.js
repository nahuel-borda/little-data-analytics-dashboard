import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react'
import React from 'react';
import { Block, ButtonInline } from '@tremor/react'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

export const DevicesTableBase = (props) => {

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
            <Title>List of devices</Title>

            <Table marginTop='mt-5'>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Patent</TableHeaderCell>
                        <TableHeaderCell>Model</TableHeaderCell>
                        <TableHeaderCell>Brand</TableHeaderCell>
                        <TableHeaderCell>Client</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    props.dataset.map((item) => (
                        <TableRow>
                            <TableCell> {item.id} </TableCell>
                            <TableCell> {item.patent}</TableCell>
                            <TableCell> {item.model.name} </TableCell>
                            <TableCell> {item.brand.name} </TableCell>
                            <TableCell> {item.client.firstname} {item.client.lastname} </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>

    )
}