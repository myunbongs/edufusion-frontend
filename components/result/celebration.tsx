import Lottie from "react-lottie-player";
import lottieJson from '../../public/123026-celebrations-begin.json'
import Image from "next/image";
import Link from "next/link";

const Celebration = () => {
    return (<>
        <div className="w-full flex flex-col">
            <div className="w-full flex flex-col justify-center items-center">
                <Image alt="tutor talking" className="rounded-lg sm:mb-0 mb-4" src="https://dummyimage.com/1200x800" width={1000} height={1000}/>
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