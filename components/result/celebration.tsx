import Lottie from "react-lottie-player";
import lottieJson from '../../public/123026-celebrations-begin.json'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Celebration = () => {
    const {query} = useRouter(); 
    const name = query.name as string;
    let randomImg = "/" + name + "/" + '9.png';

    return (<>
        <div className="w-full flex flex-col">
            <div className="w-full flex flex-col justify-center items-center">
                <Image alt="tutor talking" className="rounded-lg sm:mb-0 mb-4" src={randomImg} width={1000} height={1000}/>
                <div className="absolute object-cover">
                    <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    style={{ width: 1000, height: 666 }}
                    />
                </div>

            </div>
        </div>    
    </>);
}

export default Celebration;