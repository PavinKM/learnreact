// import { useState, useEffect } from "react";

import useFetch from "./useFetch"

function CourseList(){
    // const [courses,setCourses] = useState(null)
    const [courses, dummy, error] = useFetch('http://localhost:3000/courses') //argument

    // const [dummy, setDummy] = useState(true)
    // const [error, setError] = useState(null)

    // useEffect(()=> {
    //     setTimeout( () => {
    //         fetch('http://localhost:3000/courses') //fetch is a promise object
    //         .then(response => {
    //             if(!response.ok){
    //                 throw Error("Couldn't retrieve data")
    //             }   
    //             console.log(response)
    //             return response.json()
    //         }).then(data => setCourses(data))
    //         .catch((error) => {
    //             console.log(error.message)
    //             setError(error.message)
    //         })
    //     }, 1000)
    // }, []) //its will run once since we given empty dependencies


    function handleDelete(id){
        console.log(id)
        const newCources = courses.filter((course) => course.id != id)
        setCourses(newCources)

    }  

        //courses.sort((x,y) => y.rating - x.rating)
        //const vfmCourses = courses.filter((course)=>course.price<200)
         
        if(!courses){
            return (
            <>   
                {!error && <p>Loading...</p>}
                { error && <p>{error}</p> } //condition rendering
            </>
            )
        }

        const coursesList = courses.map(
            (course) =>
            <Course key={course.id} name={course.name}
            image={course.image}
            price={course.price} rating={course.rating} delete={handleDelete()} />
        )
        return (
            <>
                {coursesList}
                <button onClick={() => {setDummy(false)}}>Dummy Button</button>
            </>
        )
    

}

export default CourseList


// npx json-server --watch data/dummyData.json --port 3000 --static ./data
// npm create vite@latest


// data > db.json
// {
//     "posts" : [
//         {
//             "id": 101 ,
//             "title": "My First Post" ,
//             "content": "Hello, this is my first post!",
//             "created_at": "2024-01-01"
//         },
//         {
//             "id": 102 ,
//             "title": "A Day in the Life" ,
//             "content": "Today was a great day...",
//             "created_at": "2024-01-01"
//         },
//         {
//             "id": 103 ,
//             "title": "Tech Trendz 2024" ,
//             "content": "AI and Blockchain are shaping the future of technology",
//             "created_at": "2024-01-05"
//         },
//         {
//             "id": 104 ,
//             "title": "Best Coding Practices" ,
//             "content": "Writing clean and efficent code is essential for scalability",
//             "created_at": "2024-01-10"
//         },
//         {
//             "id": 105 ,
//             "title": "The Future of Web Development" ,
//             "content": "React, Svelte, and SolidJS are gaining traction amoung developers.",
//             "created_at": "2024-02-15"
//         },
//         {
//             "id": 106 ,
//             "title": "Productivity Hacks" ,
//             "content": "Using the Pomodoro technique has significantly improved",
//             "created_at": "2024-02-20"
//         }
//     ]
// }
