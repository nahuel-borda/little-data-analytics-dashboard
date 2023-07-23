import React from "react";
import { Block, ButtonInline } from '@tremor/react'
import { ClientsTableBase } from '../components/ClientsTableBase'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

const Clients = (props:any) => {
	return (
		<>
			<Block marginTop='mt-5' >
				<ClientsTableBase dataset={props.dataset.clients}/>
			</Block>
			
		</>
	);
}

export default Clients