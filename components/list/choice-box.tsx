import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";
import RecapBox from './recap-box';
import QuizBox from './quiz-box';
import DebatBox from './debat-box';

export default function ChoiceBox() {
    const router = useRouter();

    return (<>
        <div className="flex flex-col">

        <Image alt="tutor talking" className="rounded-lg sm:mb-0 mb-4" src="https://dummyimage.com/1200x800" width={1000} height={1000}/>
        <div className='flex flex-col md:flex-row mt-16'>
            <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                    <DebatBox/>
                </div>
            </div>

            <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                <RecapBox/>
                </div>
            </div>

            <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                <QuizBox />
                </div>
            </div>

            <div className="lg:w-1/4 lg:mb-0 p-4">
                <div className="h-full text-center">
                <Link href="/result-qna" className="btn-project mx-8">
                    질의응답
                </Link>
                </div>
            </div>
        </div>
    </div>
    </>);
}
