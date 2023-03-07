import React from "react";
import { Block } from '@tremor/react'
import ModelsTableBase from '../components/ModelsTableBase'

class Models extends React.Component {
	render(){
		return (
			<>
                <Block marginTop='mt-6'>
                    <ModelsTableBase />
                </Block>
            </>
		);
	};
}

export default Models