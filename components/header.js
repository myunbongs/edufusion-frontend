import Link from "next/link"
import DarkModeToggleButton from "./dark-mode-toggle-button"
import Image from 'next/image'

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src="/logo.png" width={200} height={200}/>
                    {/* <span className="ml-3 text-xl">EduFusion</span> */}
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/disscussion" className="mr-5 hover:text-gray-900">토론</Link>
                    <Link href="/summary" className="mr-5 hover:text-gray-900">요약</Link>
                    <Link href="/quiz" className="mr-5 hover:text-gray-900">퀴즈</Link>
                    <Link href="/quiz" className="mr-5 hover:text-gray-900">질의응답</Link>
                    </nav>
                    <DarkModeToggleButton />
                </div>
            </header>
        </>
    )
}