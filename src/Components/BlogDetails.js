import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';


const BlogDetails = () => {
    const { id } = useParams()
    const history = useHistory()
    const { data: blog, isPending, error} = useFetch('http://localhost:3001/blogs/' + id)
    const handleClick = () => {
        fetch('http://localhost:3001/blogs/' + blog.id ,{
            method: 'DELETE',

        }).then(() => {
            history.push('/')
        })
    }
    return(
        <div className="blog-details">
            { isPending && <div>chargement...</div> }
            { error && <div> { error } </div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>ecrit Par: { blog.author }  </p>
                    <div> { blog.body } </div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            ) }
        </div>
    );
}

export default BlogDetails;