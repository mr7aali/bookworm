import { useState } from "react";
import { IBook } from "../types/book";

const Review = ({data}) => {
   
  const [comment, setComment] = useState("");
  
  return (
    <>
      <h1 className="text-center text-2xl">Review</h1>
      <div className="w-4/5 mx-auto">
        <blockquote className="relative w-full bg-white p-5 border border-gray-200 break-inside-avoid-column m-10">
          <div className="flex flex-col justify-start items-center">
            <div className="flex flex-col justify-start items-center ">
              <h2 className="text-sm">
                “Laravel takes the pain out of building modern, scalable web
                apps.“
              </h2>

              <div className="mt-5 flex  items-start gap-4">
                <img
                  src="https://www.svgrepo.com/show/491978/gas-costs.svg"
                  className="w-10 h-10 object-cover object-center"
                  alt="Aaron Francis"
                />
                <div className="text-xs">
                  <cite className="not-italic">Aaron Francis</cite>
                  <p className="text-gray-700">
                    Creator of{" "}
                    <a href="" target="_blank" className="text-red-500">
                      XYZ
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-10">
              <div className="flex rounded-md overflow-hidden border ">
                <input
                  type="text"
                  onChange={(e)=>setComment((e.target as HTMLInputElement).value)} 
                  className="pl-2 w-[350px] rounded-md rounded-r-none focus:shadow focus:outline-none"
                  placeholder="Comment anything..."
                />
                <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-2 rounded-r-md">
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
