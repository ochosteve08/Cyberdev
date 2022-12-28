import { useState, useEffect } from "react";

const useFetch =(url)=>{


     const [data,setData]= useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const abortControls = new AbortController();
   
       

             fetch( url, {signal: abortControls.signal })
            .then(res =>{
                            if (!res.ok){
                                throw Error("something is wrong, check the endpoint connection...")
                            }
                            
                            return res.json();
                       })
            .then((data)=> {
            
                                setData(data);
                                setIsLoading(false);
                                setError(null);

                           })
            .catch(err=>{

                            if (err.name === 'AbortError'){
                                console.log("fetch aborted")
                                 }
                            else {
                                    setError(err.message);
                                    setIsLoading(false);
                                }
                        })


            return ()=> abortControls.abort() ;

    },[url]);

             return {data, error, isLoading}

};

export default useFetch;