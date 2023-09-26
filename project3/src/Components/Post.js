import React from "react"
import { format } from "date-fns"

function Post ({summary,cover,createdAt, author}){
    return(
        <div className='post'>

            <div className='image'>
            <img src='https://shorturl.at/jpr57' alt='cruel summer flyer' />
            </div>

            <div className='text'>
                <p className="info">
                <a className="author">{author.username}</a>
                <time>{format(new Date(createdAt), 'MMM d, yyyy  hh:mm aaa')}</time>
                </p>

                <p className="summary">
                {summary}
                </p>
            </div>

      </div>
    )
}

export default Post