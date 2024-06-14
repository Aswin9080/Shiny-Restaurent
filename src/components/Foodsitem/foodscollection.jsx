import { useEffect, useState } from 'react';
import '../Foodsitem/foodcollection.css';
import { FaHamburger, FaRegHeart } from "react-icons/fa";
import { GiSandwich, GiRoastChicken, GiManualJuicer } from "react-icons/gi";
import { HiOutlineCake } from "react-icons/hi2";
import { AiOutlineCoffee } from "react-icons/ai";
import { IoFastFood } from "react-icons/io5";
import { TbSoupFilled } from "react-icons/tb";
import { CiBurger, CiPizza } from "react-icons/ci";
import Fotter from '../restaurent/fotter';
import Navbar from "../Navbars/navbar";
import { Link } from 'react-router-dom';

const iconMap = {
    FaHamburger: FaHamburger,
    FaRegHeart: FaRegHeart,
    CiBurger: CiBurger,
    GiSandwich: GiSandwich,
    TbSoupFilled: TbSoupFilled,
    CiPizza: CiPizza,
    GiRoastChicken: GiRoastChicken,
    IoFastFood: IoFastFood,
    AiOutlineCoffee: AiOutlineCoffee,
    GiManualJuicer: GiManualJuicer,
    HiOutlineCake: HiOutlineCake
};

function Foodcollection(props) {
    const { centerf, spl, offer, showimage, name, splname, Splfoodsymbol, symbol, about,foodselect,setFoodSelect } = props;

    const SplfoodsymbolIcon = iconMap[Splfoodsymbol] || null;
    const SymbolIcon = iconMap[symbol] || null;

    const [selectedFoodIds, setSelectedFoodIds] = useState([]);

    function toggleFoodSelection(id, product) {
        const newSelectedFoodIds = [...selectedFoodIds];
        const index = newSelectedFoodIds.indexOf(id);
        if (index > -1) {
            newSelectedFoodIds.splice(index, 1);
        } else {
            newSelectedFoodIds.push(id);
            setFoodSelect([...foodselect,product]);
        }
        setSelectedFoodIds(newSelectedFoodIds);
    }
   console.log('foodselect',foodselect)
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className='menufood text-black bg-gray-200'>
                <div className='menufood--menu flex justify-between overflow-auto gap-10 p-5 font-mono no-scrollbar'>
                    <Link to="/Burger" className='menufood--menu'>Burger</Link>
                    <Link to="/Sandwich">Sandwich</Link>
                    <Link to="/Soup">Soup</Link>
                    <Link to="/Pizza">Pizza</Link>
                    <Link to="/Chicken">Chicken</Link>
                    <Link to="/Lunch">Breakfast</Link>
                    <Link to="/Coffee">Coffee</Link>
                    <Link to="/Juice">Juice</Link>
                    <Link to="/Snaks">Snaks</Link>
                </div>
            </div>
            <div className="text-black">
                <div className="md:m-10 grid md:grid-cols-3 md:justify-between md:items-center border-2">
                    <div className="spinnerfoodleft flex justify-center items-center bg-red-300">
                        <div className="w-[200px] h-[200px]">
                            <p className="bg-gradient-to-r from-pink-500 hover:to-yellow-500 rounded-full h-full p-10 w-full flex justify-center items-center font-bold text-2xl">{name} World</p>
                        </div>
                    </div>

                    <div className="w-[100%]">
                        {centerf.map((item, index) => (
                            <div key={index} className="w-full">
                                <img src={item.image} className="w-full md:h-[300px] object-contain lg:foodcollection__cen--img" alt={item.content} />
                            </div>
                        ))}
                    </div>

                    <div className="spinnerfoodright flex justify-center items-center bg-red-300">
                        <div className="w-[200px] h-[200px]">
                            <p className="bg-gradient-to-r from-pink-500 hover:to-yellow-500 rounded-full h-full p-10 w-full flex justify-center items-center font-bold text-2xl">{name} World</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white mt-10'>
                    <div className='m-10 p-5 space-y-7'>
                        <div className='flex items-center space-x-5'>
                            <h1 className='font-serif text-2xl'>SPECIAL {splname}</h1>
                            {SplfoodsymbolIcon && <SplfoodsymbolIcon className='text-red-600' />}
                        </div>
                        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                            {spl.map((item, index) => (
                                <div key={index} className='relative'>
                                    <img src={item.image} className="h-[300px] w-full md:h-[200px] md:w-[300px] lg:h-[300px] lg:w-[400px] foodimg" alt={item.content} />
                                    <div className='absolute top-3 right-4 bg-white text-2xl rounded-full p-2'>
                                        <FaRegHeart
                                            className={`cursor-pointer ${selectedFoodIds.includes(item.id) ? 'bg-red-700' : ''}`}
                                            onClick={() => toggleFoodSelection(item.id, item)}
                                        />
                                    </div>
                                    <div className='absolute bottom-5 left-[30%] text-white text-2xl font-mono'>
                                        <p className='animate-bounce font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-500 to-blue-500'>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='space-y-7 border md:flex md:space-x-8 md:max-h-[550px] p-5'>
                            <div className='md:flex md:justify-center md:items-center'>
                                <div className='space-y-7'>
                                    <h1 className='font-serif text-2xl md:w-[300px]'>OFFER OF THE DAY</h1>
                                    {offer.map((item, index) => (
                                        <div key={index} className='border relative'>
                                            <img src={item.image} className="w-full max-h-[300px] object-cover" alt={item.content} />
                                            <div className='offer__image--content absolute text-white bottom-10 left-10'>
                                                <h1><span className='text-4xl'>20%</span><span className='text-orange-400'>Offer Today Only</span></h1>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='w-full max-h-[300px] md:min-h-[300px] overflow-scroll no-scrollbar'>
                                <p className='mt-10 flex'>{about}</p>
                            </div>
                        </div>

                        <div className='space-y-5'>
                            <h1 className='font-serif text-2xl'>Burger</h1>
                            <div className="grid grid-cols-1  gap-5 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
                                {showimage.map((item, index) => (
                                    <div key={index} className="show__content relative p-4">
                                        <div className='show__content'>
                                            <img src={item.image} className='show__content--img h-[200px] w-full object-cover' alt={item.content} />
                                        </div>
                                        <div className='text-center font-serif mt-2'>
                                            <p>${item.price}</p>
                                        </div>
                                        <div className='absolute top-5 right-5 bg-white rounded-full p-2'>
                                            {SymbolIcon && <SymbolIcon className={`cursor-pointer ${selectedFoodIds.includes(item.id) ? 'bg-red-700' : ''}`} onClick={() => toggleFoodSelection(item.id,item)} />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='bg-black text-white'>
                            <Fotter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foodcollection;
