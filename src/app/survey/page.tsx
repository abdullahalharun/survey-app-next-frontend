import Link from "next/link";
import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const page = () => {
  return (
    <div className="flex justify-center">
      <div
        className={`flex flex-col justify-between min-h-screen ${roboto.className}`}
      >
        <div className="flex justify-end items-center shadow shadow-slate-400">
          <Link href={"#"} className="flex p-4 md:p-6 text-blue-600">
            Exit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>
        </div>

        <div className="p-2 md:h-1/2">
          <h1 className="text-4xl font-bold text-center mb-8">
            I am a question. What is your answer?
          </h1>
          <div className="flex flex-col md:flex-row justify-start md:justify-center md:gap-12 my-4 gap-4">
            {/* <div className="flex justify-start gap-2 text-md">
              <input name="answer" type="radio" id="option1" />{" "}
              <label className="text-xl" htmlFor="option1">
                Answer 1
              </label>
            </div>
            <div className="flex justify-start gap-2 text-md">
              <input name="answer" type="radio" id="option2" />{" "}
              <label className="text-xl" htmlFor="option2">
                Answer 2
              </label>
            </div>
            <div className="flex justify-start gap-2 text-md">
              <input name="answer" type="radio" id="option3" />{" "}
              <label className="text-xl" htmlFor="option3">
                Answer 3
              </label>
            </div>
            <div className="flex justify-start gap-2 text-md">
              <input name="answer" type="radio" id="option4" />{" "}
              <label className="text-xl" htmlFor="option4">
                Answer 4
              </label>
            </div> */}
            <label htmlFor="">Agree</label>
            <div className="flex justify-start gap-2 text-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-600"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>

              <label className="text-xl md:hidden">Answer 4</label>
            </div>
            <div className="flex justify-start gap-2 text-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-600"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>

              <label className="text-xl md:hidden">Answer 4</label>
            </div>
            <div className="flex justify-start gap-2 text-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-600"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>

              <label className="text-xl md:hidden">Answer 4</label>
            </div>
            <div className="flex justify-start gap-2 text-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-600"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>

              <label className="text-xl md:hidden">Answer 4</label>
            </div>
            <label htmlFor="">Strongly Agree</label>
          </div>

          <div className="flex justify-center mt-8 ">
            <button className="flex gap-1 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
              I'd rather not answer this question
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center border-t-2">
          <button className="p-2 m-2 rounded bg-blue-600 text-white w-full md:hidden">
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
