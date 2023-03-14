import { ProvidersTableBase } from '../components/ProvidersTableBase'
import React from "react";
import { Block, ButtonInline } from '@tremor/react'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

const Providers = (props) => {
	return (
		<>
			<Block marginTop='mt-6'>
				<ProvidersTableBase dataset={props.dataset.providers}/>
			</Block>
		</>
	);
}

export default Providers