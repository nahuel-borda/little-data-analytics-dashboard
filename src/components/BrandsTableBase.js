//import {  } from '@heroicons/react/24/solid'
import {Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react'
import React from 'react'
//import data from '../data.json'

class BrandsTableBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/brand/')
        .then(res => res.json())
        .then(
            json => {this.setState({ 'dataset': json });}
        )
    }


    

    render() {
        return (
            <Card>
                <Title>List of brands</Title>

                <Table marginTop='mt-5'>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>ID</TableHeaderCell>
                            <TableHeaderCell>Name</TableHeaderCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { this.state.dataset.map((item) => (
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
}

export default BrandsTableBase