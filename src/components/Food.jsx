import React, { useState } from 'react'
import {data} from '../data/data'

const Food = () => {
  const [foods, setFoods] = useState(data)
  const [category, setCategory] = useState('')

  const filterType = (category) => {
    setFoods(data.filter(item => item.category === category))
    setCategory(category)
  }

  const filterPrice = (price) => {
    if (category) {
      setFoods(data.filter(item => item.category == category && item.price === price))
    } else {
      setFoods(data.filter(item => item.price === price))
    }
  }

  const all = () => {
    setFoods(data)
    setCategory('')
  }

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
            <button onClick={all} className='m-1 duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
            <button onClick={() => filterType('burger')} className='m-1 duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
            <button onClick={() => filterType('pizza')} className='m-1 duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
            <button onClick={() => filterType('salad')} className='m-1 duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
            <button onClick={() => filterType('chicken')} className='m-1 duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
          </div>
        </div>
        {/* Filter Price */}
        <div >
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button onClick={() => filterPrice('$')} className='m-1 duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
            <button onClick={() => filterPrice('$$')} className='m-1 duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
            <button onClick={() => filterPrice('$$$')} className='m-1 duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
            <button onClick={() => filterPrice('$$$$')} className='m-1 duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
          </div>
        </div>
      </div>

    {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
            <img src={item.image} alt={item.name} 
              className='h-[200px] w-full object-cover rounded-t-lg'
            />
            <div className='flex justify-between  px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Food

  // const burgers = () => {
  //   setFoods(data.filter(item => item.category == 'burger'))
  //   setCategory('burger')
  // }
  // const pizza = () => {
  //   setFoods(data.filter(item => item.category == 'pizza'))
  //   setCategory('pizza')
  // }
  // const salad = () => {
  //   setFoods(data.filter(item => item.category == 'salad'))
  //   setCategory('salad')
  // }
  // const chicken = () => {
  //   setFoods(data.filter(item => item.category == 'chicken'))
  //   setCategory('chicken')
  // }
  // const oneDollar = () => {
  //   if (category) {
  //     setFoods(data.filter(item => item.category == category && item.price == '$'))
  //   } else {
  //     setFoods(data.filter(item => item.price == '$'))
  //   }
  // }
  // const twoDollars = () => {
  //   if (category) {
  //     setFoods(data.filter(item => item.category == category && item.price == '$$'))
  //   } else {
  //     setFoods(data.filter(item => item.price == '$$'))
  //   }
  // }
  // const threeDollars = () => {
  //   if (category) {
  //     setFoods(data.filter(item => item.category == category && item.price == '$$$'))
  //   } else {
  //     setFoods(data.filter(item => item.price == '$$$'))
  //   }
  // }
  // const fourDollars = () => {
  //   if (category) {
  //     setFoods(data.filter(item => item.category == category && item.price == '$$$$'))
  //   } else {
  //     setFoods(data.filter(item => item.price == '$$$$'))
  //   }
  // }