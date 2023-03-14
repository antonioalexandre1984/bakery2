import { ReactNode } from 'react';
import banner from '../../assets/img/banner.png';


export function Banner() {
  return (
    <section id='banner' >
      <div className='container mx-auto '>
        <div className="bg-banner bg-no-repeat  w-full h-[790px] flex items-center justify-center">
          <img src={banner} alt="" className=" object-cover" />
        </div>
      </div>
    </section>
  );
}
