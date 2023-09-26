import React from "react"

function Post ({summary,cover,createdAt}){
    return(
        <div className='post'>

            <div className='image'>
            <img src='https://shorturl.at/jpr57' alt='cruel summer flyer' />
            </div>

            <div className='text'>
                <p className="info">
                <a className="author">Beebz</a>
                <time>{createdAt}</time>
                </p>

                <p className="summary">
                {summary}
                </p>
            </div>

      </div>
    )
}

export default Post