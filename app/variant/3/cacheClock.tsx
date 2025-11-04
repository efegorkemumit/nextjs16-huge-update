'use cache'

import React from 'react'
import { cacheLife } from 'next/cache'

const CacheClock = async() => {

    cacheLife("minutes")

    const now = new Date().toISOString();

  return (
    <div>
        Server Time  {now}
    </div>
  )
}

export default CacheClock