
import { useState, useEffect } from 'react';
import Navbar from '../../Navbars/navbar';
import { IoAddCircleOutline } from "react-icons/io5";
import { GrFormSubtract } from "react-icons/gr";
function Billing(props) {
    //const navigate = useNavigate();
    const { foodselect, setFoodSelect, tableselect, settableselect } = props
    const [totals, setTotals] = useState([]);
    const [empty, setEmpty] = useState(foodselect.length === 0);


    useEffect(() => {
        const newTotals = foodselect.map(item => item.price * item.quantity);
        setTotals(newTotals);
    }, [foodselect]);

    function handledel(ids) {
        const newproduct = foodselect.filter(item => item.id !== ids.id);
        setFoodSelect(newproduct);
        setEmpty(newproduct.length === 0);
    }

    function decrease(id) {
        const updatedProducts = foodselect.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: Number(item.quantity) - Number(1) };
            }
            return item;
        });
        setFoodSelect(updatedProducts);
    }

    function increase(id) {
        const updatedProducts = foodselect.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Number(item.quantity) + Number(1) };
            }
            return item;
        });
        setFoodSelect(updatedProducts);
    }

    function handlesubmit() {
        if (tableselect.length === 0) {
            alert('please Select The Table')
        }
        else {
            console.log(tableselect.tableno)
            alert(` Your order Will be ready in 10 Minutes please wait the ${tableselect.content} ${tableselect.tableno} `)
        }
    }
    const subtotal = totals.length > 0 ? totals.reduce((acc, curr) => acc + curr, 0) : 0;

    return (
        <div>
            <Navbar />
            {empty ? (
                <div>
                    <h1 className='bg-gradient-to-r from-blue-900 to-red-100 bg-clip-text text-transparent text-center text-3xl'>
                        No one purchase it
                    </h1>

                    <marquee direction="right" className=' w-full'>
                        <div className='bg-gradient-to-r from-blue-900 to-red-400 rounded-3xl inline-block'>
                            <img src="https://media.tenor.com/qWvXPsK_1doAAAAj/english-woman.gif" className="w-[100px] h-[200px]  rounded" alt="marquee item" />
                        </div>
                    </marquee>
                </div>)
                : <div className="overflow-x-auto no-scrollbar bg-white text-black">
                    <table className="table-auto w-full">
                        <thead className=" sticky top-0">
                            <tr>
                                <th className="px-4 py-2">Product Image</th>
                                <th className="px-4 py-2">Product name</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Total</th>
                                <th className="px-4 py-2">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foodselect.map((val, index) => (
                                <tr key={val.id} className='text-center'>
                                    <td className="border px-4 py-2"><img src={val.image} className='w-[100px] m-auto' alt="productimage" /></td>
                                    <td className="border px-4 py-2">{val.content}</td>
                                    <td className="border px-4 py-2">${val.price}</td>
                                    <td className="border px-4 py-2">
                                        <div className='flex justify-center gap-3 items-center'>
                                            <GrFormSubtract onClick={() => decrease(val.id)} />
                                            <div><p>{val.quantity}</p></div>
                                            <IoAddCircleOutline onClick={() => increase(val.id)} />

                                        </div>
                                    </td>
                                    <td className="border px-4 py-2">${val.price * val.quantity}</td>
                                    <td className="border px-4 py-2 cursor-pointer">
                                        <svg onClick={() => handledel(val)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4" className="border px-28 py-2 mr-14 text-center">Total</td>
                                <td className="border px-4 py-2">${subtotal}</td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className='text-center mt-10'>
                        <button className='bg-red-900 p-2 text-white' onClick={handlesubmit}>Submit Order</button>
                    </div>
                </div>

            }
        </div>

    );
}

export default Billing
