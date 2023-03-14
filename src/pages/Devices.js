import React from "react";
import { Block, ButtonInline } from '@tremor/react'
import { DevicesTableBase } from '../components/DevicesTableBase'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

export const Devices = (props) => {
	return (
		<>
			<Block marginTop='mt-6'>
				<DevicesTableBase dataset={props.dataset.devices}/>
			</Block>
			
		</>
	);
}
