import { useSelector } from "react-redux";


function Navbar() {
    const { amount } = useSelector((state) => state.basket)
  return (
    <div className='flex justify-between pt-5 relative'>
        <p className='font-medium text-2xl'>Home</p>
        <p className='font-medium'>
            Basket
            <span className='bg-red-500 text-sm text-white py-2 px-1 rounded-full absolute w-[20px] h-[20px] right-[-20px] top-4 flex justify-center
            items-center'>{amount}</span>
        </p>
    </div>
  )
}

export default Navbar