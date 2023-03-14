
import { Product } from '../Product';
export function Products() {
  return (
    <section id='product' className='section min-h[1400px] bg-pink-600'>
      <div

        className="container mx-auto bg-pink-300">
        { /* section title */}
        <div
          /*      style={{ textShadow: "0 0 10px rgba(0,0,0,1.5)" }} */
          className="font-primary mt-16 mb-16  flex flex-col items-center text-center">

          <h2 className="uppercase text-secondary font-primary mt-16 mb-16 text-7xl font-bold ">Our<span className="text-primary">Products</span></h2>
          <div

            className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </section>
  );
}
