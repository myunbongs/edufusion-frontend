const QnAInput = () => {
    return (<>
        <div className="mb-4 mt-8">
            <textarea htmlFor="contents" id="contents" name="contents" rows={4} required placeholder="디지털 피싱이 뭐야?" className="w-full rounded border border-gray-700 focus:border-indigo-500 outline-none py-1 px-3 leading-6 transition-colors duration-200 dark:text-white"></textarea>
        </div> 
    </>);
}

export default QnAInput; 