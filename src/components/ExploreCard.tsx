import React from 'react'

const ExploreCard = ({ item }: any) => {
  return (
    <div className='w-full -[540px] sm:mx-auto mt-16 shadow-xl rounded-lg px-10 py-6 text-gray-900 gradient-05 sm:p-8 border-2 border-main-color relative cursor-pointer hover:shadow-main-color'>
      <div className='mx-auto h-32 w-32 relative -mt-20 border border-secondary-color rounded-full overflow-hidden'>
        <img src={item.imgUrl} alt="Explorecard" className='object-cover object-center h-32' />
      </div>
    </div>
  )
};

export default ExploreCard;
