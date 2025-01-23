"use client"
import Link from "next/link"
function Card({id , title , description}) {
  return (
   <>
    <div className="card bg-base-100 h-[350px] shadow-xl mb-4">
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description.slice(0,100)}...........</p>
      <div className="card-actions justify-end">
        <Link href={`/blog/${id}`} className="py-2 px-2 border bg-red-500 text-white">
            Details
        </Link>
      </div>
    </div>
  </div></>
  )
}

export default Card
