import React from "react";
import { Block } from '@tremor/react'
import ClientsTableBase from '../components/ClientsTableBase'

class Clients extends React.Component {
	render(){
		return (
			<>
                <Block marginTop='mt-6'>
                    <ClientsTableBase />
                </Block>
            </>
		);
	};
}

export default Clients