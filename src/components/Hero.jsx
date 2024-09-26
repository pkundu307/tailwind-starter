import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Hero() {
  const notify = () => toast.success("We are now connected!");
  return (
  <section className="bg-gradient-to-r from-blue-800 to-purple-400 
   text-white py-20">
    <div className="container mx-auto text-center">

<h1 className="text-5xl font-bold mb-9">Welcome To My Portfolio</h1>
<p className="text-xl"> Connect With me for great Ideas</p>
<button onClick={notify} className="bg-pink-400 text-white-950
 rounded-full px-6 py-3 mt-6 border-b-red-600 border-b-2 
 font-extrabold">Connect</button>
    </div>
    <ToastContainer />
  </section>
  )
}

export default Hero
