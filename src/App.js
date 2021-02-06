import React, { useState } from "react";
import illustration from "./undraw_programming_2svr.svg";
import logo from "./logo.svg";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function App() {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");
  const [refLink, setRefLink] = useState("");
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const ref = query.get("ref_id");

  const onChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const getRef = () => {
    if (ref === "") {
      return "1234";
    }
    return ref;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://getwaitlist.com/api/v1/waitlists/submit", {
        api_key: process.env.REACT_APP_WAITLIST_KEY,
        email: email,
        referral_link: "https://indietesters.com/ref_id=" + getRef(),
      })
      .then((resp) => {
        setAlert(
          "Thanks for signing up! Your in position " +
            resp.data.current_priority +
            "/" +
            resp.data.total_users +
            ". Share your referral link below so you can jump the queue."
        );
        setRefLink(resp.data.referral_link);
      })
      .catch((_) => {
        setAlert("An unexpected error occured. Please refresh and try again.");
      });
  };

  return (
    /*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <header className="relative">
          <div className="bg-background pt-6">
            <nav
              className="px-4 sm:px-6 lg:px-0 relative max-w-md sm:max-w-2xl mx-auto flex items-center justify-between"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <span className="sr-only">Indie Testers</span>
                    <img className="h-10 w-auto sm:h-16" src={logo} alt="" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <main>
          <div className="pt-10 bg-background sm:pt-16 lg:pt-8 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:gap-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-10">
                    <a
                      href="https://twitter.com/IndieTestersHQ"
                      className="inline-flex items-center text-gray-600 bg-secondary-accent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-900 hover:font-extrabold"
                    >
                      <span className="px-3 py-0.5 text-background text-xs font-semibold leading-5 uppercase tracking-wide bg-accent rounded-full">
                        Coming soon
                      </span>
                      <span className="ml-4 text-sm">Follow Twitter</span>
                      {/* Heroicon name: solid/chevron-right */}
                      <svg
                        className="ml-2 w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-700 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Beta testing for</span>
                      <span className="block text-accent">indie hackers</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Get discounts on products made by other indie hackers
                      before they are released to the public in exchange for a
                      review.
                    </p>
                    {alert !== "" && (
                      <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-bold">
                        {alert}
                      </p>
                    )}
                    {refLink !== "" && (
                      <p className="mt-3 text-base text-accent sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-bold underline">
                        <a href={refLink}>{refLink}</a>
                      </p>
                    )}
                    <div className="mt-10 sm:mt-12">
                      <form onSubmit={onSubmit} className="sm:mx-auto lg:mx-0">
                        <div className="sm:flex">
                          <div className="sm:flex-grow">
                            <label htmlFor="email" className="sr-only">
                              Email address
                            </label>
                            <input
                              value={email}
                              onChange={onChange}
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              className="bg-white block px-4 py-3 rounded-md w-full border-2 sm:border-4 border-accent text-base text-gray-900 placeholder-gray-500 outline-none hover:border-gray-700 focus:border-gray-700 ring-0"
                            />
                          </div>
                          <div className="flex-1 mt-3 sm:mt-0 sm:ml-3">
                            <button
                              type="submit"
                              className="block w-full py-3 px-4 rounded-md shadow bg-accent text-background font-medium hover:bg-gray-700 border-2 sm:border-4 focus:outline-none focus:ring-0 border-accent hover:border-gray-700"
                            >
                              Join waiting list
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-10 -mb-0 sm:-mb-10">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img className="w-full" src={illustration} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* More main page content here... */}
        </main>
      </div>
    </div>
  );
}
