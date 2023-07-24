import { Block } from '@tremor/react';

export const Page = (props: any) => {
	const TableComponent = props.component

	return (
		<>
			<Block marginTop='mt-6'>
				<TableComponent {...props} />
			</Block>
		</>
	);
}