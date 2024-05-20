import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-24">
        <h1 className="text-3xl mb-6">Page Not Found </h1>
        <Link href="/" className="flex items-center text-accent">
          Return Home
        </Link>
      </div>
    </>
  )
}
