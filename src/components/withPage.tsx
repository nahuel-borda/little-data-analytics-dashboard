import { Block } from '@tremor/react';

export const withPage = (WrappedComponent: React.ComponentType<any>) => {
	return (props: any) => {
		return (
			<>
				<Block marginTop='mt-6'>
					<WrappedComponent {...props} />
				</Block>
			</>
		);
	};
};