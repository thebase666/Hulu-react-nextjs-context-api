import requests from '../utils/requests'
import { useRouter } from 'next/router'
// ./utils/requests直接 export default object 可以用任何参数形式引入requests1也可以

function Nav() {
  const router = useRouter()
  // console.log(requests);
  // console.log("-------------------");
  // console.log(Object.entries(requests));
  return (
    <div className='relative'>
      <div className='flex px-10 pb-5 space-x-10 overflow-x-scroll text-2xl scrollbar-thin sm:px-20 whitespace-nowrap sm:space-x-20'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className='transition duration-100 transform cursor-pointer last:pr-24 hover:scale-125 hover:text-white active:text-red-500'>
            {title}
          </h2>
          // last:pr-24  在map里面   宽度w-1/12 倔  
          // onClick 还是带参数访问
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] to-transparent h-10 w-1/12'></div>
    </div>
  )
}

export default Nav
