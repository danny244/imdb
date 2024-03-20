"use client"

import Link from 'next/link'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function NavbarItem({ title, params }) {
  return (
    <Suspense fallback={<div>Loading...</div>}> {/* Suspense boundary */}
      <NavbarItemContent title={title} params={params} />
    </Suspense>
  )
}

function NavbarItemContent({ title, params }) {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${genre === params ? 'underline underline-offset-8 decoration-4 text-amber-500 decoration-amber-500 roundeed-lg' : ''}`}
        href={`/?genre=${params}`}
      >
        {title}
      </Link>
    </div>
  )
}
