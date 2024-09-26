

function ImageGallery() {

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9z7uiMin0oDv5O9tWi9HS9IPs1nhMRGitzA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtY7W_w8fV0Ig4GvmvmpXJthfo2o4z627zmw&s",
    "https://images.squarespace-cdn.com/content/v1/5c439fd8266c07ff148f5765/1600913493204-DU7B9IBR2UZ4XNNKDW8P/Top+20+Ecommerce+App+Inspiration+Ideas+%231-2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_O1pP_XuzPnD-8EGizUZ6CgNjcIh6plrmXQ&s",
    "https://www.pipelinersales.com/wp-content/uploads/2020/06/pipeliner-crm-mobile-opportunities-leads-1741.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtY7W_w8fV0Ig4GvmvmpXJthfo2o4z627zmw&s",
    "https://images.squarespace-cdn.com/content/v1/5c439fd8266c07ff148f5765/1600913493204-DU7B9IBR2UZ4XNNKDW8P/Top+20+Ecommerce+App+Inspiration+Ideas+%231-2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_O1pP_XuzPnD-8EGizUZ6CgNjcIh6plrmXQ&s",
];

  return (
    <>
    <div className="container p-9 shadow-amber-200">
         <h3 className="font-semibold text-3xl">My previous projects</h3>
         </div>
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-6">

     {
        images.map((image, index) => (
            <div key={index}>
                <img src={image} alt="" className="w-full h-48 object-cover rounded-lg shadow-xl  hover:shadow-2xl hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:shadow-orange-600" />
            </div>
        ))
     }
    </div>
    </>
  )
}

export default ImageGallery
