import React from "react";
import { Block } from '@tremor/react'
import ServicesTableBase from '../components/ServicesTableBase'

class Services extends React.Component {
	render(){
		return (
			<>
                <Block marginTop='mt-6'>
                    <ServicesTableBase />
                </Block>
            </>
		);
	};
}

export default Services