import React from 'react'
import { categories } from '../data/data'
const Category = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Categories */}
        <div className='grid grid-cols-2 lg:grid-cols-4 py-6 gap-6'>
            {categories.map((item, index) =>(
                <div className='p-4 bg-gray-200 flex items-center justify-between rounded-lg' key={index}>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img className='w-20' src={item.image} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category