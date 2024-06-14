import { useState } from "react";
import Navbar from "../Navbars/navbar";
import '../restaurent/restaurent.css'
function Tablecollection(props) {
    const [bookedTableId, setBookedTableId] = useState(null);
    const {tableselect,settableselect}=props;
    function booktable(item) {
        setBookedTableId(item.id);
        settableselect(item)
    }

    const tables = props.tables;
    return (
        <div>
            <div className="Table border m-10 gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {tables.map((item, index) => (
                    <div key={index} className="relative table--content">
                        <img src={item.image} alt={item.name} className="w-full h-[300px] md:h-[200px] md:w-[300px] lg:h-[300px] lg:w-[400px] tableimg" />
                        <div 
                            className={`absolute top-4 left-4 ${bookedTableId === item.id ? 'bg-green-400' : 'bg-yellow-400'} rounded-full cursor-pointer`}
                            onClick={() => booktable(item)}
                        >
                            <p className="px-2 text-black">{item.tableno}</p>
                        </div>
                        
                    </div>
                    
                ))}
            </div>
            <div className="text-center flex justify-center gap-9 m-10 bg-slate-600">
                <div className="space-y-4">
                    <p className="font-serif text-white">YOU CONFORM THE TABLE AND GO TO ORDER THE FOOD !!!!!!!!!!!!</p>
                    <button className="bg-red-300 p-1 rounded">Conform Table</button>
                </div>
            </div>
        </div>
    );
}

export default Tablecollection;
