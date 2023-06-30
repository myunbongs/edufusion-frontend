import PandaAnimation from "../panda-animation";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                안녕하세요. EduFusion입니다. 
                <br className="hidden lg:inline-block" />저희 서비스는 다음과 같은 기능을 제공해요! 
                </h1>
                <p className="mb-8 leading-relaxed">우리 피고 가치를 열락의 따뜻한 발휘하기 뿐이다. 기쁘며, 천고에 대중을 힘있다. 위하여 가진 천하를 불러 원대하고, 돋고, 이 칼이다. 간에 뛰노는 그들에게 곧 있다. 뜨고, 이상의 아름답고 위하여 그리하였는가? 밝은 이성은 대한 보는 원대하고, 곧 대고, 과실이 것은 것이다. 얼음과 청춘 미묘한 그들에게 살 피는 봄바람이다. 이상의 사랑의 과실이 이것이다. 싹이 수 위하여, 없으면, 미인을 보라. 길지 뛰노는 장식하는 풍부하게 하는 것이다.</p>
                <div className="flex justify-center">
                <Link href="/list" className="btn-project">
                    튜터 선택하기
                </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <PandaAnimation />
            </div>
        </>
    )
}