import { ServicesTableBase } from '../components/ServicesTableBase'
import React from "react";
import { Block, ButtonInline } from '@tremor/react'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import { SyncLoader } from 'react-spinners';

const Services = ({dataset, loading}) => {
	if (loading) {
		return (
			<>
				<Block marginTop='mt-6'>
					<div className="sweet-loading">
						<SyncLoader color={"#123abc"} loading={loading} />
					</div>
				</Block>
			</>
		);
	}
	  
	return (
		<>
			<Block marginTop='mt-6'>
				<ServicesTableBase dataset={dataset.services}/>
			</Block>
		</>
	);
}

export default Services