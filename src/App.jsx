// import { useState } from 'react'
import './App.css'
import Laptops from './Laptops/Laptops'
import Headers from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import { useState } from 'react';

function App() {



const [data, setData] = useState([]);
const [delevery, setDelevery] = useState([]);
//* BUY now button functionality
const buyNow = laptopData => {
  
  setData([...data, laptopData]);
  
};


//* remove form on the way first seciton
const confirmBtn = laptopData => {

const handleState = data.find(id => id.laptop_id === laptopData);

const removeState = data.filter(id => id.laptop_id !== laptopData);
setData(removeState);
setDelevery([...delevery, handleState]);


};

  return (
    <>

<Headers/>

<section className="flex flex-col md:flex-row justify-between w-11/12 m-auto">
<Laptops buyNow={buyNow}/> 

<Sidebar laptopData={data}
confirmBtn={confirmBtn}
delevery={delevery}
/>
</section>



    </>
  )
}

export default App
