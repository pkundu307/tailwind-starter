function Form() {
  return (
    <div className="container mx-auto items-center p-6">
      <h3 className="font-semibold text-red-950">Give me a message</h3>
      <form className="bg-gray-100 p-5 rounded-lg shadow-xl">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3"
            id="name"
            type="text"
            placeholder="Your Name"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
           
          >
            email
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3"
            id="name"
            type="text"
            placeholder="Your Email"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
  
          >
            phone
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3"
            id="name"
            type="text"
            placeholder="Your Contact no."
          />
          <button className="bg-blue-500 rounded-xl py-2 px-4">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
