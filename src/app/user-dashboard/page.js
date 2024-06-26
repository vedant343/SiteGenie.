"use client";
import "../../styles/globals.css";
import Create from "@/components/createChatbot";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import FooterSection from "@/components/footer";
import InternalNavbar from "@/components/internalnavbar";

const create = {
  tiers: [
    {
      title: "daywiseai.com",
      price: "DaywiseAi",
      cta: "Preview Chatbot",
      link: "http://localhost:3000/preview?url=https://daywiseai.com/",
    },
    {
      title: "alentarelectric.com",
      price: "AlenElectric",
      cta: "Preview Chatbot",
      link: "http://localhost:3000/preview?url=https://alentarelectric.com/",
    },
    {
      title: "sippline.com",
      price: "Sippline",
      cta: "Preview Chatbot",
      link: "http://localhost:3000/preview?url=https://sippline.com/",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <>
      <InternalNavbar />
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {" "}
          <div className="px-4 py-28 sm:px-0">
            <div className="text-4xl">Dashboard</div>
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 mt-8">
              <div className="flex justify-center items-center ">
                <div className="m-8 justify-center relative py-2 px-3 bg-white border border-gray-200 rounded-2xl shadow-md flex flex-row items-center w-[350px] text-indigo-700 hover:shadow-lg">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex items-center space-x-6">
                        <span className="text-lg">Create new Chatbot</span>
                        <button
                          type="button"
                          className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </button>
                      </div>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-md">
                      <Create />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="max-w-7xl mx-auto py-2 px-4 bg-white sm:px-6 lg:px-8">
                <div className="mt-0 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                  {create.tiers.map((tier) => (
                    <div
                      key={tier.title}
                      className="relative p-6 text-lg bg-white border border-gray-200 rounded-2xl shadow-md flex flex-col hover:shadow-lg"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg text-indigo-500">
                          {tier.title}
                        </h3>
                        <p className="mt-4 flex items-baseline text-gray-900">
                          <span className="text-4xl  tracking-tight">
                            {tier.price}
                          </span>
                        </p>
                      </div>
                      <a
                        href={tier.link} // Use the link property for the href attribute
                        className={classNames(
                          tier.mostPopular
                            ? "bg-indigo-500 text-white hover:bg-indigo-600"
                            : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
                          "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                        )}
                      >
                        {tier.cta}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
