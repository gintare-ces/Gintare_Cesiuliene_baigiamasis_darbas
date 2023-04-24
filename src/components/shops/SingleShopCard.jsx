import React from 'react'

function SingleShopCard({ item }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 mb-8 shadow-sm bg-slate-100 md:mb-12 md:max-h-28.8 rounded-lg'>
        <img src={item.imageUrl} alt={item.shopName} className='col-span-2 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' />
        <div className='col-span-3 p-4'>
            <h3 className='text-2xl font-bold pb-4'>{item.shopName}</h3>
            <h5 className='text-grey-600 italic'>{item.town}</h5>
            <h6>{item.startYear}</h6>
            <p className='pt-2'>{item.description}</p>
        </div>
    </div>
  )
}

export default SingleShopCard