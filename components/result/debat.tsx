import Image from "next/image";
import { Input } from '@chakra-ui/react'
import Link from "next/link";
import { useRouter } from "next/router";
import DebatInput from "../input/debat-input";
import { useState } from "react";
import axios from "axios";
import Reply from "./reply";

const Debat = () => {
    const {query} = useRouter(); 
    const result = JSON.parse(query.result);
    const router = useRouter();

    const [running, setRunning] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [response, setResponse] = useState(null); 
    
    console.log(result); 

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            "edu_class_folder_name": "시니어_디지털_범죄",
            "edu_title_file_name": "메신저_피싱.txt",
            "state": result.state, 
            "request_contents": event.target.contents.value, 
        };

        const JSONdata = JSON.stringify(data)

        try {
            setRunning(true)
            setErrorMsg('')

            // 수정해야 햄... 왜 안 되는 거쥐...
            await axios.post(
                'http://117.16.43.105:8001/debat',
                JSONdata,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    maxBodyLength: Infinity, 
                    maxContentLength: Infinity, 
                }
            ).then((res) => {
                setResponse(JSON.stringify(res.data))
                router.push(
                    {
                      pathname: '/result-debat',
                      query: {
                        result: JSON.stringify(res.data)
                      },
                    },
                    '/result-debat'
                  );
                  
            }); 
        } catch (error) {
            console.error(error);
            setErrorMsg('잠시 후 다시 시도해주세요 😭')
        }
        finally {
            setRunning(false)
        }
    }


    return(<>
            <div className="w-full flex flex-col items-center justify-center">
            <Image alt="tutor talking" className="rounded-lg sm:mb-0 mb-4" src="https://dummyimage.com/1200x800" width={1000} height={1000}/>

            { !response && (
                <div className="w-full mt-8 p-6 bg-indigo-500 rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0">
                        <p className="text-7xl">🚀</p>
                    </div>
                    <div>
                        <div className="text-xl font-medium text-white">오늘의 주제</div>
                        <p className="text-white dark:text-white">{result.topic}! 🙇‍♀️</p>
                    </div>
                </div>
            )}

            { response && (<>
                <div className="w-full mt-8 p-6 bg-indigo-500 rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0">
                        <p className="text-7xl">🤖</p>
                    </div>
                    <div>
                        <div className="text-xl font-medium text-white">Edufusion</div>
                        <p className="text-white dark:text-white">{result.txt_result}</p>
                    </div>
                </div>
            </>)}
            
            <div className="w-full">
                <form onSubmit={handleSubmit}>
                <DebatInput />
                <div className="flex flex-col items-center justify-center mt-8 md:flex-row">
                        <button type="submit" className="btn-project mx-4 mb-6">토론 답변하기</button>
                        <Link href="/" className="btn-project mx-4 mb-6">
                        다시하기
                        </Link>
                    </div>
                </form>
            </div>
            </div>
    </>)
}

export default Debat;