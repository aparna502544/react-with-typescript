import { useEffect, useState } from "react"


const UseFetch =<T> (url:string) => {
    const [data,setData]= useState<T | null>(null);
    const [loading,setLoading]= useState<boolean>(true);
    const [error,setError]= useState<string | null>( null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                setLoading(true);
                setError(null);
                const response = await fetch(url);
                if (!response.ok){
                    throw new Error("something went wrong");
                }
                const result: T =await response.json();
                setData(result);
            } catch (err){
                setError(err instanceof Error ? err.message : "unknown error");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    },[url])
      return {data, loading , error}
}

export default UseFetch