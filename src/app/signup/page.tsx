export default function Page() {
  return (
    <div className="w-full h-full bg-gray-800 flex justify-center items-center">
      <form className="w-1/4 h-1/2 bg-gray-700 rounded-lg p-4 flex items-center flex-col">
        <div className="w-full">
          <label htmlFor="name" className="text-sm font-semibold leading-6 text-gray-100">Name</label>
          <div className="mt-1 w-full">
            <input required type="text" id="name" name="name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="w-full mt-3">
          <label htmlFor="socialName" className="text-sm font-semibold leading-6 text-gray-100">Social Name</label>
          <div className="mt-1 w-full">
            <input required type="text" id="socialName" name="socialName" autoComplete="given-socialName" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="w-full mt-3">
          <label htmlFor="email" className="text-sm font-semibold leading-6 text-gray-100">Email</label>
          <div className="mt-1 w-full">
            <input required type="email" id="email" name="email" autoComplete="given-email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="w-full mt-3">
          <label htmlFor="password" className="text-sm font-semibold leading-6 text-gray-100">Password</label>
          <div className="mt-1 w-full">
            <input required type="password" id="password" name="password" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="w-full mt-3">
          <label htmlFor="password" className="text-sm font-semibold leading-6 text-gray-100">Birthday</label>
          <div className="mt-1 w-full">
            <input required type="date" id="birthday" name="birthday" autoComplete="giver-birthday" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="w-full mt-6">
          <button type="submit" className="bg-green-500 text-gray-100 w-full font-bold cursor-pointer rounded-md px-3.5 py-2">Send</button>
        </div>
      </form>
    </div>
  )
}
