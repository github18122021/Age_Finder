"use client";

import React from "react";
import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Page() {
  const [dob, setDob] = useState("");
  const [secondDate, setSecondDate] = useState("");
  const [disabled, setDisabled] = useState(false);

  function getDob(e : React.ChangeEvent<HTMLInputElement>) {
    console.log("Date of birth", e.target.value);
    setDob(e.target.value);
  }

  function getSecondDate(e : React.ChangeEvent<HTMLInputElement>) {
    console.log("Second date", e.target.value);
    setSecondDate(e.target.value);

  }

  function calculateAge(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setDisabled(true);

    const date1  = new Date(dob);
    const date2 = new Date(secondDate);

    if(isNaN(date1.getTime()) || isNaN(date2.getTime())) {
      toast.error("Invalid Date!!", {
        theme: "blue"
      });

      setDisabled(false);
      return;
    }

    if(date1 > date2) {
      toast.error("Invalid Date Range!!", {
        theme: "blue"
      });

      setDisabled(false);
      return;
    } 

    let difference = date2.getTime() - date1.getTime();

    let years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    difference -= years * 365.25 * 24 * 60 * 60 * 1000;

    let months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
    difference -= months * 30.44 * 24 * 60 * 60 * 1000;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    difference -= days * 24 * 60 * 60 * 1000;

    let hours = Math.floor(difference / (1000 * 60 * 60));
    difference -= hours * 60 * 60 * 1000;

    let minutes = Math.floor(difference / (1000 * 60));
    difference -= minutes * 60 * 1000;

    let seconds = Math.floor(difference / 1000);
    difference -= seconds * 1000;

    const age = {
      years,
      months,
      days,
      hours,
      minutes,
      seconds
    }

    toast.success(`You are ${age.years} years, ${age.months} months, ${age.days} days, ${age.hours} hours, ${age.minutes} minutes and ${age.seconds} seconds old`, {
      theme: "blue"
    });

    setTimeout(() => {
      setDisabled(false);
      console.log("done");
    }, 5000);
    
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl text-blue-700 font-bold text-center mb-6">Age Calculator</h1>

        <form>
          <section className="mb-4">
            <label htmlFor="dob" className="block mb-2">Date of Birth:</label>
            <input type="date" name="dob" id="dob" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700" value={dob} onChange={getDob}/>
          </section>

          <section className="mb-6">
            <label htmlFor="secondDate" className="block mb-2">Age at the Date of:</label>
            <input type="date" name="secondDate" id="secondDate" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700" value={secondDate} onChange={getSecondDate}/>
          </section>

          <section className="text-center">
            <button type="submit" className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded`} onClick={calculateAge} disabled={disabled}>
              {
                disabled ? "Calculating..." : "Calculate"
              }
            </button>
          </section>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Page;
