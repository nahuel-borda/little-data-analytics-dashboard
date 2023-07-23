import { Card, Tab, TabList } from '@tremor/react'
import React, { useState } from 'react'
import {HandThumbUpIcon, HandThumbDownIcon} from '@heroicons/react/24/solid'

const TabListBase = () => {
   const [selectedView, setSelectedView] = useState(1)

  return (
    <>
    <TabList
        handleSelect={ value => setSelectedView(value)}        
        defaultValue={selectedView}
        marginTop="mt-6"
    >
        <Tab value={1} text="Pestaña 1" icon={HandThumbUpIcon} />
        <Tab value={2} text="Pestaña 2" icon={HandThumbDownIcon}/>        
    </TabList>

    { selectedView === 1 ? (
        <Card>
            <div className='h-28 bg-emerald-300' />
        </Card>
    ) : (
        <Card>
            <div className='h-28 bg-blue-700' />
        </Card>
    )
    }

    </>
  )
}

export default TabListBase