import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"

export default function PostPage(){
    const {id} = useParams()
    const [postInfo, setPostInfo] = useState(null)

    useEffect(()=> {
        fetch(`http://localhost:2222/post/${id}`)
        .then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo)
            })
        })
    }, [])

    if (!postInfo) return '';

    return(
        <div>
            <img src={`http://localhost:2222/${postInfo.cover}`} alt=""/>
        </div>
    )
}