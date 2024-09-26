
function Testimonial() {
    const feedback = [
        {name: 'john',feedback:'amazing service',profile_pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGO35iq38pW5EgFJN_9x6wIZOBQvw_rCaaQ&s"},
        {name: 'jane', feedback:'great support',profile_pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGO35iq38pW5EgFJN_9x6wIZOBQvw_rCaaQ&s"},
        {name: 'mike', feedback:'friendly and helpful',profile_pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGO35iq38pW5EgFJN_9x6wIZOBQvw_rCaaQ&s"},
        {name: 'sarah', feedback:'excellent product',profile_pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGO35iq38pW5EgFJN_9x6wIZOBQvw_rCaaQ&s"},
        {name: 'laura', feedback:'loved the website and customer service',profile_pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGO35iq38pW5EgFJN_9x6wIZOBQvw_rCaaQ&s"},
        {name: 'bob', feedback:'the best ever',profile_pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGO35iq38pW5EgFJN_9x6wIZOBQvw_rCaaQ&s"},
        {name: 'laura', feedback:'loved the website and customer service',profile_pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGO35iq38pW5EgFJN_9x6wIZOBQvw_rCaaQ&s"},
        {name: 'bob', feedback:'the best ever',profile_pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGO35iq38pW5EgFJN_9x6wIZOBQvw_rCaaQ&s"},
    ]
  return (
    <div className="container mx-auto py-10">
         <div className="container p-9 shadow-amber-200">
         <h3 className="font-semibold text-3xl">My Clients reaction</h3>
         </div>
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-6">

      {
        feedback.map((item, index) => (
            <div key={index} >
          <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
            <img className="w-20 h-20 rounded-full object-cover" src={item.profile_pic} alt="Profile Pic"/>
            <h3 className="mt-4 text-xl font-bold">{item.name}</h3>
            <p className="text-gray-600 text-sm">{item.feedback}</p>
          </div>
          </div>
        ))
      }
     </div>
    </div>
  )
}

export default Testimonial
