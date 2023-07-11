import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";
import Image from "next/image";
import Loading from "./loading";

const RecapBox = () => {
    const router = useRouter();
    const [running, setRunning] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const {query} = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            "edu_class_folder_name": "시니어_디지털_범죄",
            "edu_title_file_name": "메신저_피싱.txt"
        };    

        const JSONdata = JSON.stringify(data)

        try {
            setRunning(true)
            setErrorMsg('')

            // 수정해야 햄... 왜 안 되는 거쥐...
            await axios.post(
                'http://localhost:80/recap',
                JSONdata,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    maxBodyLength: Infinity, 
                    maxContentLength: Infinity, 
                }
            ).then((res) => {
                console.log(res.data.txt_result)
                router.push(
                    {
                      pathname: '/result-recap',
                      query: {
                        result: res.data.txt_result,
                        name: query.name,
                      },
                    },
                    '/result-recap'
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

        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center">
                <button type="submit" className="btn-project mx-8">요약하기</button>
            </div>
        </form>

        {running && (
        <Loading />
        )}

    </>);
}

export default RecapBox;