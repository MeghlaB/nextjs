"use client"

import { Button } from "./ui/button"

function Card({id , title , description}) {
  return (
   <>
    <div className="card bg-base-100 h-[350px] shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description.slice(0,100)}...........</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">
            Details
        </button>
      </div>
    </div>
  </div></>
  )
}

export default Card
