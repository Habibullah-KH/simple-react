import PropTypes from 'prop-types'
const Sidebar = ({laptopData, confirmBtn, delevery}) => {
    
    return (
        <div className='text-center md:w-1/3 p-3'>
<h1 className='text-2xl font-bold pb-5 border-b'>Rady to go: {laptopData.length}</h1>

<table>
<thead>
<tr>
    <th className='p-4'></th>
    <th className='p-4'>Name</th>
    <th className='p-4'>Time</th>
    <th className='p-4'>Model</th>
</tr>
</thead>
<tbody className=''>

{laptopData.map((laptop,i) =>

<tr key={i}>
    <td className='p-3'>{i + 1}</td>
    <td className='p-3'>{laptop.laptop_name}</td>
    <td className='p-3'>{laptop.delivery_time}</td>
    <td className='p-3'>{laptop.laptop_id}</td>
  <td> <button onClick={() => confirmBtn(laptop.laptop_id)}>Confirm</button></td>
</tr>


)}

</tbody>
</table>

<div>
<h1 className='text-2xl font-bold pb-5 border-b'>On the way: {delevery.length}</h1>

<table>
<thead>
<tr>
    <th className='p-4'></th>
    <th className='p-4'>Name</th>
    <th className='p-4'>Time</th>
    <th className='p-4'>Model</th>
</tr>
</thead>
<tbody className=''>

{delevery.map((laptop,i) =>

<tr key={i}>
    <td className='p-3'>{i + 1}</td>
    <td className='p-3'>{laptop.laptop_name}</td>
    <td className='p-3'>{laptop.delivery_time}</td>
    <td className='p-3'>{laptop.laptop_id}</td>
  <td> <button >Cancel</button></td>
</tr>


)}
<tr className='border-t'>
<th></th>
<td></td>
<td>Delevery Time: 0</td>
</tr>

</tbody>
</table>

</div>

        </div>


    );
};

Sidebar.propTypes = {
    laptopData: PropTypes.array.isRequired,
    confirmBtn: PropTypes.func,
    delevery: PropTypes.array.isRequired,
}
export default Sidebar;