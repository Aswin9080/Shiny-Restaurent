

import { useState } from "react"
import Navbar from "../Navbars/navbar"
import Tablecollection from "./tablecollection"
import Tablemenu from "./tablemenu"
function Single(props) {
    const {tableselect, settableselect}=props

    const [tables, settables] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Single Table",
            tableno: 1
        },
        {
            id: 2,
            image:"https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Single Table",
            tableno: 2
        },

        {
            id: 3,
            image:"https://images.pexels.com/photos/5638612/pexels-photo-5638612.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Single Table",
            tableno: 3
        },

        {
            id: 4,
            image:"https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Single Table",
            tableno: 4
        },

        {
            id: 5,
            image: "https://images.pexels.com/photos/5779170/pexels-photo-5779170.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Single Table",
            tableno: 5
        },
        {
            id: 6,
            image: "https://images.pexels.com/photos/3184177/pexels-photo-3184177.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Single Table",
            tableno: 6
        },
        {
            id: 7,
            image: "https://images.pexels.com/photos/15937640/pexels-photo-15937640/free-photo-of-layer-cake-and-flower-decorations-on-a-table-at-a-party.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Single Table",
            tableno: 7
        },
        {
            id: 8,
            image: "https://images.pexels.com/photos/4577179/pexels-photo-4577179.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Single Table",
            tableno: 8
        },
        {
            id: 9,
            image: "https://images.pexels.com/photos/6858595/pexels-photo-6858595.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Single Table",
            tableno: 9
        },
        {
            id: 10,
            image: "https://images.pexels.com/photos/9703867/pexels-photo-9703867.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Single Table",
            tableno: 10
        },
        {
            id: 11,
            image: "https://img.freepik.com/free-photo/low-angle-woman-male-restaurant_23-2148395466.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Single Table",
            tableno: 1
        },
        {
            id: 12,
            image: "https://img.freepik.com/free-photo/elegant-couple-clinking-with-glasses-having-dinner_23-2147736705.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Single Table",
            tableno: 12
        },
        {
            id: 13,
            image: "https://img.freepik.com/premium-photo/couple-is-having-dinner-together_1218867-20228.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Single Table",
            tableno: 13
        },

        {
            id: 14,
            image: "https://img.freepik.com/premium-photo/couple-dinning-luxury-eatery-dinner-concept-generative-ai_3535-5810.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Single Table",
            tableno: 14
        },

        {
            id: 15,
            image: "https://img.freepik.com/premium-photo/photo-young-lovely-couple-having-dinner-beautiful-restaurant_763111-58767.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Single Table",
            tableno: 15
        },

        {
            id: 16,
            image: "https://img.freepik.com/free-photo/young-couple-having-romantic-dinner_23-2148012423.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Single Table",
            tableno: 16
        },

       
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

export default Single