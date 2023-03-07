//import {  } from '@heroicons/react/24/solid'
import {Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react'
import React from 'react'
//import data from '../data.json'

class ProvidersTableBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: [],
        }
    }

    componentDidMount() {
        fetch('http://35.193.132.91:8000/providers/')
        .then(res => res.json())
        .then(
            json => {this.setState({ 'dataset': json });}
        )
    }


    

    render() {
        return (
            <Card>
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
                        { this.state.dataset.map((item) => (
                            <TableRow>
                                <TableCell> {item.id} </TableCell>
                                <TableCell> {item.name}</TableCell>
                                <TableCell> {item.address} </TableCell>
                                <TableCell> {item.celphone} </TableCell>
                                <TableCell> {item.email} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </Card>
        )
    }
}

export default ProvidersTableBase