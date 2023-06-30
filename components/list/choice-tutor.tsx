import Image from "next/image";
import Link from "next/link";

export default function ChoiceTutor() {
    return (<>
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
            <Image alt="testimonial" className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/505x505" height={200} width={200}/>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-2xl">월디</h2>
            <p className="text-gray-500 text-xl mt-2">서울디지털재단 마스코트</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 text-xl mt-6 mb-4"></span>
            <p className="leading-relaxed mb-2">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <Link href="/list" className="btn-project mt-5">
                    선택
            </Link>
            </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
            <Image alt="testimonial" className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/505x505" height={200} width={200}/>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-2xl">영숙이</h2>
            <p className="text-gray-500 text-xl mt-2">EduFusion 튜터 1</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 text-xl mt-6 mb-4"></span>
            <p className="leading-relaxed mb-2">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <Link href="/list" className="btn-project mt-5">
                    선택
            </Link>
            </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
            <Image alt="testimonial" className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/505x505" height={200} width={200}/>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-2xl">광수</h2>
            <p className="text-gray-500 text-xl mt-2">EduFusion 튜터 2</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 text-xl mt-6 mb-4"></span>
            <p className="leading-relaxed mb-2">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <Link href="/list" className="btn-project mt-5">
                    선택
            </Link>
            </div>
        </div>
    </>);
}
