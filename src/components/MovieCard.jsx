import React from "react";
import CheckList from "./CheckList";

export const MovieCard = ({
  movieObj,
  poster_path,
  name,
  handleAddtoCheckList,
  handleRemoveFromCheckList,
  checklist,
}) => {
  function doesContain(movieObj) {
    for (let i = 0; i < checkList.length; i++) {
      if (checklist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className=" h-[40vh] w-[155px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-center-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromChecklist(movieObj)}
          className="m-4 flex justify-center h-1 w-1 items-center rounded-lg bg-blue-900/60 "
        >
          &#10060
        </div>
      ) : (
        <div
          onClick={() => handleAddtoCheckList(movieObj)}
          className="m-4 flex justify-center h-1 w-1 items-center rounded-lg bg-blue-900/60 "
        >
          &#128155;
        </div>
      )}

      <div className=" text-white text- text-l w-full p-0 text-center bg-red-900/60 justify-center-between items-end">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
