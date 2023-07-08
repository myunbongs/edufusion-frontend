import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion"
import Celebration from "./celebration";

const Quiz = () => {
    const {query} = useRouter();
    let result = JSON.parse(query.result); 
    let quizList = Object.values(result); 

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [end, setEnd] = useState(false);

    interface QuizProps {
        o1: string; 
        o2: string;
        o3: string; 
        o4: string; 
        a: string; 
        q: string; 
    }

    const optionList = ['o1', 'o2', 'o3', 'o4']; 

    const quizs: QuizProps[] = quizList; 

    const handleNext = () => {
        const nextQues = currentQuestion + 1;

        if (nextQues == quizs.length) {
            setEnd(true); 
        }

        nextQues < quizs.length && setCurrentQuestion(nextQues);
        for(let i = 0; i < optionList.length; i++) {
            let changeStyle = document.getElementById(optionList[i]); 
            changeStyle.className = "btn-option"; 
        }
    };

    const handleAnswerOption = (oIndex, a) => {
        setSelectedOptions([
            (selectedOptions[currentQuestion] = { answerByUser: oIndex }),
        ]);
        setSelectedOptions([...selectedOptions]);

        const answerIndex = a[a.length - 1]; 
        if (oIndex == answerIndex -1 ) {
            handleNext();  
        } else {
            let lastValue = selectedOptions[Object.keys(selectedOptions).pop()]
            let seleted = lastValue.answerByUser + 1; 
            let wrong = 'o'.concat(seleted); 
            let changeStyle = document.getElementById(wrong); 
            changeStyle.className = "btn-wrong-option"; 
        }
    };

    return(<>
            { !end && (        
            <div className="w-full flex flex-col">
            <div className="w-full flex flex-col justify-center items-center">
                <Image alt="tutor talking" className="rounded-lg sm:mb-0 mb-4" src="https://dummyimage.com/1200x800" width={1000} height={1000}/>
            </div>
            <div className="w-full flex flex-col">
                <h4 className="mt-10 text-xl">Question {currentQuestion + 1} of {quizs.length}</h4>
                <p className="mt-4 text-2xl">
                    {quizs[currentQuestion].q}
                </p>
                <div className="w-full mt-8 border-2 rounded-lg border-gray-200 border-opacity-50 p-8 text-2xl">
                    <div className="mb-6">
                        <motion.div whileTap={{ scale: 0.8 }}>
                        <div id="o1" className="btn-option" onClick={(e) => handleAnswerOption(0, quizs[currentQuestion].a)}>
                            {quizs[currentQuestion].o1}
                        </div>
                        </motion.div>
                    </div>
                    <div className="mb-6">
                        <motion.div whileTap={{ scale: 0.8 }}>
                        <div id="o2" className="btn-option" onClick={(e) => handleAnswerOption(1, quizs[currentQuestion].a)}>
                            {quizs[currentQuestion].o2}
                        </div>
                        </motion.div>
                    </div>
                    <div className="mb-6">
                        <motion.div whileTap={{ scale: 0.8 }}>
                        <div id="o3" className="btn-option" onClick={(e) => handleAnswerOption(2, quizs[currentQuestion].a)}>
                            {quizs[currentQuestion].o3}
                        </div>
                        </motion.div>
                    </div>
                    <div className="">
                        <motion.div whileTap={{ scale: 0.8 }}>
                        <div id="o4" className="btn-option" onClick={(e) => handleAnswerOption(3, quizs[currentQuestion].a)}>
                            {quizs[currentQuestion].o4}
                        </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            </div>    
        )}

        {end && (<>
        <div className="w-full flex flex-col items-center justify-center">
            <Celebration />
            <div className="mt-16 border-2 rounded-lg border-gray-200 border-opacity-50 p-8 text-xl mb-16">
                모든 퀴즈가 끝났습니다! 축하합니다 🎉
            </div>
            <Link href="/" className="btn-project">
            다시하기
            </Link>
        </div>
        </>)}
    </>);
}

export default Quiz; 

