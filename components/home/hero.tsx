import Image from "next/image";
import PandaAnimation from "./panda-animation";
import Link from "next/link";

export default function Hero() {
    return (
        <>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            안녕하세요. EduFusion입니다. 
            <br className="hidden lg:inline-block" />저희 서비스는 다음과 같은 기능을 제공해요! 
            </h1>
            <br />

            <p className="mb-8 leading-relaxed">
            저희가 개발한 교육 플랫폼은 ChatGPT와 Stable Diffusion 기술을 활용하여 다양한 기능을 제공합니다. 이 플랫폼은 토론, 질의응답, 요약, 퀴즈 기능을 통해 학습자들에게 효과적인 교육 경험을 제공합니다.
            <br />
            <br />          
            <br />

            1. 토론 기능을 통해 학습자들은 주어진 주제에 대해 다양한 의견을 제시하고 논쟁할 수 있습니다. ChatGPT는 학습자들이 제시한 의견을 이해하고 관련된 사실과 주장을 제시할 수 있습니다. 또한, ChatGPT는 적절한 토론 규칙을 적용하여 공정하고 건설적인 토론을 도모합니다.
            <br />
            <br />
            2. 질의응답 기능은 학습자들이 교육 과정에서 생기는 궁금증이나 질문을 해결하는 데 도움을 줍니다. 학습자들은 ChatGPT에게 질문을 제출하면, ChatGPT는 지식 베이스를 기반으로하여 최대한 정확하고 유익한 답변을 제공합니다.
            <br />
            <br />

            3. 요약 기능은 학습 자료를 간결하게 요약할 수 있도록 도와줍니다. 이를 통해 핵심 개념을 빠르게 파악하고 학습 효율을 높일 수 있습니다.
            <br />
            <br />

            4. 퀴즈 기능은 학습자들의 이해도를 평가하고 지식을 복습하는 데 사용됩니다. ChatGPT는 즉각적인 피드백을 제공하여 학습자들이 실력을 향상시킬 수 있도록 도와줍니다.
            <br />
            <br />
            </p>
            <div className="flex justify-center">
            <Link href="/tutor-list" className="btn-project">
                튜터 선택하기
            </Link>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image unoptimized={true} src="/KakaoTalk_Photo_2023-07-10-08-44-09.gif" alt="the gif" width={500} height={500}/>
        </div>
        </>
    )
}