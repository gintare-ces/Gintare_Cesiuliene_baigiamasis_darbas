import React from "react";

function SingleShopCard({ item }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 mb-6 md:mb-10 md:max-h-28.8 rounded-lg shadow-lg shadow-fuchsia-500/40 bg-white bg-opacity-30 backdrop-blur-lg drop-shadow-lg">
      <img
        src={item.imageUrl}
        alt={item.shopName}
        className="col-span-2 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      />
      <div className="col-span-3 p-4 block">
        <h3 className="text-2xl font-bold text-white pb-4 md:text-3xl">{item.shopName}</h3>
        <div className="inline-block">
          <h5 className="text-grey-500 italic text-white md:text-lg">{item.town}</h5>
          <h6 className="text-grey-500 italic text-white md:text-lg">{item.startYear}</h6>
        </div>
        <p className="pt-2 text-md text-white md:text-lg">{item.description}</p>
      </div>
    </div>
  );
}

export default SingleShopCard;
