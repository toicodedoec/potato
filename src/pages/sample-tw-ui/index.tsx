import { useState } from "react";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import useTailwindLayout from "../../hooks/useTailwindLayout";

export default () => {
  const [fun, setFun] = useState("");

  useTailwindLayout

  useEffect(() => {
    setFun(`Have fun at ${new Date()}`);
  }, []);

  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="bg-white flex items-center justify-center px-5 py-5">
          <div className="bg-gray-200 text-gray-600 text-sm rounded-lg shadow-lg overflow-hidden p-5">
            <div className="flex -mx-1">
              <div className="w-10 px-1 mb-4">
                <button className="block w-full h-8 hover:text-indigo-500 focus:outline-none text-center leading-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 px-1 mb-4 relative">
                <input
                  type="text"
                  className="w-full h-8 px-3 bg-gray-100 border focus:outline-none rounded-full"
                  placeholder="Message..."
                />
                <button className="absolute z-10 top-0 right-0 mt-1 mr-2 w-6 h-6 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none text-center leading-none flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-center flex"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex -mx-1 justify-center">
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  Q
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  W
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  E
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  R
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  T
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  Y
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  U
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  I
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  O
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  P
                </button>
              </div>
            </div>
            <div className="flex -mx-1 justify-center">
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  A
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  S
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  D
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  F
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  G
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  H
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  J
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  K
                </button>
              </div>
              <div className="w-8 px-1 mb-2">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                  L
                </button>
              </div>
            </div>
            <div className="flex -mx-1">
              <div className="w-10 px-1 mb-2">
                <button className="w-full h-10 rounded bg-gray-400 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="w-8 px-1 mb-2">
                  <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                    Z
                  </button>
                </div>
                <div className="w-8 px-1 mb-2">
                  <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                    X
                  </button>
                </div>
                <div className="w-8 px-1 mb-2">
                  <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                    C
                  </button>
                </div>
                <div className="w-8 px-1 mb-2">
                  <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                    V
                  </button>
                </div>
                <div className="w-8 px-1 mb-2">
                  <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                    B
                  </button>
                </div>
                <div className="w-8 px-1 mb-2">
                  <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                    N
                  </button>
                </div>
                <div className="w-8 px-1 mb-2">
                  <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none">
                    M
                  </button>
                </div>
              </div>
              <div className="w-10 px-1 mb-2">
                <button className="flex w-full h-10 rounded bg-gray-400 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex -mx-1">
              <div className="w-10 px-1">
                <button className="flex w-full h-10 rounded bg-gray-400 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-10 px-1">
                <button className="flex w-full h-10 rounded bg-gray-400 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 px-1">
                <button className="block w-full h-10 rounded bg-gray-100 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none text-xs">
                  space
                </button>
              </div>
              <div className="w-20 px-1">
                <button className="block w-full h-10 rounded bg-gray-400 hover:bg-indigo-600 hover:text-white shadow focus:outline-none text-center leading-none text-xs">
                  return
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="block mx-5 sm:mx-8">
          <div className="rounded overflow-hidden relative">
            <img
              className="w-full"
              src="https://i.ibb.co/2q4Q5PL/girl-water-masked.png"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="sm:flex items-start justify-between">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      className="w-12"
                      src="https://i.ibb.co/WnVgd7B/DP.png"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-semibold text-white">
                      John Connor
                    </p>
                    <p className="text-sm text-white">45 mins ago</p>
                  </div>
                </div>
                <div className="mt-6 sm:mt-0 flex sm:block items-center">
                  <div className="flex items-center text-white sm:justify-end">
                    <p className="text-base font-semibold leading-9 text-right text-white">
                      4.3K
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer ml-4 icon icon-tabler icon-tabler-heart"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                  </div>
                  <div className="flex items-center sm:justify-end text-white ml-4 sm:ml-0 sm:mt-2">
                    <p className="text-base font-semibold leading-9 text-right text-white">
                      954
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer ml-4 icon icon-tabler icon-tabler-message-dots"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                      <line x1="12" y1="11" x2="12" y2="11.01" />
                      <line x1="8" y1="11" x2="8" y2="11.01" />
                      <line x1="16" y1="11" x2="16" y2="11.01" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-sans leading-tight bg-white p-5 sm:p-8">
          <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <div
              className="bg-cover h-40 bg-blue-200"
              style={{
                backgroundImage: `url(https://live.staticflickr.com/1527/24711685634_21d1124a2b_b.jpg)`,
              }}
            ></div>
            <div className="border-b px-4 pb-6">
              <div className="text-center sm:text-left  sm:flex mb-4">
                <img
                  className="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
                  src="https://randomuser.me/api/portraits/men/51.jpg"
                  alt=""
                />
                <div className="py-2">
                  <h3 className="font-bold text-2xl text-gray-900 mb-1">
                    John Smith
                  </h3>
                  <div className="inline-flex text-gray-700 sm:flex items-center">
                    <svg
                      className="h-5 w-5 text-gray-400 mr-1"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        className="heroicon-ui"
                        d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                      />
                    </svg>
                    New York, NY
                  </div>
                </div>
              </div>
              <div className="flex">
                <button className="flex-1 rounded-full bg-blue-500 text-white antialiased font-bold hover:bg-blue-900 px-4 py-2 mr-2">
                  Follow
                </button>
                <button className="flex-1 rounded-full border-2 border-grey font-semibold text-black px-4 py-2 hover:bg-red-300">
                  Message
                </button>
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="flex items-center text-grey-darker mb-4">
                <svg
                  className="h-6 w-6 text-grey mr-1"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                  />
                </svg>
                <span>
                  <strong className="text-black">12</strong> Followers you know
                </span>
              </div>
              <div className="flex">
                <div className="flex flex-row-reverse justify-end mr-2">
                  <img
                    className="border-2 border-white rounded-full h-10 w-10"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt=""
                  />
                  <img
                    className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                    src="https://randomuser.me/api/portraits/women/31.jpg"
                    alt=""
                  />
                  <img
                    className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                    src="https://randomuser.me/api/portraits/men/33.jpg"
                    alt=""
                  />
                  <img
                    className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt=""
                  />
                  <img
                    className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                    alt=""
                  />
                  <img
                    className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                    src="https://randomuser.me/api/portraits/women/42.jpg"
                    alt=""
                  />
                </div>
                <span className="flex items-center justify-center text-sm text-grey-darker font-semibold border-2 border-gray-200 rounded-full h-10 w-10">
                  +3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
