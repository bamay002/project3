import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"

export default function PostPage(){
    const {id} = useParams()
    const [postInfo, setPostInfo] = useState('')

    useEffect(()=> {
        fetch(`http://localhost:2222/post/${id}`)
        .then(response => {
            response.json(postInfo => {
                setPostInfo(postInfo)
            })
        })
    }, [])

    return(
        <div>post page</div>
    )
}