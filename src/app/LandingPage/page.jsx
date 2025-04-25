import React from 'react'
import Listing from './listing'
import Hero from './hero'
import { Pagination } from '@/components/ui/pagination'


const Landingpage = () => {
  return (
    <div>
      <Hero />
      <Listing className="pt-2" />
      <Pagination/>
    </div>
  )
}

export default Landingpage
