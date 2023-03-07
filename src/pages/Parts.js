import React from "react";
import { Block } from '@tremor/react'
import PartsTableBase from '../components/PartsTableBase'

class Parts extends React.Component {
	render(){
		return (
			<>
                <Block marginTop='mt-6'>
                    <PartsTableBase />
                </Block>
            </>
		);
	};
}

export default Parts