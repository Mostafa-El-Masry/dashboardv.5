import Link from 'next/link'
import React from 'react'

const Healthimprovmets = () => {
  return (
    <>
      <h1>Health improvmets</h1>
      <Link className='Link' href="/">Home</Link>
      <h1><Link href="/content/Health-improvmets/Mental">Mental Health</Link></h1>
      <h1><Link href="/content/Health-improvmets/Pysical">Pysical Health</Link></h1>
    </>
  )
}

export default Healthimprovmets