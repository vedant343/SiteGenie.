"use client";
import "../../styles/globals.css";
import { useState } from "react";
import InternalNavbar from "@/components/internalnavbar";
import FooterSection from "@/components/footer";

const Preview = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="min-h-full flex flex-col">
        <InternalNavbar />
        <div className="flex-grow py-24">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-4xl text-center sm:text-left">
                Chatbot Preview
              </div>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="px-4 py-8 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-max p-2">
                  <div className="max-w-7xl mx-auto py-2 px-4 bg-white sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                      <div className="px-4 py-2 sm:px-6">
                        <h3 className="text-xl font-semibold text-indigo-500 break-words">
                          {inputValue}
                        </h3>
                      </div>
                      <div className="bg-white shadow sm:rounded-lg px-6 bg-red m-6">
                        <div className="px-4 py-5 sm:p-6">
                          <iframe
                            src={`http://localhost:3000/chatbot?url=${encodeURIComponent(
                              inputValue
                            )}`}
                            className="w-full h-64"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="bg-white shadow sm:rounded-lg">
                          <div className="px-4 py-2 sm:p-6">
                            <div className="sm:flex sm:items-start sm:justify-between px-3">
                              <div>
                                <h3 className="text-xl leading-6 font-medium text-gray-900">
                                  Embed this iframe
                                </h3>
                                <div className="mt-2 text-sm text-gray-500">
                                  <div className="mt-1">
                                    <div className="w-full mx-0 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-lg text-gray-500 border border-black rounded-md p-3 break-words">
                                      {console.log(
                                        encodeURIComponent(inputValue)
                                      )}
                                      <pre>
                                        <code>
                                          {`<iframe
  src="http://localhost:3000/chatbot?url=${encodeURIComponent(inputValue)}"
  class="w-full h-64"
  frameborder="0"
  allowfullscreen
></iframe>`}
                                        </code>
                                      </pre>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center pl-14 sm:pl-0">
                                <button
                                  type="button"
                                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                  onClick={() => {
                                    navigator.clipboard.writeText(`<iframe
  src="http://localhost:3000/chatbot?url=${encodeURIComponent(inputValue)}"
  class="w-full h-64"
  frameborder="0"
  allowfullscreen
></iframe>`);
                                  }}
                                  id="copyButton"
                                >
                                  Copy
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <FooterSection />
      </div>
    </>
  );
};

export default Preview;
