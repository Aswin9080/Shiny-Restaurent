

import { useState } from "react"
import Navbar from "../Navbars/navbar"
import Tablecollection from "./tablecollection"
import Tablemenu from "./tablemenu"
function Family(props) {

    const {tableselect, settableselect}=props

    const [tables, settables] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Family Table",
            tableno: 1
        },
        {
            id: 2,
            image:"https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Family Table",
            tableno: 2
        },

        {
            id: 3,
            image:"https://images.pexels.com/photos/5638612/pexels-photo-5638612.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Family Table",
            tableno: 3
        },

        {
            id: 4,
            image:"https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Family Table",
            tableno: 4
        },

        {
            id: 5,
            image:"https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Family Table",
            tableno: 5
        },
        {
            id: 6,
            image:"https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Family Table",
            tableno: 6
        },
        {
            id: 7,
            image:"https://images.pexels.com/photos/5779170/pexels-photo-5779170.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Family Table",
            tableno: 7
        },
        {
            id: 8,
            image:"https://images.pexels.com/photos/8841471/pexels-photo-8841471.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Family Table",
            tableno: 8
        },
        {
            id: 9,
            image:"https://images.pexels.com/photos/3184177/pexels-photo-3184177.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Family Table",
            tableno: 9
        },
        {
            id: 10,
            image:"https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Family Table",
            tableno: 10
        },
        {
            id: 11,
            image:"https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Family Table",
            tableno: 11
        },
        {
            id: 12,
            image:"https://images.pexels.com/photos/6925357/pexels-photo-6925357.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Family Table",
            tableno: 12
        },

        {
            id: 13,
            image:"https://images.pexels.com/photos/5638675/pexels-photo-5638675.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Family Table",
            tableno: 13
        },
        {
            id: 14,
            image:"https://images.pexels.com/photos/5638676/pexels-photo-5638676.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Family Table",
            tableno: 14
        },
        {
            id: 15,
            image:"https://images.pexels.com/photos/5638828/pexels-photo-5638828.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Family Table",
            tableno: 15
        },

        {
            id: 16,
            image:"https://images.pexels.com/photos/5847679/pexels-photo-5847679.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Family Table",
            tableno: 16
        }
    ])
    return (
        <div className="bg-white text-black">
            <div className="sticky top-0 z-50">
                <Navbar></Navbar>
            </div>
            <div className="sticky top-14 z-40">
                <Tablemenu></Tablemenu>
            </div>

            <Tablecollection tables={tables} tableselect={tableselect} settableselect={settableselect}></Tablecollection>

            
        </div>
    )
}

export default Family