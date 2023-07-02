import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '../../public/loading-animation.json'

const Loading = () => {
    return(<>
        <div className="fixed top-0 left-0 right-0 w-full min-h-screen flex flex-col justify-center items-center bg-black opacity-70">
        <Lottie
        loop
        animationData={lottieJson}
        play
        />
        <div className="text-white textxl font-bold mt-5">평균 10-15초 걸려요...</div>
        </div>
    </>); 
} 

export default Loading; 