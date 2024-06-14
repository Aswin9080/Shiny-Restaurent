import { useState } from "react"
import Foodcollection from "../foodscollection";

function Lunch(props) {
    const  {foodselect,setFoodSelect}=props

    const [centerf, setcenterf] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "20% Off of the burger"
            
        }
    ])

    const [spl, setspl] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Mutton",
            price: 200,
            quantity:1


        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/8093598/pexels-photo-8093598.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "golab",
            price: 200,
            quantity:1

        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Non veg",
            price: 200,
            quantity:1


        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/7438982/pexels-photo-7438982.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Chicken biriyani",
            price: 200,
            quantity:1


        }

    ])

    const [offer, setoffer] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "Offer Burger"
        }
    ])

    const [showimage, setshowimage] = useState([
        {
            id: 1,
            image:'https://media.istockphoto.com/id/1934240762/photo/plain-pulao-with-shami-kabab-onion-and-cabbage-served-in-plate-isolated-wooden-background-top.jpg?b=1&s=612x612&w=0&k=20&c=duS7P9dWYtgrUKHFWJswc4RyihsD0Hti5vMGgywdznY=',
            content: "Break Fast",
            price: 110,
            quantity:1

        },
        {
            id: 2,
            image:'https://media.istockphoto.com/id/1645803443/photo/plain-pulao-or-polao-with-fried-onion-basmati-chawal-served-in-dish-isolated-on-background.jpg?b=1&s=612x612&w=0&k=20&c=4vuKRdSm_FS8yWXAxtmjQfx8raTVTFpla7Z1wR18VUI=',
            content: "Break Fast",
            price: 130,
            quantity:1

        },

        {
            id: 3,
            image:'https://media.istockphoto.com/id/2150792768/photo/carrots-and-peas-pilaf-or-gajar-matar-pulao-it-is-a-one-pot-rice-dish-made-with-basmati-rice.jpg?b=1&s=612x612&w=0&k=20&c=YpW4gXtvACk0rYo9TTC11eEFALRgiZph92-GvanG1Dk=',
            content: "Break Fast",
            price: 150,
            quantity:1

        },

        {
            id: 4,
            image:'https://media.istockphoto.com/id/2150792768/photo/carrots-and-peas-pilaf-or-gajar-matar-pulao-it-is-a-one-pot-rice-dish-made-with-basmati-rice.jpg?b=1&s=612x612&w=0&k=20&c=YpW4gXtvACk0rYo9TTC11eEFALRgiZph92-GvanG1Dk=',
            content: "Break Fast",
            price: 170,
            quantity:1

        },

        {
            id: 5,
            image:'https://media.istockphoto.com/id/1817571075/photo/homemade-chicken-dum-biryani.jpg?b=1&s=612x612&w=0&k=20&c=B0DniBe-2Cp-MOD8ngQ5rCI4I4r27-mugs2ACWQqdWI=',
            content: "Break Fast",
            price: 190,
            quantity:1

        },

        {
            id: 6,
            image:'https://media.istockphoto.com/id/1934239172/photo/spicy-chicken-biryani-with-shami-kabab-potato-and-lemon-slice-served-in-plate-isolated-wooden.jpg?b=1&s=612x612&w=0&k=20&c=6Nr1jgmUlyY-Yx1_8Vp6dNfdnQ7M5Zj_Kd4Y_Hnm_b0=',
            content: "Break Fast",
            price: 210,
            quantity:1

        },

        {
            id: 7,
            image:"https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=300",
            content: "Break Fast",
            price: 240,
            quantity:1

        },

        {
            id: 8,
            image:'https://media.istockphoto.com/id/1934223102/photo/chicken-haleem-chicken-karahi-biryani-beef-nihari-curry-pakora-chanay-aloo-shimla-mirch-and.jpg?b=1&s=612x612&w=0&k=20&c=9WHgWTqi_uHG0aMcQTlW2p56AcgKGBdbJODg3ZQFs1Q=',
            content: "Break Fast",
            price: 290,
            quantity:1

        },

        {
            id: 9,
            image:'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=300',
            content: "Break Fast",
            price: 330,
            quantity:1

        },

        {
            id: 10,
            image:'https://media.istockphoto.com/id/1716976168/photo/pilaf-kachchi-biryani-is-a-popular-meal-served-at-parties-celebrations-and-weddings-closeup.jpg?b=1&s=612x612&w=0&k=20&c=9YP2eWEkTQlgGlA0OZ4Q59GcxgGjq3FUkOwEOLXngAM=',
            content: "Break Fast",
            price: 340,
            quantity:1

        },

        {
            id: 11,
            image:'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=300',
            content: "Break Fast",
            price: 420,
            quantity:1

        },

        {
            id: 12,
            image:'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600',
            content: "Break Fast",
            price: 450,
            quantity:1

        }
    ])

    const name =  " Break Fast"
    const splname = "LUNCH"
    const Splfoodsymbol = "IoFastFood"
    const symbol = "IoFastFood"
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

export default Lunch