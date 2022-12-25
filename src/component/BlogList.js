

const BlogList =(props)=>{

    
    let blogs = props.blog;
    let heads = props.head;
    let header = document.getElementById("header");
   

    if (blogs.length === 0) {
        header.innerHTML= "nothing to show";}
    
     const list= blogs.map((blog) => {
             let {id,title,body,author}= blog;
        return( <div className="blog-list" key={id}>
           
            <h2>{title} </h2>
            <p>{body} </p>
            <p>written by {author} </p>
           
        </div>
)})
      return (
     <div>
         <h2 id="header">{heads} </h2>
          {list}
      </div>
    );
}

export default BlogList;