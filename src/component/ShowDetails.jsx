import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ShowDetails = () => {
  let navigate = useNavigate()
  const [apiData, setApiData] = useState()
  
  useEffect(() => {
    const getApiData = async () => {
      const res = await axios.get('https://api.tvmaze.com/search/shows?q=all')
      const { data } = res
      setApiData(data)
    }
    getApiData()
    
  }, [])
  
  const handleBook = (show) => {
    console.log('click', show)
    navigate('/showSummary', { replace: false, state: { show } })
    
  }
  
  return (
    <div className="container">
      <div className="row">
        {apiData?.map((showName, index) => {
          const { show } = showName
          //console.log('show',show)
          return (
            <div className="col-3">
              <div className="cardContainer"  key={index}>
                <div className="card" style={{ width: '19rem' }}>
                  <img src={show?.image?.original} className="card-img-top" alt="image loading"/>
                  <div className="card-body">
                    <h5 className="card-title">{show?.name}</h5>
                    <p className="card-text">movieDescription..
                    </p>
                    <button className="btn btn-primary" onClick={(e) => handleBook(show)}>Book Show</button>
                  </div>
                </div>
              </div>
            </div>
              
              )
              })}
            </div>
        </div>
        
        )
        }
          
          export default ShowDetails
