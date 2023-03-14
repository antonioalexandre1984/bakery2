import c1 from '../../assets/img/cakes/c1.png';
import { BsPlus } from 'react-icons/bs';
import { BsEyeFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

export function Product() {
  return (
    <div
      className='border hover:shadow bg-white flex-col border-black h-full mb-4 relative overflow-hidden group transition rounded-xl'>
      <div className="flex justify-center items-center">
        <img src={c1} alt="" className="max-h[160px] group-hover:scale-110 transition duration-300 bg-slate-100 my-4 mx-4" />
      </div>

      <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button>
          <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
            <BsPlus className='text-3xl' />
          </div>
        </button>
        <button>
          <div className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
            <BsEyeFill className='text-3xl' />
          </div>
        </button>
      </div>
      <div className="">
        <div className='text-4xl capitalize'>
          <h2 className='font-semibold mb-1'>Cream Cake</h2>
        </div>
        <div className="p-4">
          <p className="pb-4 font-primary text-sm text-black capitalize">
            Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.
          </p>
          <div className='flex font-primary align-center justify-evenly'>
            <h2 className='font-semibold text-black text-3xl'>$50,10</h2>
            <button className='btn-btn2 bg-cart hover:bg-cart2  text-white rounded-md md:btn-lg transition-all'>
              <div className="flex items-center gap-2">
                <FaShoppingCart className="text-[secondary]" size={32} />
                Add Cart
              </div>
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}
