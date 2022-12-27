import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BLogDetails = () => {
    const {id} = useParams();
     const  {data: blogs, isLoading, error} = useFetch("http://localhost:3000/blogs/"+id)
    console.log( useFetch("http://localhost:3000/blogs/"+id)
  )
          
    return ( 
         <div className="blog-details">
           
            {isLoading && <div>Page is Loading.....</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                <h2>{blogs.title}</h2>
                <p>written by {blogs.author}</p>
                <div>{blogs.body} </div>


                </article>
            )}
         </div>
      );
}
 
export default BLogDetails;