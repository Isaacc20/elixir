import React from 'react'
import axios from 'axios';
import './Home.css'
import { useEffect } from 'react';
import { FaSave, FaStar } from 'react-icons/fa';

const Display = () => {
  
// const options = {
  // import axios from 'axios';

  const options = {
    method: 'GET',
    url: 'https://community-manga-eden.p.rapidapi.com/list/0',
    headers: {
      'X-RapidAPI-Key': '46daeaa839mshed9c6c0cecee777p1f1216jsncfb87dfe0048',
      'X-RapidAPI-Host': 'community-manga-eden.p.rapidapi.com'
    }
  }
  
  useEffect(() => {
    
  }, [])
  


  return (
    <>
      <div className='display container p-4'>
        <div>
          <h4>Recently viewed</h4>
          <div className="d-flex">
            <div className='card'>
              <div className='position-relative h-75'>
                <button className='btn btn-light position-absolute top-0 right-0 text-dark'><FaStar />Save</button>
                <button className="btn btn-primary position-relative bottom-0 left-0">Add to cart</button>
              </div>
              <p className='fw-bold'>The power of God</p>
              <span>Kenneth Hagin</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Display