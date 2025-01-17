import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    const onPageScroll = () => {
        if (window.pageYOffset > 200) {
            setScrolling(true)
        } else {
            setScrolling(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", onPageScroll)
        return () => {
            window.removeEventListener("scroll", onPageScroll)
        }
    }, [])

    return <>

        <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
            <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
                <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
                    <div>
                        <h1 className="font-bold text-2xl">Ajay Portfolio</h1>
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-gray-400 hover:text-white cursor-pointer">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white cursor-pointer">
                                    About me
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Navbar