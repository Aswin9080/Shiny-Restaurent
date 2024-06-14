import './App.css';
import { Restaurent } from './components/restaurent/restaurent';
import Couples from './components/restaurent/couples';
import Single from './components/restaurent/single';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Family from './components/restaurent/family';
import Party from './components/restaurent/party';
import Burger from './components/Foodsitem/items/burger';
import Sandwich from './components/Foodsitem/items/sandwich';
import Soup from './components/Foodsitem/items/soup';
import Pizza from './components/Foodsitem/items/pizza';
import Chicken from './components/Foodsitem/items/chicken';
import Lunch from './components/Foodsitem/items/breakfast';
import Coffee from './components/Foodsitem/items/coffee';
import Juice from './components/Foodsitem/items/juice';
import Snaks from './components/Foodsitem/items/snaks';
import Fotter from './components/restaurent/fotter';
import { useState } from 'react';
import Billing from './components/Foodsitem/items/billing';
function App() {
  const [tableselect,settableselect]=useState([])
  const [foodselect, setFoodSelect] = useState([]);

  console.log(tableselect)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Restaurent/>}></Route>
          <Route path='/Couples' element={<Couples tableselect={tableselect} settableselect={settableselect}/>}></Route>
          <Route path='/Single' element={<Single tableselect={tableselect} settableselect={settableselect}/>}></Route>
          <Route path='/Family' element={<Family tableselect={tableselect} settableselect={settableselect}/>}></Route>
          <Route path='/Party' element={<Party tableselect={tableselect} settableselect={settableselect}/>}></Route>
          <Route path='/Burger' element={<Burger foodselect={foodselect} setFoodSelect={setFoodSelect} />}></Route>
          <Route path='/Sandwich' element={<Sandwich foodselect={foodselect} setFoodSelect={setFoodSelect} />}></Route>
          <Route path='/Soup' element={<Soup foodselect={foodselect} setFoodSelect={setFoodSelect} />}></Route>
          <Route path='/Pizza' element={<Pizza foodselect={foodselect} setFoodSelect={setFoodSelect} />}></Route>
          <Route path='/Chicken' element={<Chicken foodselect={foodselect} setFoodSelect={setFoodSelect} />}></Route>
          <Route path='/Lunch' element={<Lunch foodselect={foodselect} setFoodSelect={setFoodSelect} />}></Route>
          <Route path='/Coffee' element={<Coffee foodselect={foodselect} setFoodSelect={setFoodSelect} />}></Route>
          <Route path='/Juice' element={<Juice foodselect={foodselect} setFoodSelect={setFoodSelect} />}></Route>
          <Route path='/Snaks' element={<Snaks foodselect={foodselect} setFoodSelect={setFoodSelect} />}></Route>
          <Route path='/Fotter' element={<Fotter foodselect={foodselect} setFoodSelect={setFoodSelect} />}></Route>
          <Route path='/Billing' element={<Billing foodselect={foodselect} setFoodSelect={setFoodSelect} tableselect={tableselect} settableselect={settableselect}/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
