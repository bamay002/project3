import React from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useState } from "react"
import '../css/CreatePost.css'
import { Navigate } from "react-router-dom"

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

export default function CreatePost(){
    const [summary, setSummary] = useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)

    async function createNewPost(ev){
        const data = new FormData()
        data.set('summary', summary)
        data.set('file', files[0])

        ev.preventDefault();
        const response = await fetch('http://localhost:2222/post',{
            method: 'POST',
            body: data,
            credentials: 'include',
        })
        if (response.ok){
          setRedirect(true)
        }
    }

    if (redirect){
      return <Navigate to={'/'} />
    }

    return(
        <form onSubmit={createNewPost}>
            <input type="summary" 
            placeholder={"What's the chisme today ??"}
            value={summary}
            onChange={ev => setSummary(ev.target.value)} />

            <input type="file"
            onChange={ev => setFiles(ev.target.files)} />
            <button>Create Post</button>
        </form>
    )
}