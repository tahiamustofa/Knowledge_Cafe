import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; 

const Blogs = (props) => {
    const { handleBookmarks,readTime } =props;
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3 bg-yellow-50'>
            <h1 className="p-5 bg-yellow-200">Blogs: <span className="text-red-950 font-bold mx-4">{blogs.length}</span> </h1>
            <div>
            {
                blogs.map(blog => <Blog handleBookmarks={handleBookmarks} 
                key={blog.id} blog={blog} readTime={readTime}></Blog>)
            }
            </div>
        </div>
    );
};
Blogs.propTypes = {
    handleBookmarks:PropTypes.func.isRequired ,
    readTime:PropTypes.func.isRequired ,
}

export default Blogs;