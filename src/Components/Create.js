import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Master');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        setIsPending(true)
        fetch('http://localhost:3001/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        } )
        .then(() => {
            console.log('new blog added')
            setIsPending(false)
            history.push("/")
        })
    }

    return( 
        <div className='create'>
            <h2> Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label>Blog Body:</label>
                <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                    required
                >

                </textarea>
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Master">Master</option>
                    <option value="Rodrigue">Rodrigue</option>
                </select>
                {!isPending && <button>Create the blog</button>}
                {isPending && <button disabled>Creating...</button>}
            </form>
        </div>
    );
}

export default Create