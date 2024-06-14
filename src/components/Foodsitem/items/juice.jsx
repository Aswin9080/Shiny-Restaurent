import { useState } from "react"
import Foodcollection from "../foodscollection";

function Juice(props) {
    const  {foodselect,setFoodSelect}=props

    const [centerf, setcenterf] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/110472/pexels-photo-110472.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "20% Off of the Juice"
        }
    ])

    const [spl, setspl] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/756773/pexels-photo-756773.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Fresh Juice",
            price: 200,
            quantity:1


        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/2850566/pexels-photo-2850566.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Tasty Juice",
            price: 200,
            quantity:1


        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/684963/pexels-photo-684963.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Zinger Juice",
            price: 200,
            quantity:1


        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/1018234/pexels-photo-1018234.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "lemm,on Juice",
            price: 200,
            quantity:1

        }

    ])

    const [offer, setoffer] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/1484678/pexels-photo-1484678.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Offer Burger",
            price: 200
          
        }
    ])

    const [showimage, setshowimage] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Juice",
            price: 110,
            quantity:1

        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Juice",
            price: 130,
            quantity:1

        },

        {
            id: 3,
            image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Juice",
            price: 150,
            quantity:1

        },

        {
            id: 4,
            image: "https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Juice",
            price: 170,
            quantity:1

        },

        {
            id: 5,
            image: "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Juice",
            price: 190,
            quantity:1

        },

        {
            id: 6,
            image: "https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Juice",
            price: 210,
            quantity:1

        },

        {
            id: 7,
            image: "https://images.pexels.com/photos/161440/smoothie-fruit-vegetables-salad-beetroot-carrots-161440.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Juice",
            price: 240,
            quantity:1

        },

        {
            id: 8,
            image: "https://images.pexels.com/photos/1200348/pexels-photo-1200348.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Juice",
            price: 290,
            quantity:1

        },

        {
            id: 9,
            image: "https://images.pexels.com/photos/2842876/pexels-photo-2842876.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Juice",
            price: 330,
            quantity:1

        },

        {
            id: 10,
            image: "https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Juice",
            price: 340,
            quantity:1

        },

        {
            id: 11,
            image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Juice",
            price: 420,
            quantity:1

        },

        {
            id: 12,
            image: "https://images.pexels.com/photos/3186752/pexels-photo-3186752.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Juice",
            price: 450,
            quantity:1

        }
    ])

    const name = "Juice"
    const splname = "JUICE"
    const Splfoodsymbol = "GiManualJuicer"
    const symbol = "GiManualJuicer"
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

export default Juice