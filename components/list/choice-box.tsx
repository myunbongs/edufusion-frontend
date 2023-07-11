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
    const {query} = useRouter();
    const name = query.name as string; 
    
    function random(min,max){
        const num = Math.floor(Math.random()*(max - min))+min;
        return num;
    }

    const randomImg = "/" + name + "/" + '0.png';
    
    const handleSubmit = async (event) => {
        router.push(
            {
              pathname: '/result-qna',
              query: {
                name: query.name, 
              },
            },
            '/result-qna'
          );
    }

    return (<>
        <div className="flex flex-col">

        <div className="w-full mb-16 p-6 bg-indigo-500 rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <p className="text-7xl">🖱</p>
            </div>
            <div>
                <div className="text-xl font-medium text-white">원하는 기능을 클릭하세요!</div>
                <p className="text-white dark:text-white">Edufusion의 All-in-one 서비스를 경험해보세요 💕</p>
            </div>
        </div>

        <Image alt="tutor talking" className="rounded-lg sm:mb-0 mb-4" src={randomImg} width={1000} height={1000}/>

        <div className='flex flex-col md:flex-row mt-16'>
            <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                    <DebatBox />
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
                <div onClick={handleSubmit} className="btn-project mx-8">
                    질의응답
                </div>
                </div>
            </div>
        </div>
    </div>
    </>);
}
