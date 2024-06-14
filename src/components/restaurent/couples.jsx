

import { useState } from "react"
import Navbar from "../Navbars/navbar"
import Tablecollection from "../restaurent/tablecollection"
import Tablemenu from "../restaurent/tablemenu"
function Couples(props) {
     
    const {tableselect, settableselect}=props
    const [tables, settables] = useState([
        {
            id: 1,
            image: "https://img.freepik.com/free-photo/elegant-couple-clinking-with-glasses-having-dinner_23-2147736705.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 1
        },
        {
            id: 2,
            image: "https://img.freepik.com/premium-photo/couple-is-having-dinner-together_1218867-20228.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 2
        },

        {
            id: 3,
            image: "https://img.freepik.com/premium-photo/couple-dinning-luxury-eatery-dinner-concept-generative-ai_3535-5810.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 3
        },

        {
            id: 4,
            image: "https://img.freepik.com/premium-photo/photo-young-lovely-couple-having-dinner-beautiful-restaurant_763111-58767.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 4
        },

        {
            id: 5,
            image: "https://img.freepik.com/free-photo/young-couple-having-romantic-dinner_23-2148012423.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 5
        },
        {
            id: 6,
            image: "https://img.freepik.com/free-photo/couple-having-fun-night_23-2149236925.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 6
        },
        {
            id: 7,
            image: "https://img.freepik.com/premium-photo/creative-social-media-fashion-food-ads-poster-design-generative-ai_870512-1263.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 7
        },
        {
            id: 8,
            image: "https://img.freepik.com/free-photo/couple-winter_1157-7431.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 8
        },
        {
            id: 9,
            image: "https://img.freepik.com/free-photo/portrait-romantic-couple_155003-6591.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 9
        },
        {
            id: 10,
            image: "https://img.freepik.com/free-photo/couple-eating-salmon-dish-bowl-restaurant_23-2150461476.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 10
        },
        {
            id: 11,
            image: "https://img.freepik.com/premium-photo/leisure-technology-date-people-holidays-concept-happy-couple-having-dinner-taking-selfie-by-smartphone-restaurant_380164-142175.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 11
        },
        {
            id: 12,
            image: "https://img.freepik.com/free-photo/medium-shot-people-enyoing-dinner-party_23-2150717872.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 12
        },

        {
            id: 13,
            image: "https://img.freepik.com/free-photo/low-angle-woman-male-restaurant_23-2148395466.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 13
        },
        {
            id: 14,
            image: "https://img.freepik.com/free-photo/elegant-couple-clinking-with-glasses-having-dinner_23-2147736705.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 14
        },
        {
            id: 15,
            image: "https://img.freepik.com/premium-photo/couple-is-having-dinner-together_1218867-20228.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 15
        },

        {
            id: 16,
            image: "https://img.freepik.com/premium-photo/couple-dinning-luxury-eatery-dinner-concept-generative-ai_3535-5810.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 16
        },

        {
            id: 17,
            image: "https://img.freepik.com/premium-photo/photo-young-lovely-couple-having-dinner-beautiful-restaurant_763111-58767.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 17
        },

        {
            id: 18,
            image: "https://img.freepik.com/free-photo/young-couple-having-romantic-dinner_23-2148012423.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 18
        },
        {
            id: 19,
            image: "https://img.freepik.com/free-photo/couple-having-fun-night_23-2149236925.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 19
        },
        {
            id: 20,
            image: "https://img.freepik.com/premium-photo/creative-social-media-fashion-food-ads-poster-design-generative-ai_870512-1263.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Couples Table",
            tableno: 20
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

export default Couples