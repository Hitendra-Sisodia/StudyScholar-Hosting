// import utility Methods
import React from "react";
import { useDispatch, useSelector } from "react-redux";


// import React Icons
import ReactStars from "react-rating-stars-component"
import { FaStar } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"


// import slices method
import { removeFromCart } from "../../../../slices/cartSlice";



const RenderCartCourses = () => { 


    // get courses from cart i.e stored in slices
    const { cart } = useSelector( (state) => state.cart );
    
    const dispatch = useDispatch();


    return (
        <div className="flex flex-1 flex-col">
            {
                cart.map((course, index) => (
                    <div key={course._id} className={`flex w-full flex-wrap items-start justify-between gap-6 ${ index !== cart.length - 1 && "border-b border-b-richblack-400 pb-6" } ${ index !== 0 && "mt-6"} `} >
                        <div className="flex flex-1 flex-col gap-4 xl:flex-row">
                            <img src={course?.thumbnail} alt={course?.courseName} className="h-[148px] w-[220px] rounded-lg object-cover" />
                            <div className="flex flex-col space-y-1">
                                <p className="text-lg font-medium text-richblack-5">
                                    {course?.courseName}
                                </p>
                                <p className="text-sm text-richblack-300">
                                    {course?.category?.name}
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-5">4.5</span>
                                    <ReactStars
                                        count={5}
                                        value={course?.ratingAndReviews?.length}
                                        size={20}
                                        edit={false}
                                        activeColor="#ffd700"
                                        emptyIcon={<FaStar />}
                                        fullIcon={<FaStar />}
                                    />
                                    <span className="text-richblack-400">
                                        {course?.ratingAndReviews?.length} Ratings
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                            <button onClick={() => dispatch(removeFromCart(course._id))} className="flex items-center gap-x-1 rounded-md border border-richblack-600 bg-richblack-700 py-2 px-[12px] text-pink-200" >
                                <RiDeleteBin6Line />
                                <span>Remove</span>
                            </button>
                        <p className="mb-6 text-2xl font-medium text-yellow-100">
                            ₹  {course?.price}
                        </p>
                    </div>
                </div>
                ))
            }
        </div>
        )
    }

    
export default RenderCartCourses;   