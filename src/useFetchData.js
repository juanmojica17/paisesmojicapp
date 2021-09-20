import { useEffect, useState } from "react"

const useFetchData = url =>{

const [data, setData] = useState([])

const handlesFetchApi = async () =>{
try{
const response = await fetch(url)
const result = await response.json()
setData(result);
} catch (error) {
console.log(error)
}
}

useEffect(() => {
handlesFetchApi()
},[url])
return {data}
}
export default useFetchData
