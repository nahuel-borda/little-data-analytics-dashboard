import React from "react";
import { Block } from '@tremor/react'
import ProvidersTableBase from '../components/ProvidersTableBase'

class Providers extends React.Component {
	render(){
		return (
			<>
                <Block marginTop='mt-6'>
                    <ProvidersTableBase />
                </Block>
            </>
		);
	};
}

export default Providers