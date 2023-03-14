import { ServicesTableBase } from '../components/ServicesTableBase'
import React from "react";
import { Block, ButtonInline } from '@tremor/react'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

const Services = (props) => {
		return (
			<>
				<Block marginTop='mt-6'>
                    <ServicesTableBase dataset={props.dataset.services}/>
                </Block>
            </>
		);
}

export default Services