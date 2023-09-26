import React from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useState } from "react"
import '../css/CreatePost.css'

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

    async function createNewPost(ev){
        const data = new FormData()
        data.set('summary', summary)
        data.set('file', files[0])

        ev.preventDefault();
        console.log(files)
        const response = await fetch('http://localhost:2222/post',{
            method: 'POST',
            body: data,
        })
        console.log(await response.json())
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