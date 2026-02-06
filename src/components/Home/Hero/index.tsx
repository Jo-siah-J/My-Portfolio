import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id='home'
      className='relative z-10 overflow-hidden pt-35 md:pt-40 xl:pt-45'
    >
      {/* <!-- Hero Bg Shapes --> */}
      <div className='mx-auto max-w-7xl'>
        <div className='pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden'>
          <div className='hero-circle-gradient absolute -top-[128%] left-1/2 -z-1 h-[1282px] w-full max-w-[1282px] -translate-x-1/2 rounded-full sm:-top-[107%] xl:-top-[73%]'></div>
          <div className='hero-circle-gradient absolute -top-[112%] left-1/2 -z-1 h-[1046px] w-full max-w-[1046px] -translate-x-1/2 rounded-full sm:-top-[93%] xl:-top-[62%]'></div>
          <div className='absolute top-0 left-1/2 aspect-1204/394 w-full max-w-[1204px] -translate-x-1/2'>
            {/* <Image
              src='/images/blur/blur-02.svg'
              alt='blur-sm'
              fill
              className='max-w-none'
            /> */}
          </div>
          <div className='-u-z-10 absolute top-0 left-1/2 h-full w-full -translate-x-1/2 bg-[url(/images/blur/blur-01.svg)] bg-cover bg-top bg-no-repeat'></div>
        </div>
      </div>

      {/* <!-- Hero Content --> */}
      <div className='relative z-10 mx-auto max-w-7x1 px-6 sm:px-8 xl:px-0'>
        <div className='grid items-start gap-12 lg:grid-cols-2'>
        
        {/*---Left column text--- */}
        <div className='text-left'>
          
          <h1 className='xl:text-heading-1 mb-6 text-3xl font-extrabold text-white sm:text-5xl'>
            Hello, I am Josiah Williams
          </h1>
          
          <p className='mx-auto mb-9 max-w-[500px] font-medium md:text-lg'>
            Active Duty Military/ Web Developer. This page is a demo of my skills and projects. Connect with me!
          </p>
          </div>
              
          {/* <Link
            href='/ai-examples'
            className='hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80'
          >
            Try AI Examples
          </Link> */}
         {/*Right column avatar---*/}
          <div className='flex justify-center lg:center'>
            <div className='relative h-90 w-50 overflow-hidden rounded-full ring-5 ring-white/20'>
              <Image 
              src='/images/hero/AvatarPhoto.PNG'
              alt='avatar'
              fill
              className='object-cover'/>
            </div>
          </div>
          </div>
        
      </div>

      <div
        className='relative mx-auto mt-17 aspect-1170/411 w-full max-w-[1170px]'
        data-wow-delay='0.1s'
      >
        {/* <Image
          className='mx-auto'
          src='./images/hero/BB7492EE-12C6-428D-91AE-105F0AA0BB49.PNG
          alt='hero' 
          fill
        /> */}
      </div>
    </section>
  );
};

export default Hero;
