import Image from 'next/image';
import Link from 'next/link';

export default function ChoiceBox() {
    return (<>
    <section className="text-gray-600 body-font">
        <div className="container mx-auto">
            <div className="flex flex-wrap -m-12 justify-center">
            <div className="mb-24 lg:w-1/2">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center">
                <Image alt="team" className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/1200x800" width={500} height={500}/>
                <Link href="/list" className="btn-project mt-5">
                    토론하기
                </Link>
                </div>
            </div>
            <div className="mb-24 lg:w-1/2">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center">
                <Image alt="team" className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/1200x800" width={500} height={500}/>
                <Link href="/recap" className="btn-project mt-5">
                    요약하기
                </Link>
                </div>
            </div>

            <div className="mb-24 lg:w-1/2">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center">
                <Image alt="team" className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/1200x800" width={500} height={500}/>
                <Link href="/list" className="btn-project mt-5">
                    퀴즈하기
                </Link>
                </div>
            </div>

            <div className="mb-24 lg:w-1/2">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center">
                <Image alt="team" className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/1200x800" width={500} height={500}/>
                <Link href="/list" className="btn-project mt-5">
                    질의응답
                </Link>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>);
}
