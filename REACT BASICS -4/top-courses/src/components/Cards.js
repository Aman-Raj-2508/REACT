import React from 'react';
import Card from './Card';

const Cards = (props) => {

    let courses = props.courses
    // console.log("printing data");
    // console.log(courses); //Till here the data is in the form of different category but we want all data in a single array.

    //For like and Unlike button
    //   const [likedCourses, setLikedCourses] = useState([]);

    let category = props.category;


    function getCourses() {

        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            return courses[category];
        }

    }

    const allCoursesArray = getCourses();
    // console.log(allCoursesArray);

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                allCoursesArray.map((course) => (
                    <Card
                        key={course.id}
                        course={course}
                    // likedCourses={likedCourses}
                    // setLikedCourses={setLikedCourses}
                    />
                ))


            }

        </div>
    )
}


export default Cards;
