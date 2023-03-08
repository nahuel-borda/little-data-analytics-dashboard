import ServicesTableBase from '../components/ServicesTableBase'
import React from "react";
import { Block, ButtonInline } from '@tremor/react'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

class Services extends React.Component {
	render(){
		return (
			<>
                
				<Block marginTop='mt-6' >
						<Link to='/dashboard'>
							<ButtonInline
								size="sm"
								text="Back to dashboard"
								icon={ RiIcons.RiArrowLeftCircleFill }
								iconPosition="right"
							/>
						</Link>
                
                    
                </Block>
				<Block marginTop='mt-6'>
                    <ServicesTableBase />
                </Block>
            </>
		);
	};
}

export default Services