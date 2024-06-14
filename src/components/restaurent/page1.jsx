
import { CiFacebook, CiInstagram, CiYoutube, CiTwitter } from "react-icons/ci";
import { FaBowlFood } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import './restaurent.css';
import Page2 from "../restaurent/page2";
import Page3 from "../restaurent/page3";
import Page4 from "../restaurent/page4";
import Fotter from "../restaurent/fotter";
import { useState } from "react";


const marqueeimage = [
    "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://img.freepik.com/premium-photo/beautiful-food-photo-is-must-everyday-work-food-ai-generated-best-wonderful-photo-food_1028782-314632.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
    "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/827516/pexels-photo-827516.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/7799796/pexels-photo-7799796.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/3656118/pexels-photo-3656118.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1578293/pexels-photo-1578293.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/20476113/pexels-photo-20476113/free-photo-of-offering-turkish-delight-sweets.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/262882/pexels-photo-262882.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1205648/pexels-photo-1205648.jpeg?auto=compress&cs=tinysrgb&w=300",
];

const marqueeimage1 = [
    "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://img.freepik.com/premium-photo/beautiful-food-photo-is-must-everyday-work-food-ai-generated-best-wonderful-photo-food_1028782-314632.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
    "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/827516/pexels-photo-827516.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/7799796/pexels-photo-7799796.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/3656118/pexels-photo-3656118.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1578293/pexels-photo-1578293.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/20476113/pexels-photo-20476113/free-photo-of-offering-turkish-delight-sweets.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600",
]


function Page1() {
   

    return (
        <div>
            <div className="ml-10 mr-10 mt-20 bg-white text-black">
                <div className="page1 border-2 border-gray-200">
                    <div className="flex justify-center items-center relative">
                        <div className="page1__header bg-white -top-8">
                            <h1 className="page1__header-h1 border-2 border-black p-2 rounded-md">.</h1>
                        </div>
                        <div className="p-10 pt-20">
                            <div className="grid gap-10 lg:grid-cols-2">
                                <div className="bg-red-300 min-h-[500px] relative">
                                    <img src='https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600' className="absolute top-0 w-[100%] h-[100%]" alt="Background" />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-400 rounded-3xl">

                                        <div className="text-center p-5 cursor-pointer">
                                            <a href="https://www.youtube.com/embed/SXJqEnauNaY?si=_Qs2cPUWZXGAE5zZ"><FaPlay></FaPlay></a>
                                        </div>

                                    </div>
                                </div>
                                <div className="space-y-4 lg:pt-5 lg:pb-10" id="About">
                                    <div className="p-10 flex flex-col gap-5" >
                                        <div className="flex items-center gap-3">
                                            <h1 className="w-[30px] h-[1px] bg-orange-400"></h1>
                                            <h1>ABOUT US</h1>
                                        </div>
                                        <div className="space-y-5">
                                            <h1 className="font-serif font-bold">We invite you to visit our restaurant</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod in minus cupiditate autem eligendi nemo quia nisi at, fugiat eaque? Cumque harum officia, laborum dolorum architecto quisquam vero maxime doloribus libero reiciendis quod delectus quos sit at itaque, adipisci quidem ipsa accusamus aut, deleniti sint veritatis fugiat quaerat! Quibusdam aspernatur, consectetur, adipisci quae, totam tenetur blanditiis facilis atque fugit reprehenderit sit inventore neque veritatis ab! Aut consequatur, asperiores iste veniam mollitia eum quod accusamus veritatis eligendi deleniti placeat rerum recusandae omnis dolorem nisi voluptas, distinctio atque dolore tempora repellat perferendis quo et! Voluptatum tempore excepturi nemo recusandae accusamus laborum perferendis!</p>
                                            <div className="flex items-center space-x-5">
                                                <button className="bg-yellow-400 p-2 rounded-md">READ MORE</button>
                                                <div className="flex space-x-2">
                                                    <CiFacebook />
                                                    <CiInstagram />
                                                    <CiYoutube />
                                                    <CiTwitter />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 mt-10">
                <h1 className="text-3xl font-bold tracking-wider flex justify-center items-center gap-2.5">
                    SPECIAL DISH <FaBowlFood className="inline-block text-red-400" />
                </h1>
                <marquee className="space-x-5" direction="left">
                    {marqueeimage.map((item, index) => (
                        <span key={index} className="inline-block mx-2">
                            <img src={item} className="w-[100px] h-[100px]" alt="marquee item" />
                        </span>
                    ))}
                </marquee>
                <marquee className="space-x-5" direction="right">
                    {marqueeimage1.map((item, index) => (
                        <span key={index} className="inline-block mx-2">
                            <img src={item} className="w-[100px] h-[100px] rounded" alt="marquee item" />
                        </span>
                    ))}
                </marquee>
            </div>
            <div className="m-10 bg-white text-black">
                <div className="p-10">
                    <Page2 />
                </div>
                <div className="px-10 text-2xl">
                    <h1 className="w-full ml-2 pr-2 overflow-hidden">
                        ..................................................................................................................................................................................................................................................................................................................
                    </h1>
                </div>
                <div className="p-10">
                    <Page3 />
                </div>
                <div className="p-10">
                    <Page4 />
                </div>
                
            </div>
            <div className="p-10 border-2 m-10  text-white rounded-xl">
                    <Fotter />
                </div>
        </div>
    );
}

export default Page1;

