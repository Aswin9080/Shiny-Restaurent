
import { useState } from "react"
import Navbar from "../Navbars/navbar"
import Tablecollection from "./tablecollection"
import Tablemenu from "./tablemenu"
function Party(props) {
    const { tableselect, settableselect } = props

    const [tables, settables] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Party Table",
            tableno: 1
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/5638612/pexels-photo-5638612.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Party Table",
            tableno: 2
        },

        {
            id: 3,
            image: "https://images.pexels.com/photos/4819717/pexels-photo-4819717.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Party Table",
            tableno: 3
        },

        {
            id: 4,
            image: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Party Table",
            tableno: 4
        },

        {
            id: 5,
            image: "https://images.pexels.com/photos/5779170/pexels-photo-5779170.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Party Table",
            tableno: 5
        },
        {
            id: 6,
            image: "https://images.pexels.com/photos/3184177/pexels-photo-3184177.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Party Table",
            tableno: 6
        },
        {
            id: 7,
            image: "https://images.pexels.com/photos/15937640/pexels-photo-15937640/free-photo-of-layer-cake-and-flower-decorations-on-a-table-at-a-party.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Party Table",
            tableno: 7
        },
        {
            id: 8,
            image: "https://images.pexels.com/photos/4577179/pexels-photo-4577179.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Party Table",
            tableno: 8
        },
        {
            id: 9,
            image: "https://images.pexels.com/photos/6858595/pexels-photo-6858595.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Party Table",
            tableno: 9
        },
        {
            id: 10,
            image: "https://images.pexels.com/photos/9703867/pexels-photo-9703867.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Party Table",
            tableno: 10
        },
        {
            id: 11,
            image: "https://images.pexels.com/photos/4577408/pexels-photo-4577408.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Party Table",
            tableno: 11
        },
        {
            id: 12,
            image: "https://images.pexels.com/photos/5638750/pexels-photo-5638750.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Party Table",
            tableno: 12
        },

        {
            id: 13,
            image: "https://images.pexels.com/photos/4997875/pexels-photo-4997875.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Party Table",
            tableno: 13
        },
        {
            id: 14,
            image: "https://images.pexels.com/photos/12876497/pexels-photo-12876497.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Party Table",
            tableno: 14
        },
        {
            id: 15,
            image: "https://images.pexels.com/photos/3171823/pexels-photo-3171823.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Party Table",
            tableno: 15
        },

        {
            id: 16,
            image: "https://images.pexels.com/photos/7100327/pexels-photo-7100327.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Party Table",
            tableno: 16
        }
      
    ])
    return (
        <div className="bg-white">
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

export default Party