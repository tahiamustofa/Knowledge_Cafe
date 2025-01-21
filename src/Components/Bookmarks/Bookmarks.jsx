import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';



const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 space-y-8'>
        <div className="bg-yellow-300 p-5 shadow-2xl">
            <h3>ReadingTime: {readingTime}</h3>
        </div>
        <div className="bg-yellow-200">
        <h3 className="p-4">Bookmarks {bookmarks.length}</h3> 
         <div className="space-y-4 ">
         {
            bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            } 
         </div> 
        </div>
        
        
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired,
};

export default Bookmarks;