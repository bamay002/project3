import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import '../css/PostPage.css'
import format from "date-fns/format"


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
        <div className="post">
            <img className="image-pp" src={`http://localhost:2222/${postInfo.cover}`} alt=""/>
            <div className="info-pp">
                <time>{format(new Date(postInfo.createdAt), 'MMM d, yyyy  hh:mm aaa')}</time>
                <div className="author">by @{postInfo.author.username}</div>
                <div className="text" dangerouslySetInnerHTML={{__html:postInfo.summary}} />
            </div>
        </div>
    )
}