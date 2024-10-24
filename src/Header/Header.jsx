
const CardContainer = (toggle) => {
    return (
        <div>
        {/* card container */}
<div className='text-center py-8'>
  <h2 className='text-4xl font-bold pb-2'>Laptop</h2>

  <input type="checkbox" className="toggle" onClick={toggle} defaultChecked/>

  <p className='text-gray-500'>Discover high-performance laptops designed for work, gaming, and everyday use. Choose from a wide range of models with powerful 
    <br/>
  processors, sleek designs, and advanced features to meet your needs.
  </p>

</div>


        </div>
    );
};


export default CardContainer;