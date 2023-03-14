//import {  } from '@heroicons/react/24/solid'
import {ButtonInline, Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react'
import React from 'react'
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";

export const BrandsTableBase = (props) => {
    
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
            <Title>List of brands</Title>

            <Table marginTop='mt-5'>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    { props.dataset.map((item) => (
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

export default BrandsTableBase