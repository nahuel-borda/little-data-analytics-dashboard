import React from "react";
import { Block, ButtonInline } from '@tremor/react'
import BrandsTableBase from '../components/BrandsTableBase'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

class Brands extends React.Component {
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
                    <BrandsTableBase />
                </Block>
            </>
		);
	};
}

export default Brands