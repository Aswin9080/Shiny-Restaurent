import { useState } from "react"

const image = ["https://img.freepik.com/premium-photo/shadowy-supper-selections-black-food-photo_960396-307399.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user"]
function Page4() {
    const [newletterin,setnewletterin]=useState()

    function handlechange(evt){
        setnewletterin(evt.target.value)
    }
    return (
        <div className=" newsletter relative text-white text-center">
            <img src={image} alt="newsletter" className="w-full h-[400px] object-cover newsletterimg"></img>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4">
                <h1 className="w-[40px] h-[4px] bg-blue-400 inline-block"></h1>
                <h1 className="text-xl">NEWSLETTER</h1>
                <h1 className="text-3xl">Subscribe our newsletter</h1>

                <p className="font-serif opacity-70">Rolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
                <input value={newletterin} onChange={handlechange} placeholder="Enter your email here" className="p-2 rounded-md  text-black"></input><br></br>
                <button className="p-2  font-bold rounded-sm bg-yellow-400 text-black w-[100PX]">SUBSCRIBE</button>

            </div>
        </div>
    )
}

export default Page4