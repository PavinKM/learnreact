import { useState, useEffect } from "react";

function CourseList(){
    const [courses,setCourses] = useState(null)
    const [dummy, setDummy] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=> {
        fetch('http://localhost:3000/courses') //fetch is a promise object
        .then(response => {
            console.log(response)
            return response.json()
        }).then(data => setCourses(data))
        .catch((error) => {
            console.log(error.message)
            setError(error.message)
        })

    }, []) //its will run once since we given empty dependencies


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
                <p>{error}</p>
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