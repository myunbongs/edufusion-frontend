import Image from "next/image";
import Typical from 'react-typical'
import Link from "next/link";
import { useRouter } from "next/router";

const Recap = () => {
    const {query} = useRouter(); 
    const result = query.result 

    return(<>
            <div className="w-full flex flex-col items-center justify-center">
                <Image alt="tutor talking" className="rounded-lg sm:mb-0 mb-4" src="https://dummyimage.com/1200x800" width={1000} height={1000}/>
            <div className="w-full mt-16 border-2 rounded-lg border-gray-200 border-opacity-50 p-8 text-2xl mb-16">
                <Typical
                steps={[result]}
                loop={1}
                wrapper="div"/>
            </div>
            <Link href="/" className="btn-project">
            다시하기
            </Link>
            </div>
    </>);
}

export default Recap; 
