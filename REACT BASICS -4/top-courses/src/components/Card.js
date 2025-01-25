import React from "react";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from "react-toastify";
import { useState } from "react";

const Card = (props) => {
    let course = props.course;
    const [likedCourses, setLikedCourses] = useState([]);
    // let likedCourses = props.likedCourses;
    // let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        // Logic
        if (likedCourses.includes(course.id)) {
            // pahle se liked tha.
            const newLikedCourses = likedCourses.filter((cid) => cid !== course.id);
            setLikedCourses(newLikedCourses);
            // setLikedCourses((prevState) => prevState.filter((cid) => cid !== course.id));
            toast.warning("Liked Removed");
        }
        else {
            // pahle se like nahi hai course 
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                //when liked courses is not empty
                // setLikedCourses((prevState) => [...prevState, course.id]);
                setLikedCourses([...likedCourses, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }


    return (
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>

            <div className='relative'>

                <img src={course.image.url} alt="Course Image" className=''></img>

                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>

                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize='1.75rem' />) : (<FcLikePlaceholder fontSize='1.75rem' />)
                        }

                    </button>
                </div>

            </div>

            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length > 100 ? (`${course.description.substring(0, 100)}...`) : (course.description)
                    }
                </p>
            </div>

        </div>
    )
}


export default Card;
