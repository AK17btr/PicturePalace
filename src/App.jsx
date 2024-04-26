import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import CheckList from "./components/CheckList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  let [CheckList , setCheckList]= useState([])

  let handleAddtoCheckList = (movieObj)=>{
      let newCheckList = [...CheckList, movieObj]
      setCheckList(newCheckList)
      console.log(newCheckList)


     }

     
     let handleRemoveFromCheckList = (movieObj)=>{
      let filteredChecklist=checklist.filter((movie)=>{
        return movie.id != movieObj
      })

      setCheckList(filteredChecklistCheckList)
     }



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <Banner /> <Movies checklist={checklist} handleAddtoCheckList={handleAddtoCheckList} handleRemoveFromCheckList={handleRemoveFromCheckList}/>
              </>
            }
          />
          <Route path="/checklist" element={<CheckList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
