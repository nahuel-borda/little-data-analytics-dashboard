import React from "react";
import { Block, ButtonInline } from '@tremor/react'
import OperatorsTableBase from '../components/OperatorsTableBase'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

class Operators extends React.Component {
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
                    <OperatorsTableBase />
                </Block>
            </>
		);
	};
}

export default Operators