import {useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BLogDetails = () => {
    const {id} = useParams();
    const history = useHistory();
    const  {data: blog, isLoading, error} = useFetch("http://localhost:3000/blogs/"+id)
    const handleClick =()=>{
      fetch("http://localhost:3000/blogs/"+id,{
        method: "DELETE",
      }).then(()=>{
        history.push("/");
      })
    }
          
    return ( 
         <div className="blog-details">
           
            {isLoading && <div>Page is Loading.....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <div>{blog.body} </div>
                <button onClick={handleClick}>Delete</button>


                </article>
            )}
         </div>
      );
}
 
export default BLogDetails;