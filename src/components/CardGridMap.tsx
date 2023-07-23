import { BadgeDelta, Block, Card, ColGrid, Flex, Metric, ProgressBar, Text } from '@tremor/react'
import React from 'react'



const CardGridMap = (data:any) => {
  return (
    <ColGrid numColsMd={2} numColsLg={3} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6' >
        { data.map( (item:any) => (
            <Card key={item.title}>
                 <Flex alignItems='items-start'>
                    <Block>
                        <Text>{item.title}</Text>
                        <Metric>{item.metric}</Metric>
                    </Block>
                    <BadgeDelta text={item.delta} />
                 </Flex>   

                 <Flex marginTop='mt-4' spaceX='space-x-2'>
                    <Text>{`${item.progress}% (${item.metric})`}</Text>
                    <Text>{item.target}</Text>
                 </Flex>
                <ProgressBar percentageValue={item.progress} marginTop="mt-3"/> 

            </Card>    
        )) }
    </ColGrid>
  )
}

export default CardGridMap