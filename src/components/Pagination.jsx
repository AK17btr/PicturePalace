import React from 'react'

export const Pagination = ({handlePrev , handleNext, pageNo}) => {
    return (
      <div className='bg-blue-700 p-1 mt-5 flex justify-center'>
          <div onClick={handlePrev} className='px-8'><i class="fa-solid fa-arrow-left"></i></div>
          <div className='font-bold'>{pageNo}</div>
          <div onClick={handleNext} className='px-8'><i className="fa-solid fa-arrow-right"></i></div>
      </div>
    );
  };
  
  export default Pagination;
  