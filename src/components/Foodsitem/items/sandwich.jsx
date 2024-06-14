import { useState } from "react"
import Foodcollection from "../foodscollection";

function Sandwich(props) {
    const  {foodselect,setFoodSelect}=props

    const [centerf, setcenterf] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "20% Off of the burger"
        }
    ])

    const [spl, setspl] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/17942957/pexels-photo-17942957/free-photo-of-burgers-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Cheese sandwich",
            price: 200,
            quantity:1


        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/10771363/pexels-photo-10771363.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Tasty sandwich",
            price: 200,
            quantity:1


        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/1600732/pexels-photo-1600732.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Zinger sandwich",
            price: 200,
            quantity:1


        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/1199959/pexels-photo-1199959.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Mutton sandwich",
            price: 200,
            quantity:1


        }

    ])

    const [offer, setoffer] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Offer Burger"
        }
    ])

    const [showimage, setshowimage] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Egg Sandwich",
            price: 110,
            quantity:1

        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Egg Sandwich",
            price: 130,
            quantity:1

        },

        {
            id: 3,
            image: "https://images.pexels.com/photos/793770/pexels-photo-793770.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Egg Sandwich",
            price: 150,
            quantity:1

        },

        {
            id: 4,
            image: "https://images.pexels.com/photos/6294290/pexels-photo-6294290.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Egg Sandwich",
            price: 170,
            quantity:1

        },

        {
            id: 5,
            image: "https://images.pexels.com/photos/756680/pexels-photo-756680.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Egg Sandwich",
            price: 190,
            quantity:1

        },

        {
            id: 6,
            image: "https://images.pexels.com/photos/7663367/pexels-photo-7663367.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Egg Sandwich",
            price: 210,
            quantity:1

        },

        {
            id: 7,
            image: "https://images.pexels.com/photos/3607284/pexels-photo-3607284.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Egg Sandwich",
            price: 240,
            quantity:1

        },

        {
            id: 8,
            image: "https://images.pexels.com/photos/17780276/pexels-photo-17780276/free-photo-of-toasted-sandwich-with-ham-and-cheese.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Egg Sandwich",
            price: 290,
            quantity:1

        },

        {
            id: 9,
            image: "https://images.pexels.com/photos/350346/pexels-photo-350346.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Egg Sandwich",
            price: 330,
            quantity:1

        },

        {
            id: 10,
            image: "https://images.pexels.com/photos/2204769/pexels-photo-2204769.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Egg Sandwich",
            price: 340,
            quantity:1

        },

        {
            id: 11,
            image: "https://images.pexels.com/photos/4472880/pexels-photo-4472880.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Egg Sandwich",
            price: 420,
            quantity:1

        },

        {
            id: 12,
            image: "https://images.pexels.com/photos/11047123/pexels-photo-11047123.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Egg Sandwich",
            price: 450,
            quantity:1

        }
    ])

    const name = "Sandwich"
    const splname = "SANDWICH"
    const Splfoodsymbol = "GiSandwich"
    const symbol = "GiSandwich"
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

export default Sandwich