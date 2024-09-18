"use client";

import React, { useEffect } from 'react'
import './Preloader.css'
import { preLoaderAnim } from '@/animation';

const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim();
    }, []);

  return (
    <div className="preloader">
        <div className="texts-container">
            <span>Code,</span>
            <span>Create,</span>
            <span>Smile</span>
        </div>
    </div>
  )
}

export default PreLoader