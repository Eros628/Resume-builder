
import React, { use, useEffect, useState } from 'react';
import '../style/App.css';

export  function ResultPanel({values}){


    return(
        <div className='col2-result'>
            <div className='paper'>
                <div className='header'>
                    <p className='name'>{values.firstname + " " +values.lastname}</p>
                    <p className='job-title'>{values.job}</p>
                    {values.job != ""  && <hr/>}
                    <div className='contacts'>
                        <p>{values.city}</p>
                        {(values.city !="" && values.country !="") && <p>,</p>}
                        <p>{values.country}</p>
                        {values.contact != "" && <p>&#8226; { values.contact}</p>}
                        {values.email!= "" && <p>&#8226; {values.email}</p>}
                        <p></p>
                    </div>
                </div>
                {values.summary !="" &&
                    <div className='summary-section'>
                        <div className='summary-label-wrapper'>
                              <p className='summary-title'>SUMMARY</p>
                        </div>
                        <div className='summary-content'>
                            <p>{values.summary}</p>
                        </div>
                      
                    </div>}
            </div>
        </div>
    
    )
}