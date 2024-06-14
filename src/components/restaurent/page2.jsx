import { FaPagelines } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";
import { GiForkKnifeSpoon } from "react-icons/gi";
function Page2() {
    return (
        <div>
            <div className="grid justify-center  items-center space-y-10">
                <div className="text-center m-10 space-y-2">
                    <FaPagelines className="inline-block text-red-700 text-4xl" />
                    <p className="text-2xl font-serif">FEATURES</p>
                    <p>Why people choose us?</p>
                    <p>Porro eveniet, autem ipsam vitae consequatur!</p>
                </div>
                <div className="lg:grid lg:grid-cols-3 gap-8">
                    <div className="text-center space-y-3">
                        <MdMenuBook className="inline-block text-8xl" />
                        <p className="text-xl">Menu for every taste</p>
                        <p>Dolor sit amet, consectetur adipisicing elit et molestias possimus</p>
                    </div>

                    <div className="text-center space-y-3">
                        <GiFruitBowl className="inline-block text-8xl" />
                        <p className="text-xl">Always fresh ingredients</p>
                        <p>Assumenda possimus eaque illo iste, autem. Porro eveniet autem</p>
                    </div>

                    <div className="text-center space-y-3">
                        <GiForkKnifeSpoon className="inline-block text-8xl" />
                        <p className="text-xl">Experienced chefs</p>
                        <p>Rolorem, beatae dolorum, praesentium itaque et quam quaerat</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Page2