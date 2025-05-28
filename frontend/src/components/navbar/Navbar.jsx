const Navbar = () => {
    return (
        <nav className="border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
                <img src="/vibely.png" className="h-8" alt="Vibely Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-blue-700 to-red-900 bg-clip-text text-transparent font-serif mx-5">Vibely</span>
            </div>
        </nav>

    )
}

export default Navbar
