import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'

const ShowSummary = () => {
  let navigate = useNavigate()
  const {state}  = useLocation();
  console.log('state', state.show)
  
  const backShowDetails = () => {
  navigate(-1)
  }
  
  return (
    <div className='summaryContainer'>
      <div className="card mb-3">
        
        <img src={state.show.image.original} className="card-img-top" alt="image loading" />
        
          <div className="card-body">
            <h5 className="card-title">{state.show.name}</h5>
            <p className="card-text">{state.show.summary}</p>
            <div className='cardLang'>
              <p  className="card-text">language : {state.show.language}</p>
              <p  className="card-text">premiered : {state.show.premiered}</p>
              <p  className="card-text">{state.show.network.name} : {state.show.schedule.time}    {state.show.schedule.days[0]}</p>
            </div>
            <p className="card-text"><small className="text-muted">{state.show.status}</small></p>
            <button className="btn btn-primary" onClick={backShowDetails}>Back</button>
          </div>
      </div>
    </div>
  )
};

export default ShowSummary
