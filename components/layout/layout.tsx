import Header from "./header"
import Footer from "./footer"

export default function Layout({children}) {
    return (
        <div className="bg-primary">
            <Header />
                <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    {children}
                </div>
                </section>
            <Footer />
        </div>
    )
}