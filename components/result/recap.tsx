import Image from "next/image";
import Typical from 'react-typical'
import Link from "next/link";
import { useRouter } from "next/router";

const Recap = () => {
    const {query} = useRouter(); 
    const result = query.result 
    const name = query.name as string; 

    function random(min,max){
        const num = Math.floor(Math.random()*(max - min))+min;
        return num;
    }

    let randomImg = "/" + name + "/" + String(random(0, 10)) + '.png';


    return(<>
            <div className="w-full flex flex-col items-center justify-center">
                <Image alt="tutor talking" className="rounded-lg sm:mb-0 mb-4" src={randomImg} width={1000} height={1000}/>
            <div className="w-full mt-16 border-2 rounded-lg border-gray-200 border-opacity-50 p-8 mb-16">
                <Typical
                steps={[result]}
                loop={1}
                wrapper="p"/>
            </div>
            <Link href="/" className="btn-project">
            다시하기
            </Link>
            </div>
    </>);
}

export default Recap; 
