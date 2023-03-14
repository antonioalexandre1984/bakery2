import about from '../../assets/img/about.png';

export function About() {
  return (
    <section id='about'>
      <div className='container mx-auto'>
        <div className="w-full flex flex-col items-center h-full justify-center ">
          { /* section title */}
          <div
            style={{ textShadow: "0 0 10px rgba(0,0,0,1.5)" }}
            className="flex items-center mt-16 mb-16 ">
            <h2 className="uppercase text-secondary font-primary text-7xl font-bold ">About<span className="text-primary"> Us</span></h2>
          </div>

          { /* section content */}
          <div className="flex gap-x-8">
            <div className="">
              <img src={about} className="w-[900px] h-[400px]" />
            </div>
            <div className="flex flex-col justify-evenly">
              <h2 className="font-primary text-black text-6xl font-bold leading-[80px]">
                Good Things Come to Those <span className='text-secondary'>Who
                  Bake</span> for Others
              </h2>

              <p className="text-body-sm text-black font-bold">
                Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
              </p>
              <p className="text-body-sm text-black font-bold mb-4">
                Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
              </p>
              <div className="">
                <button className="btn btn-lg lg:btn-lg btn-primary rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
