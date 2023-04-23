import React from 'react'

function SingleShopCard({ item }) {
  return (
    <div>
        <img src={item.imageUrl} alt={item.shopName} />
        <div>
            <h3>{item.shopName}</h3>
            <h5>{item.town}</h5>
            <h6>{item.startYear}</h6>
            <p>{item.description}</p>
        </div>
    </div>
  )
}

export default SingleShopCard