import React from "react";
import { Block, ButtonInline } from '@tremor/react'
import { ModelsTableBase } from '../components/ModelsTableBase'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

export const Models = (props) => {
	return (
		<>
			<Block marginTop='mt-6'>
				<ModelsTableBase dataset={props.dataset.models}/>
			</Block>
		</>
	);
}