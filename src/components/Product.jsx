import { FaTrash } from 'react-icons/fa6'
// actions
import { increment, decrement } from '../redux/features/basketSlice';
// dispatch
import { useDispatch } from 'react-redux';
function Product({ name, amount, price, image }) {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-between mb-5">
      <div className="flex gap-14">
        <img src={image} alt={name + " glasses"} className="w-40" />

        <div className="flex flex-col gap-1 ">
          <p className="font-medium">{name}</p>
          <p className="font-medium">${price}</p>
          <FaTrash className='text-red-700 text-xl hover:opacity-80 duration-150'/>
        </div>
      </div>
      <div className="flex flex-col items-center px-4">
        <div>
          <span className='text-black'>Amount</span>
        </div>
        <div className="flex gap-2 items-center">
          <button onClick={() => {dispatch(decrement())}} className="bg-slate-300 text-lg px-2">-</button>
          <p onClick={() => {dispatch(increment())}}>1</p>
          <button onClick={() => {dispatch(increment())}} className="bg-slate-300 text-lg px-2">+</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
