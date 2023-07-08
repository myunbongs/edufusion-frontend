const DebatInput = () => {
    return (<>
        <div className="mb-4 mt-8">
            <textarea htmlFor="contents" id="contents" name="contents" rows={4} required placeholder="나는 이렇게 생각해." className="w-full rounded border border-gray-700 focus:border-indigo-500 outline-none py-1 px-3 leading-6 transition-colors duration-200 dark:text-white"></textarea>
        </div> 
    </>);
}

export default DebatInput; 