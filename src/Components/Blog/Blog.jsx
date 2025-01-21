import PropTypes from 'prop-types';

import { IoBookmarksOutline } from "react-icons/io5";

const Blog = (props) => {
    const { blog, handleBookmarks, readTime } = props;
    const { id,cover, title, author_img, reading_time, author, posted_date, hashtags } = blog;
    const [one, two, three] = hashtags;
    return (
        <div className="mb-20 space-y-3 shadow-2xl p-5">
            <img className="w-full" src={cover} alt={`title ${title}`}></img>
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <img className='w-14 h-14 rounded-full' src={author_img}></img>
                    <div>
                        <h4 className='font-bold'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-1 items-center'>
                    <p>{reading_time} min read </p>
                    <button className='text-3xl text-red-400'
                        onClick={() => handleBookmarks(blog)}
                    ><IoBookmarksOutline /></button>
                </div>
            </div>
            <h2 className='text-xl font-extrabold'>{title}</h2>
            <div className='flex gap-2 text-sky-300 text-base'>
                <p><a href='https://memorable-react-water-bottle.netlify.app/'>#{one}</a></p>
                <p><a>#{two}</a></p>
                <p><a>#{three}</a></p>
                
            </div>
            
            <div>
            {
                    hashtags.map((hash, idx) => <span key={idx}><a className='text-blue-600 text-xs' href='https://memorable-react-water-bottle.netlify.app/'> #{hash}</a></span>)
                }
            </div>
            <button onClick={() => readTime(reading_time,id)} className='text-purple-700 p-2 bg-orange-200 rounded-3xl'> Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
    readTime: PropTypes.func.isRequired,
    blog: PropTypes.object.isRequired,
}
export default Blog;