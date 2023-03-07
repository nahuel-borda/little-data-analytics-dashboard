import React from "react";
import { Block } from '@tremor/react'
import OperatorsTableBase from '../components/OperatorsTableBase'

class Operators extends React.Component {
	render(){
		return (
			<>
                <Block marginTop='mt-6'>
                    <OperatorsTableBase />
                </Block>
            </>
		);
	};
}

export default Operators