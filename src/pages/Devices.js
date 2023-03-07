import React from "react";
import { Block } from '@tremor/react'
import DevicesTableBase from '../components/DevicesTableBase'

class Devices extends React.Component {
	render(){
		return (
			<>
                <Block marginTop='mt-6'>
                    <DevicesTableBase />
                </Block>
            </>
		);
	};
}

export default Devices