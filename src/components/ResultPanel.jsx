
import React, { use, useEffect, useState } from 'react';
import '../style/App.css';

export function ResultPanel(props){

    const [address, setAddress] = useState();

    useEffect(()=>{
        setAddress(`${props.value.city},` + `${props.value.country}`);
    },[props.value.city, props.value.country]);


    return(
        <div className='col2-result'>
            <div className='paper'>
                <div className='header'>
                    <p className='name'>{props.value.firstname + " " +props.value.lastname}</p>
                    <p className='job-title'>{props.value.job}</p>
                    {props.value.job != null ? <hr/> : null}
                    <div className='contacts'>
                        {address != null ? <p>{address}</p>: null}
                        {props.value.contact != ""? <p>&#8226; { props.value.contact}</p>: null}
                        {props.value.email!= "" ? <p>&#8226; {props.value.email}</p>: null}
                        <p></p>
                    </div>
                    {props.value.summary !="" ?
                    <div className='summary-section'>
                        <div className='summary-label-wrapper'>
                              <p className='summary-title'>SUMMARY</p>
                        </div>
                        <div className='summary-content'>
                            <p>{props.value.summary}</p>
                        </div>
                      
                    </div>:null}

                </div>
            </div>
        </div>
    
    )
}