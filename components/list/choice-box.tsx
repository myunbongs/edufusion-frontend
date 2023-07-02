import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";
import RecapBox from './recap-box';


export default function ChoiceBox() {
    const router = useRouter();

    return (<>
        <div className="flex flex-wrap -m-12 justify-center mt-12">
        <div className="mb-24 lg:w-1/2">
            <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center">
            <Image alt="team" className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/1200x800" width={500} height={500}/>
            <Link href="/" className="btn-project mt-5">
                토론하기
            </Link>
            </div>
        </div>

        <RecapBox/>

        <div className="mb-24 lg:w-1/2">
            <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center">
            <Image alt="team" className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/1200x800" width={500} height={500}/>
            <Link href="/" className="btn-project mt-5">
                퀴즈하기
            </Link>
            </div>
        </div>

        <div className="mb-24 lg:w-1/2">
            <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center">
            <Image alt="team" className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/1200x800" width={500} height={500}/>
            <Link href="/" className="btn-project mt-5">
                질의응답
            </Link>
            </div>
        </div>
        </div>
    </>);
}
