"use client"

import { useEffect } from "react"

export default function Error({error, reset}) {
     // the reset there is to reset the server
     useEffect(() => {console.log(error)}, [error])
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong please try again</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>Click here to refresh</button>
    </div>
  )
}
