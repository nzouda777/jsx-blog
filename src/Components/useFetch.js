import  {useEffect, useState} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    

    useEffect(() => { 
        
        const abortCont = new window.AbortController()
        
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal})
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data for that ressource')
                }
                return res.json()
            })
            .then(data => {
                setIsPending(false)
                setData(data)
            
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }else{
                setIsPending(false)
                setError(err.message)
                }
            })
        }, 1000)
        return () => abortCont.abort()
    },[url])

    return {data, isPending, error}
}

export default useFetch;