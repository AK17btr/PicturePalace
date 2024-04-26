import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

export const Movies = ({handleAddtoCheckList , handRemoveFromChecklist , checklist}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = ()=>{
    if(pageNo==1){
      setPageNo(pageNo)
    }
    else{
      setPageNo(pageNo-1)

    }
    
  }

  const handleNext = ()=>{
    setPageNo(pageNo+1)
  }

  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=918498870ed04ed78d7f2a99f9ebe895&language=en-US&page=${pageNo}`).then(function (res) {
          console.log(res.data);
          setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center ">Trending Movies</div>

      <div className="flex flex-row flex-wrap justify-around gap-7">
        {movies.map((movieObj) => {
          return (
            <MovieCard key={movieObj.id} movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title} handleAddtoCheckList={handleAddtoCheckList} handRemoveFromChecklist={handRemoveFromChecklist} checklist={checklist}
            />
          );
        })}
      </div>

      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};

export default Movies;
