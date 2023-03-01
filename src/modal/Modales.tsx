import {  Modal } from 'antd';
import useSelection from 'antd/es/table/hooks/useSelection';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Movies from '../action/Movies';



const Modales = ({isModalOpen,handleOk,handleCancel}:any) => {

  const showdetails:any = useSelector((state:any)=>state.netflixval.details)
  console.log("showdetails",showdetails);
  
   
  return (
    <div>
         <>
     {<Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
<div>
  <div className='img-div-modal-for-size'>
<img className='img-for-modal' src={`https://image.tmdb.org/t/p/original/${showdetails?.backdrop_path}`} alt="" />

</div>
<div className='main-text-div-in-modal'>
<h1 className='tittle-for-details'>{showdetails?.original_title}</h1>
<p className='text-ratong'><span className='ratings'>Rating:{showdetails?.vote_average *10}% </span><span className='reles-date'>Release date:{showdetails?.release_date}</span> <span className='runtime'> Runtime {showdetails?.runtime} day</span></p><br /><br /><br />
<p className='overview'>{showdetails?.overview}</p>
<div className='but-div-in-modal'>
<button className='but1-for-play'>play</button>
<button className='but2-for-list'>my list</button>

</div>
</div> 
  </div>
</Modal> }
     
    </>
    {/* <Movies isModalOpen={isModalOpen}/> */}
    </div>
  )
}

export default Modales
