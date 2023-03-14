import React from "react";
import { TabList, ButtonInline, Tab, ColGrid, Card, Block, Col, } from '@tremor/react'
import BrandsTableBase from '../components/BrandsTableBase'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";


import { PropagateLoader } from 'react-spinners';

const Brands = (props) => {
	console.log(props.dataset)
		
			if (!props.loading) {
				return (
				<>
					<Block marginTop='mt-6'>
						<BrandsTableBase dataset={props.dataset.brands}/>
					</Block>
				</>
				);
			} else {
				return (
				<Block marginTop='mt-6'>
				<ColGrid numColsMd={1} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
					<Col >
					<div className="sweet-loading">
						<PropagateLoader
							color={'#123abc'} 
							loading={props.loading} 
						/>
					</div>
						
					</Col>
				</ColGrid>
				</Block>
				);
			}
		
}

export default Brands