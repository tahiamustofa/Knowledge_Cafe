import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
// import Bookmark from './Components/Bookmark/Bookmark'



function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setreadingTime] =useState(0);
  const handleBookmarks=(blog)=>{
   let newBlog = [...bookmarks,blog]
    setBookmarks(newBlog)
  }
  let readTime=(read,id)=>{
 let newRead= readingTime+read;
 setreadingTime(newRead)

//  remove 
const remaining=bookmarks.filter((bookmark)=>bookmark.id !== id);
setBookmarks(remaining);

  }
  return (
    <>
    <div className='container mx-auto max-w-7xl'>
      <Header></Header>
      
      <div className='md:flex gap-5 mt-4 '>
      <Blogs handleBookmarks={handleBookmarks} readTime={readTime}></Blogs>
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}> </Bookmarks>
        </div>
      </div>
     </>
  )
}

export default App
