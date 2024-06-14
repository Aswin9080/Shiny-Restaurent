import { useState } from "react"
import Foodcollection from "../foodscollection";

function Burger(props) {
    const  {foodselect,setFoodSelect}=props

    const [centerf, setcenterf] = useState([
        {
            id: 1,
            image: "https://img.freepik.com/free-photo/view-delicious-burger-with-buns-cheese_23-2151281605.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "20% Off of the burger",
            quantity:1
        }
    ])

    const [spl, setspl] = useState([
        {
            id: 1,
            image: "https://img.freepik.com/free-photo/view-delicious-burger-with-buns-cheese_23-2151281605.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Cheese burger",
            price: 200,
            quantity:1


        },
        {
            id: 2,
            image: "https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Tasty burger",
            price: 200,
            quantity:1


        },
        {
            id: 3,
            image: "https://img.freepik.com/free-photo/delicious-looking-3d-burger-with-simple-background_23-2150914873.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Zinger burger",
            price: 200,
            quantity:1


        },
        {
            id: 4,
            image: "https://img.freepik.com/free-photo/delicious-looking-3d-burger-with-simple-background_23-2150914663.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Mutton burger",
            price: 200,
            quantity:1

        }

    ])

    const [offer, setoffer] = useState([
        {
            id: 1,
            image: "https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Offer Burger"
        }
    ])

    const [showimage, setshowimage] = useState([
        {
            id: 1,
            image: "https://img.freepik.com/free-vector/realistic-burger-illustration_52683-153865.jpg?size=338&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Egg Burger",
            price: 110,
            quantity:1

        },
        {
            id: 2,
            image: "https://img.freepik.com/free-vector/delicious-burger_23-2147514645.jpg?size=338&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Egg Burger",
            price: 130,
            quantity:1

        },

        {
            id: 3,
            image: "https://img.freepik.com/premium-vector/realistic-burger-vector-art-illustration_984715-46.jpg?size=338&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Egg Burger",
            price: 150.,
            quantity:1

        },

        {
            id: 4,
            image: "https://img.freepik.com/free-vector/realistic-burger-illustration_23-2151151678.jpg?size=338&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Egg Burger",
            price: 170,
            quantity:1

        },

        {
            id: 5,
            image: "https://img.freepik.com/premium-vector/handmade-burger-image_1119747-5522.jpg?size=338&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Egg Burger",
            price: 190,
            quantity:1

        },

        {
            id: 6,
            image: "https://img.freepik.com/free-vector/realistic-burger-illustration_52683-153859.jpg?size=338&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Egg Burger",
            price: 210,
            quantity:1

        },

        {
            id: 7,
            image: "https://img.freepik.com/free-vector/black-background-with-tasty-burger-flat-design_23-2147626946.jpg?size=338&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Egg Burger",
            price: 240,
            quantity:1

            
        },

        {
            id: 8,
            image: "https://img.freepik.com/free-vector/delicious-burger-ingredients-with-flat-design_23-2147799727.jpg?size=338&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Egg Burger",
            price: 290,
            quantity:1

        },

        {
            id: 9,
            image: "https://img.freepik.com/free-photo/view-delicious-burger-with-buns-cheese_23-2151281605.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Egg Burger",
            price: 330,
            quantity:1

        },

        {
            id: 10,
            image: "https://img.freepik.com/free-photo/view-delicious-burger-with-buns-cheese_23-2150887694.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Egg Burger",
            price: 340,
            quantity:1

        },

        {
            id: 11,
            image: "https://img.freepik.com/free-photo/delicious-looking-3d-burger-with-simple-background_23-2150914663.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Egg Burger",
            price: 420,
            quantity:1

        },

        {
            id: 12,
            image: "https://img.freepik.com/free-photo/delicious-looking-3d-burger-with-simple-background_23-2150914853.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
            content: "Egg Burger",
            price: 450,
            quantity:1

        }
    ])

    const name = "Burger"
    const splname = "BURGER"
    const Splfoodsymbol = "FaHamburger"
    const symbol = "CiBurger"
    const about = `The History and Evolution of the Burger
                   The hamburger, commonly known as the burger, is a culinary icon with a rich history that spans over a century. Its journey from a simple minced meat dish to a global fast-food phenomenon is a testament to its versatility and universal appeal.
                    Early Beginnings The origins of the burger can be traced back to the 19th century. 
                    The concept of a minced meat patty has deep historical roots, with influences from various cultures. In medieval times, the Tartars, a nomadic group from Central Asia, were known for their raw, minced meat dishes, which they carried with them on long journeys. This method of preparing meat spread to Europe, where it evolved into different forms.
                    In the 1800s, Hamburg, Germany, was known for its Hamburg steak, a seasoned, minced beef patty that was often served with onions and breadcrumbs. German immigrants brought this dish to the United States, where it began to take on a new form.
                    The American Evolution
                    The transition from Hamburg steak to the modern hamburger took place in the late 19th and early 20th centuries in the United States. The 1904 St. Louis World's Fair is often credited with popularizing the hamburger. Several vendors at the fair served Hamburg steaks between slices of bread, making them easy to eat on the go. This convenience factor was crucial in the hamburger's rise to fame.
                    The true revolution in the burger industry came with the establishment of White Castle in 1921. Founded by Billy Ingram and Walter Anderson in Wichita, Kansas, White Castle was the first fast-food chain to specialize in hamburgers. They introduced a standardized method of preparing and serving burgers, ensuring consistency and affordability. White Castle's success demonstrated the potential of the hamburger as a fast-food staple, paving the way for future burger chains.
                    The Modern Burger: From Fast Food to Gourmet
                    Over the years, the burger has undergone significant transformations, evolving from a simple fast-food item to a gourmet delicacy. This evolution has been driven by changes in consumer tastes, culinary innovation, and the desire for higher-quality ingredients.
                    Fast Food Icons
                    Following White Castle's success, numerous fast-food chains emerged, each contributing to the burger's popularity. McDonald's, founded in 1940 by Richard and Maurice McDonald, and later expanded by Ray Kroc, played a pivotal role in making the hamburger a global phenomenon. The introduction of the drive-thru, efficient service models, and consistent quality made McDonald's a household name.
                    Burger King, founded in 1954, also became a major player in the fast-food industry, known for its flame-grilled burgers and the iconic Whopper. Wendy's, established in 1969, introduced the concept of fresh, never frozen beef, further elevating the standard for fast-food burgers.`

    return (
        <div>
            <Foodcollection centerf={centerf} spl={spl} offer={offer} showimage={showimage} name={name} splname={splname} Splfoodsymbol={Splfoodsymbol} symbol={symbol} about={about} foodselect={foodselect} setFoodSelect={setFoodSelect} ></Foodcollection>
        </div>
    )
}

export default Burger