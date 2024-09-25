

function Card() {
    const cards = [
        {title: 'Web Development', description: 'Created responsive and dynamic websites using React, Tailwind, and modern web technologies.',Link:"https://mern-ecommerce-ebon.vercel.app/login"},
        {title: 'Full-Stack Projects', description: 'Developed end-to-end solutions, integrating Node.js, Express, MongoDB, and React.',Link:"https://data-visualization-backend.vercel.app"},
        {title: 'E-commerce Platform', description: 'Built a full-featured e-commerce platform with cart, product listing, and payment integration.'},
        {title: 'API Development', description: 'Designed and implemented RESTful APIs, focusing on performance, security, and scalability.'},
        {title: 'UI/UX Design', description: 'Created visually appealing and user-centric designs using Figma and Tailwind CSS.'},
        {title: 'Cloud Integration', description: 'Integrated cloud services like AWS S3 for scalable file storage and Google OAuth for secure authentication.'},
      ];
      const colors = [
        '#FF6F61',  // Coral
        '#6B5B95',  // Royal Purple
        '#88B04B',  // Lime Green
        '#F7CAC9',  // Pale Pink
        '#92A8D1',  // Soft Blue
        '#FFA07A',  // Light Salmon
      ];
      
      
      
  return (
    <div className="container mx-auto grid md:grid-cols-3 py-10 m-1 p-3 gap-8 ">
        {cards.map((card,index)=>
        (           
            <div key={index} className="shadow-lg p-6 rounded-lg" style={{backgroundColor:`${colors[index]}`}}>
             <a href={card.Link}>
                <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
                </a>
           <p>{card.description}{index}</p>
            </div>
        ))}
      
    </div>
  )
}

export default Card
