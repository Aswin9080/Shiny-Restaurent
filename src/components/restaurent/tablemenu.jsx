import { Link } from "react-router-dom"

function Tablemenu() {
    return (
        <div>
            <div className="text-black  font-medium flex justify-between p-5 bg-white ml-10 mr-10 ">
                <Link to='/Couples' className="hover:bg-orange-500 cursor-pointer hover:p-1">COUPLES <span className="md:hidden">|</span></Link>
                <Link to='/Single' className="hover:bg-orange-500 cursor-pointer hover:p-1">SINGLE <span className="md:hidden">|</span></Link>
                <Link to='/Family' className="hover:bg-orange-500 cursor-pointer hover:p-1">FAMILYS <span className="md:hidden">|</span></Link>
                <Link to='/Party' className="hover:bg-orange-500 cursor-pointer hover:p-1">BIRTHDAY PARTY </Link>
            </div>
        </div>
    )
}

export default Tablemenu