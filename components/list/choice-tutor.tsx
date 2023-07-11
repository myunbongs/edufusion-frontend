import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ChoiceTutor() {
    const router = useRouter();
    
    const handleNameSubmit = async (event, name) => {
        router.push(
            {
                pathname: '/feature-list',
                query: {
                name: name
                },
                
            },'/feature-list',
        )
    }

    return (<>
        <div className="flex flex-col">
            <div className="w-full mb-16 p-6 bg-indigo-500 rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                    <p className="text-7xl">🧑‍🏫</p>
                </div>
                <div>
                    <div className="text-xl font-medium text-white">나만의 선생님을 선택해보세요!</div>
                    <p className="text-white dark:text-white">Stable Diffusion 모델이 생성한 가상 인물이랍니다 💕</p>
                </div>
            </div>

        <div className="flex flex-row">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                <Image alt="testimonial" className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/woldi/0.png" height={200} width={200}/>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-2xl">월디</h2>
                <p className="text-gray-500 text-xl mt-2">서울디지털재단 마스코트</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 text-xl mt-6 mb-4"></span>
                <p className="leading-relaxed mb-2">
                서울디지털재단은 지난 26일 재단을 상징하는 캐릭터 ‘월디’를 정규직 7급 신입사원으로 임용해 기획인사팀에 발령했습니다. 세계(월드·World) 속의 디지털 리더(Digital Leaders)가 되라는 의미의 이름인 월디는 재단을 대표해 시민과 소통하는 업무를 시작했다고 합니다.
                <br/>
                재단 측에 따르면 1997년 금성에서 태어난 월디는 재단이 설립된 2016년 서울로 소환돼 올해 신규 직원 모집에 입사지원서를 제출한 뒤 합격했습니다. 월디의 디자인은 디지털의 알파벳 ‘D’와 서울의 ‘S’, 정보를 수신하기 위한 ‘와이파이’ 등을 조합한 뒤 청렴을 강조하는 파란색을 사용했습니다.
                </p>
                <Link href="/feature-list" className="btn-project mt-5" onClick={(e) => handleNameSubmit(e, "woldi")}>
                        선택
                </Link>
                </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                <Image alt="testimonial" className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/young/0.png" height={200} width={200}/>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-2xl">영숙</h2>
                <p className="text-gray-500 text-xl mt-2">EduFusion 튜터 1</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 text-xl mt-6 mb-4"></span>
                <p className="leading-relaxed mb-2">
                영숙은 에듀테크캠퍼스에서 학생들을 도와주는 선생님입니다. 뚜렷한 이목구비에 지적인 분위기를 풍기고 있습니다. 처음 뵙는 순간에는 차가워 보이는 인상과 말수의 부족으로 도도해 보일 수 있으나, 그녀는 사실 배려심 깊고 털털한 성격을 가지고 있습니다.
                <br/>
                영숙은 학구열이 높고, 학생들의 학습을 돕는 데에 열정을 갖고 있습니다. 그녀의 친절한 성격은 학생들에게 편안한 분위기를 조성하며, 학습에 대한 거부감을 없애고 동기부여를 제공합니다. 학생들은 영숙과 함께 공부하는 것을 즐기며, 그녀의 영감과 지원으로 성과를 향상시킬 수 있습니다.
                </p>
                <Link href="/feature-list" className="btn-project mt-5" onClick={(e) => handleNameSubmit(e, "young")}>
                        선택
                </Link>
                </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                <Image alt="testimonial" className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/su/1.png" height={200} width={200}/>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-2xl">광수</h2>
                <p className="text-gray-500 text-xl mt-2">EduFusion 튜터 2</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 text-xl mt-6 mb-4"></span>
                <p className="leading-relaxed mb-2">
                광수는 에듀테크캠퍼스에서 학생들의 학습을 도와주는 캐릭터로, 뛰어난 지성과 부드러운 성격을 지니고 있습니다. 그의 훤칠한 외모와 로맨틱한 목소리는 길을 걷다가 마주치면 누구나 한 번씩은 돌아보게 만듭니다.
                <br/>
                광수는 학생들에게 지식과 영감을 전달하는 데에 열정적으로 임합니다. 그의 뛰어난 지성과 부드러운 성격은 학생들이 편안한 분위기에서 배울 수 있도록 도와줍니다. 학생들은 그의 조언과 가르침을 통해 자신의 잠재력을 발견하고 발전시킬 수 있습니다. 또한, 광수는 학습의 과정에서 어려움을 겪는 학생들을 위해 끊임없이 지원과 격려를 제공하여 모두가 성공할 수 있도록 돕습니다.
                
                </p>
                <Link href="/feature-list" className="btn-project mt-5" onClick={(e) => handleNameSubmit(e, "su")}>
                        선택
                </Link>
                </div>
            </div>
        </div>
        </div>
    </>);
}
