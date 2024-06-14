import { useState } from "react"
import Foodcollection from "../foodscollection";

function Coffee(props) {
    const  {foodselect,setFoodSelect}=props

    const [centerf, setcenterf] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/984162/pexels-photo-984162.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            content: "20% Off of the Coffee"
        }
    ])

    const [spl, setspl] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Cheese Coffee",
            price:200 ,
            quantity:1


        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Tasty Coffee",
            price: 200,
            quantity:1


        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Zinger Coffee",
            price: 200,
            quantity:1


        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Sweet Coffee",
            price: 200,
            quantity:1


        }

    ])

    const [offer, setoffer] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Offer Coffee"
        }
    ])

    const [showimage, setshowimage] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/1710023/pexels-photo-1710023.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Coffee",
            price: 110,
            quantity:1

        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/704813/pexels-photo-704813.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Coffee",
            price: 130,
            quantity:1

        },

        {
            id: 3,
            image: "https://images.pexels.com/photos/302890/pexels-photo-302890.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Coffee",
            price: 150,
            quantity:1

        },

        {
            id: 4,
            image: "https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Coffee",
            price: 170,
            quantity:1

        },

        {
            id: 5,
            image: "https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Coffee",
            price: 190,
            quantity:1

        },

        {
            id: 6,
            image: "https://images.pexels.com/photos/437716/pexels-photo-437716.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Coffee",
            price: 210,
            quantity:1

        },

        {
            id: 7,
            image: "https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Coffee",
            price: 240,
            quantity:1

        },

        {
            id: 8,
            image: "https://images.pexels.com/photos/2128109/pexels-photo-2128109.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Coffee",
            price: 290,
            quantity:1

        },

        {
            id: 9,
            image: "https://images.pexels.com/photos/1627933/pexels-photo-1627933.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Coffee",
            price: 330,
            quantity:1

        },

        {
            id: 10,
            image: "https://images.pexels.com/photos/428310/pexels-photo-428310.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Coffee",
            price: 340,
            quantity:1

        },

        {
            id: 11,
            image: "https://images.pexels.com/photos/2910874/pexels-photo-2910874.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Coffee",
            price: 420,
            quantity:1

        },

        {
            id: 12,
            image: "https://images.pexels.com/photos/1443384/pexels-photo-1443384.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Coffee",
            price: 450,
            quantity:1

        }
    ])

    const name = "Coffee"
    const splname = "COFfEE"
    const Splfoodsymbol = "AiOutlineCoffee"
    const symbol = "AiOutlineCoffee"
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

export default Coffee