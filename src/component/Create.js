import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

const[title, setTitle] = useState("");
const[body, setBody] = useState("");
const[author, setAuthor] = useState("select author");
const [isLoading, setIsLoading] = useState(false);
const history=useHistory();
const handleSubmit=(event)=>{
        event.preventDefault();
        const blog = {title, body, author};
        setIsLoading(true);

        fetch("http://localhost:3000/blogs", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("blog created");
            setIsLoading(false);
              history.push("/")
    })
   
         


}


    return (
        <div className ="create" >
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    value= {title}
                    onChange = {(event)=> setTitle(event.target.value)}
                    required
                />
                <label>Blog body</label>
                <textarea
                     value={body}
                     onChange={(event)=> setBody(event.target.value)}

                
                    required
                    ></textarea>
                <label>Blog author</label>
                <select
                    value={author}
                    onChange={(event)=> setAuthor(event.target.value)}
                    >
                    <option value="">select author</option>
                    <option value="sam">sam</option>
                    <option value="paul">paul</option>
                    <option value="happy">happy</option>
                </select>
                {!isLoading&& <button>Add blog</button>}
                {isLoading && <button disabled>Adding blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            

            </form>

        </div>
      );
}
 
export default Create;