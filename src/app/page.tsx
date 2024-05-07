import React from "react";

function Page() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl text-blue-700 font-bold text-center mb-6">Age Calculator</h1>

        <form>
          <section className="mb-4">
            <label htmlFor="dob" className="block mb-2">Date of Birth:</label>
            <input type="date" name="dob" id="dob" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700" />
          </section>

          <section className="mb-6">
            <label htmlFor="currentDate" className="block mb-2">Age at the Date of:</label>
            <input type="date" name="currentDate" id="currentDate" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700" />
          </section>

          <section className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Calculate Age
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Page;
