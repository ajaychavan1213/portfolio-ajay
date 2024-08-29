import React from 'react'

const Skills = () => {
    return <>
        <div id='skills'>
            <section className="py-10" id="technologies">
                <div className="container m-auto px-4">
                    <h2 className="text-2xl font-semibold">Technologies</h2>
                    <div className="mt-14">
                        <div>
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold">HTML</h2>
                                <p className="text-gray-500">Advanced</p>
                            </div>
                            <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold">CSS, Tailwind & Bootstrap</h2>
                                <p className="text-gray-500">Advanced</p>
                            </div>
                            <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold">
                                    JavaScript, TypeScript, Redux
                                </h2>
                                <p className="text-gray-500">Advanced</p>
                            </div>
                            <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold">Nest Js</h2>
                                <p className="text-gray-500">Advanced</p>
                            </div>
                            <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold">React</h2>
                                <p className="text-gray-500">Advanced</p>
                            </div>
                            <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold">React Native</h2>
                                <p className="text-gray-500">Advanced</p>
                            </div>
                            <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Additional skills section */}
            <section>
                <div className="container m-auto px-4 py-14">
                    <h2 className="text-2xl font-semibold">
                        Additional technologies and skills
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
                        <div>
                            <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                                Git
                            </p>
                        </div>
                        <div>
                            <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                                Wordpress
                            </p>
                        </div>
                        <div>
                            <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                                Teamwork
                            </p>
                        </div>
                        <div>
                            <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                                Quick learning
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
                        <div>
                            <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                                Engagement
                            </p>
                        </div>
                        <div>
                            <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                                B2 english
                            </p>
                        </div>
                        <div>
                            <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                                RWD
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}

export default Skills