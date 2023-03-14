import React from "react";
import { Block, ButtonInline } from '@tremor/react'
import { PartsTableBase } from '../components/PartsTableBase'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

const Parts = (props) => {
	return (
		<>
			<Block marginTop='mt-6'>
				<PartsTableBase dataset={props.dataset.parts}/>
			</Block>
		</>
	);
}

export default Parts