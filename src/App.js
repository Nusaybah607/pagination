import React from "react";
import { useEffect, useState } from "react";
import "./index.css";
import { useFetch } from "./useFetch";
import paginate from "./utils";
const url = "https://randomuser.me/api/?results=100";

function App() {
  const {loading, people} = useFetch(url)
  const [page, setPage] = useState(0)
  const [profile, setProfile] = useState([])

  // display first 10 items
  useEffect(()=>{
    if(loading) return
    setProfile(people[page])
  },[loading, page])

  const handlePage = (index) => {
    setPage(index)
  }
const nextPage = () =>{
  setPage((oldPage)=>{
    let nextPage = oldPage + 1
    if(nextPage > people.length - 1){
      nextPage = 0
    }
    return nextPage
  })
}
const prevPage = () =>{
  setPage((oldPage)=>{
    let prevPage = oldPage -1
    if(prevPage < 0){
      prevPage = people.length - 1
    }
    return prevPage
  })
}

  if(loading){
    return <div className="loading">
      <h2>Loading...</h2>
    </div>
  }

  return <div className="main">
    <h2 className="title">Pagination</h2>
    <section className="pagination">
      {profile.map((person, index)=>{
        const {gender, name, location,picture} = person
        return <div className="page" key={index}>
            <img src={picture.large} alt="" />
            <h3>{gender}</h3>
            <h3>{name.first}</h3>
          </div>
      })}
    </section>
    {
      !loading && <div className="btn-container">
        <button className="prev-btn" onClick={prevPage}>prev</button>
        {people.map((_, index)=>{
          return <button key={index} className={`${index === page? 'active-btn page-btn': 'page-btn'}`} onClick={()=>handlePage(index)}>{index + 1}</button>
        })}
        <button onClick={nextPage} className="next-btn">next</button>
      </div>
    }
      

  </div>;
}

export default App;

