import React from "react";
import { Block } from '@tremor/react'
import BrandsTableBase from '../components/BrandsTableBase'

class Brands extends React.Component {
	render(){
		return (
			<>
                <Block marginTop='mt-6'>
                    <BrandsTableBase />
                </Block>
            </>
		);
	};
}

export default Brands