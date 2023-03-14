import React from "react";
import { Block, ButtonInline } from '@tremor/react'
import { OperatorsTableBase } from '../components/OperatorsTableBase'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

const Operators = (props) =>{
	return (
		<>
			<Block marginTop='mt-6'>
				<OperatorsTableBase dataset={props.dataset.operators}/>
			</Block>
		</>
	);
}

export default Operators