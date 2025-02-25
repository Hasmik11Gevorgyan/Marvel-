import { useState, useCallback } from "react";

export default function useHttp(){
 const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(async (
    url, 
    method ="GET", 
    body = null, 
    headers = {"Content-Type": "application/json"}
) => {
    setLoading(true);
    try{
        const response = await fetch(url, {method, body, headers});
        const data = await response.json();

        if(!response.ok){
            throw new Error(data.message || "Something went wrong");
        }

        setLoading(false);
        return data;
    }catch(e){
        setLoading(false);
        setError(e.message);
        throw e;
    }
}, []);

const clearError  = useCallback(() => setError(null), []);
return {loading, request, error, clearError}
}