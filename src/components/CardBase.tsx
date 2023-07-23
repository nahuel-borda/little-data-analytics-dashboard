import { Card, Metric, Text, Flex, ProgressBar } from '@tremor/react'
import React from 'react'

const CardBase = () => {
  return (
    <Card maxWidth='max-w-sm'>
        <Text>Sales</Text>
        <Metric>$ 71,465</Metric>
        <Flex marginTop='mt-4'>
            <Text>32% of annual target</Text>
            <Text>$ 225,000</Text>
        </Flex>
        <ProgressBar percentageValue={45} marginTop="mt-2" />
    </Card>
  )
}

export default CardBase