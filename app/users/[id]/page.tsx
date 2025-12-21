
"use client"
import { useParams } from "next/navigation"

const page = () => {

    const {id} = useParams()
  return (
    <div>user {id} page</div>
  )
}

export default page