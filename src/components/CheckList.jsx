import React from "react";

export const CheckList = () => {
  return (
    <>





    <div className='flex justify-center flex-wrap m-4'>
      <div className='flex justify-center h-[2rem] w-[7rem] bg-blue-400 rounded-xl text-white font-bold mx-4' >Action</div>
      <div className='flex justify-center h-[2rem] w-[7rem] bg-blue-400 rounded-xl text-white font-bold ' >Action</div>


    </div>





      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-red-100 outline-none px-5"
        />
      </div>

      <div className='overflow-hidden rounder-lg border border-gray-300 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-3'>
            <tr>
              <th>
                Name
              </th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
            
          </thead>
          <tbody>

            <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[6rem] w-[10rem]' src={`data:image/jpeg;base64,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`}/>
                <div className='mx-1'>
                  Star Wars: The relm of confidentiality
                </div>
              </td>
              <td>9.2</td>
              <td>8.4</td>
              <td>Action</td>
              <td className='text-red-800'>Delete</td>
    

            </tr>

          </tbody>
        </table>
      </div>
    </>
  );
};

export default CheckList;
