import { useState, useEffect } from "react";
//custom hook 

const useFetch = (url) => { //accepting as input

    const [data,setData] = useState(null)
    const [dummy, setDummy] = useState(true)
    const [error, setError] = useState(null)

        useEffect(()=> {
            setTimeout( () => {
                //fetch('http://localhost:3000/courses') //fetch is a promise object
                fetch(url)
                .then(response => {
                    if(!response.ok){
                        throw Error("Couldn't retrieve data")
                    }   
                    console.log(response)
                    return response.json()
                }).then(data => setData(data))
                .catch((error) => {
                    console.log(error.message)
                    setError(error.message)
                })
            }, 1000)
        }, []) //its will run once since we given empty dependencies

        return [data, dummy, error]

}

export default useFetch