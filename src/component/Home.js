import useFetch from '../useFetch';
import BlogList from './BlogList';

const Home = () => {

    const  {data: blogs, isLoading, error} = useFetch("http://localhost:3000/blogs")
  


    return (
        <div className="page">

        {error && <div>Sorry, the page could not correctly</div> }
        {isLoading && <div>page is loading.......</div> }
        {blogs && <BlogList
                    blog={blogs}
                    head={"REACT ROCKS!"}
                 
                 /> }
              
          
        </div>
      );
}
 
export default Home;