
const images = ["https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg"]
function Page3() {
    return (
        <div className="bg-red space-y-10 gap-5 mt-10 lg:flex ">
            <div className="workinghour bg-red-300 w-[100%] lg:w-[900px] relative">
                <img src={images} className="workinghour__img w-full h-[400px] object-cover "></img>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center  text-white space-y-5">
                    <h1 className="w-[40px] h-[4px] bg-blue-400 inline-block"></h1>
                    <h1 className="text-xl">ABOUT US</h1>
                    <h1 className="text-3xl">Working hours</h1>

                    <p className="font-serif opacity-70">Rolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
                    <div className="bg-yellow-400 text-black">
                        <button className="p-2 text-2xl">Reservation</button>
                    </div>
                    <button className="font-bold">CONTACT US</button>

                </div>

            </div>

            <div className="flex justify-center items-center  text-xl lg:text-2xl font-serif   space-y-10 lg:w-[500px]">
                <div className="text-center space-y-5">
                    <div className="space-y-2 ">
                        <h1>Sunday</h1>
                        <div>
                            <h1>09<span className="text-orange-600">:</span>00</h1>
                            <h1>22<span className="text-orange-600">:</span>00</h1>
                        </div>
                    </div>

                    <div className="space-y-2 ">
                        <h1>FRIDAY TO SATURDAY</h1>
                        <div>
                            <h1>11 <span className="text-orange-600">:</span> 00</h1>
                            <h1>19 <span className="text-orange-600">:</span> 00</h1>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Page3