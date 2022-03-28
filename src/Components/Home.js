import React from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';






const Home = () => {
    const { data: blogs, isPending, error} = useFetch('http://localhost:3001/blogs')
    return(
        <div className="home">
            {isPending && <div> chargement...</div>}
           {blogs && <BlogList blogs={blogs} title="Mes Blogs" />}
            
        </div>
    );
}

export default Home;