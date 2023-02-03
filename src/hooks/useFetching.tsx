import { useCallback, useState } from "react"

export function useFetching<T extends any[], R = any>(
    callback: (...args: T) => Promise<R>
  ) {
    const[load,setLoad]=useState(false);
    const [error,setError]=useState('')

    const fetch =useCallback(async (...args: T)=>{
        try{
            setLoad(true)
            await callback(...args)
        }catch (error){
            setError("ERROR");
            throw error;
        }finally{
            setLoad(false)
        }
    },[])

    return {fetch,load,error}
}