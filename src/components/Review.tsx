/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import * as React from "react";
import { RevewComponentProps } from "./helpers/componentPropse.type";
import { useUpdateBookMutation } from "../redux/api/apiSlice";
import { IPostResponse } from "../types/InterfaceResponse";
import { toast } from "react-toastify";
const Review: React.FC<RevewComponentProps> = ({ book }) => {
  const [comment, setComment] = useState("");
  const [updateBook] = useUpdateBookMutation();

  const handleReviewPost = async () => {
    const updateReviews = [...book.reviews, comment];
    const data = {
      reviews: updateReviews,
    };

    const result:IPostResponse = await updateBook({
      id: book?._id,
      data: data,
    });
    if('data' in result ){
      toast.success("Review submit !");
      setComment("");
    }
  };



  return (
    <>
      <h1 className="text-center text-2xl">Review</h1>
      <div className="w-4/5 mx-auto">
        <blockquote className="relative w-full bg-white p-5 border border-gray-200 break-inside-avoid-column m-10">
          <div className="flex flex-col justify-start items-center">
            {book?.reviews?.map((r) => (
              <div
              
                className="flex flex-col justify-start items-center pt-5"
              >
                <h2 className="text-sm">
  
                  {r}
                </h2>

                <div className="mt-5 flex  items-start gap-4">
                  <img
                    src="https://www.svgrepo.com/show/491978/gas-costs.svg"
                    className="w-10 h-10 object-cover object-center"
                    alt="Aaron Francis"
                  />
                  {/* <div className="text-xs">
                    <cite className="not-italic">Aaron Francis</cite>
                    <p className="text-gray-700">
                      Creator of{" "}
                      <a href="" target="_blank" className="text-red-500">
                        XYZ
                      </a>
                    </p>
                  </div> */}
                </div>
              </div>
            ))}

            <div className="flex space-x-4 mt-10">
              <div className="flex rounded-md overflow-hidden border ">
                <input
                  type="text"
                  value={comment || ""}
                  onChange={(e) =>
                    setComment((e.target as HTMLInputElement).value)
                  }
                  className="pl-2 w-[350px] rounded-md rounded-r-none focus:shadow focus:outline-none"
                  placeholder="Comment anything..."
                />
                <button
                  onClick={handleReviewPost}
                  className="bg-indigo-600 text-white px-6 text-lg font-semibold py-2 rounded-r-md"
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </blockquote>
      </div>
    </>
  );
};

export default Review;
