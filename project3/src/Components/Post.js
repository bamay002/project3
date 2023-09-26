import React from "react"
import { format } from "date-fns"
import { Link } from "react-router-dom"

function Post ({_id,summary,cover,createdAt, author}){
    return(
        <div className='post'>

            <div className='image-p'>
                <Link to={`/post/${_id}`} >
                    <img src={'http://localhost:2222/'+cover} alt='image that goes with post' />
                </ Link> 
            </div>

            <div className='text'>
                <p className="info">
                <a className="author">{author.username}</a>
                <time>{format(new Date(createdAt), 'MMM d, yyyy  hh:mm aaa')}</time>
                </p>
                <Link to={`/post/${_id}`} >
                    <p className="summary">
                    {summary}
                    </p>
                </ Link>
            </div>

      </div>
    )
}

export default Post