import Header from "./components/Header";
import Footer from "./components/Footer";

export default async function MainPage() {
    return (
        <div className="min-h-screen min-w-full flex flex-col bg-gray-100 dark:bg-black">
            <Header></Header>
            <main className="flex flex-col justify-center items-center flex-grow">
                <div className="border-4 rounded-xl border-black dark:border-white h-[550px] w-[850px] justify-center items-center flex bg-gray-400 dark:bg-gray-800 shadow-xl/40 dark:shadow-gray-600">
                    <p className="text-4xl text-black dark:text-white">
                        Welcome to <span className="font-bold italic text-pink-300 text-shadow-lg text-bold">FaylieLabs</span>.
                    </p>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
