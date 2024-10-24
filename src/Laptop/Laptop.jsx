import { FaClock } from "react-icons/fa6";
import { MdInvertColors } from "react-icons/md";

import PropTypes from 'prop-types';
const Loptop = ({laptop, buyNow}) => {
    const {laptop_image, laptop_name, short_description, ingredients, delivery_time, color } = laptop;
    return (
        <div>
            <div className="card bg-base-100 h-[40rem] shadow-xl">
  <figure>
    <img
      src={laptop_image}
      alt="Shoes"
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{laptop_name}</h2>
    <p>{short_description}</p>
    <ul>
    {ingredients.map((laptop, i) => <li key={i}>{laptop}</li> )  }
    </ul>

<div className="flex items-end">
<p className="flex items-center gap-1"><FaClock />{delivery_time}</p>

<p className="flex items-center gap-1"><MdInvertColors />{color}</p>

</div>

    <div className="card-actions justify-end">
      <button onClick={() => buyNow(laptop)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

Loptop.propTypes = {
    laptop: PropTypes.object.isRequired,
    buyNow: PropTypes.func,


}

export default Loptop;