import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Link href="/variant/1">Variant 1 Prefetching</Link>
      <Link href="/variant/2">Variant 2 Prefetching</Link>
      <Link href="/variant/3">Variant 1 cacheComponents</Link>
      <Link href="/variant/4">Variant 2 cacheComponents</Link>

    </div>
  )
}

export default HomePage