import Link from 'next/link'
import React from 'react'

function CTA() {
  return (
    <section className='cta'>
        <p className='cta-text'> Have a project in mind? <br className='sm:block hidden'/> Let&apos;s build something together</p>
        <Link href='/contact'
        className='btn'>
            contact
        </Link>
    </section>
  )
}

export default CTA