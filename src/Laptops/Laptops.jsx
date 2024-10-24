import PropTypes from 'prop-types';
import Laptop from '../Laptop/Laptop';
import { useEffect, useState } from 'react';

const Laptops = ({buyNow}) => {

const [laptops, setlaptops] = useState([]);

useEffect(() => {
    fetch('../../public/laptop.json')
    .then(res => res.json())
    .then(data => setlaptops(data))
    
}, []);


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:w-2/3'>
{
    laptops.map(laptop => <Laptop key={laptop.laptop_id} laptop={laptop} buyNow={buyNow}></Laptop>)
}
        </div>
    );
};

Laptops.propTypes = {
    buyNow: PropTypes.func.isRequired,

}

export default Laptops;