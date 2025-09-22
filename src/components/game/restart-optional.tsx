import React from 'react'
import { Button } from '../ui/base-button'
import { RefreshCcw } from 'lucide-react'

const RestartOptional = () => {
  return (
    <div className='absolute bottom-4 left-7'>
        <Button className=''>
            <RefreshCcw />
        </Button>
    </div>
  )
}

export default RestartOptional