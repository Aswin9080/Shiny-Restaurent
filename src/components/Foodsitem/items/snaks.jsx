import { useState } from "react"
import Foodcollection from "../foodscollection";

function Snaks(props) {
    const { foodselect, setFoodSelect } = props
    const [centerf, setcenterf] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/1152276/pexels-photo-1152276.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "20% Off of the Snaks"
        }
    ])

    const [spl, setspl] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Choclates",
            price: 200,
            quantity:1


        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/7474254/pexels-photo-7474254.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Round Choclate Cake",
            price: 200,
            quantity:1


        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/6618565/pexels-photo-6618565.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Lighting Cake",
            price: 200,
            quantity:1


        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Chicken Choclate+cake",
            price: 200,
            quantity:1


        }

    ])

    const [offer, setoffer] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/5094360/pexels-photo-5094360.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Offer Snaks"
        }
    ])

    const [showimage, setshowimage] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Snaks",
            price: 110,
            quantity:1

        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=300",
            content: "Snaks",
            price: 130,
            quantity:1

        },

        {
            id: 3,
            image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Snaks",
            price: 150,
            quantity:1

        },

        {
            id: 4,
            image: "https://images.pexels.com/photos/2014693/pexels-photo-2014693.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Snaks",
            price: 170,
            quantity:1

        },

        {
            id: 5,
            image: "https://images.pexels.com/photos/71126/biscuit-nutrition-food-eat-71126.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Snaks",
            price: 190,
            quantity:1

        },

        {
            id: 6,
            image: "https://images.pexels.com/photos/208006/pexels-photo-208006.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Snaks",
            price: 210,
            quantity:1

        },

        {
            id: 7,
            image: "https://images.pexels.com/photos/263070/pexels-photo-263070.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Snaks",
            price: 240,
            quantity:1

        },

        {
            id: 8,
            image: "https://images.pexels.com/photos/1439177/pexels-photo-1439177.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Snaks",
            price: 290,
            quantity:1

        },

        {
            id: 9,
            image: "https://images.pexels.com/photos/4016512/pexels-photo-4016512.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Snaks",
            price: 330,
            quantity:1

        },

        {
            id: 10,
            image: "https://images.pexels.com/photos/25078488/pexels-photo-25078488/free-photo-of-chocolate-bubble-waffle-with-toppings.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Snaks",
            price: 340,
            quantity:1

        },

        {
            id: 11,
            image: "https://images.pexels.com/photos/6161502/pexels-photo-6161502.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Snaks",
            price: 420,
            quantity:1

        },

        {
            id: 12,
            image: "https://images.pexels.com/photos/5638268/pexels-photo-5638268.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Snaks",
            price: 450,
            quantity:1

        }
    ])

    const name = "Snaks"
    const splname = "SNAKS"
    const Splfoodsymbol = "HiOutlineCake"
    const symbol = "HiOutlineCake"
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

export default Snaks