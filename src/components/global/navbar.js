import React from "react";
import { Link } from "react-router-dom";

function navbar() {
    return (
        <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center pl-3 sm:pl-0">
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                        웹소지지
                    </span>
                </Link>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link
                                to="/platforms/munpia"
                                className="block py-2 pr-4 pl-3 border-b md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                            >
                                문피아
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/platforms/novelpia"
                                className="block py-2 pr-4 pl-3 border-b md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                            >
                                노벨피아
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/platforms/kakaopage"
                                className="block py-2 pr-4 pl-3 border-b md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                            >
                                카카오페이지
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/platforms/kakaostage"
                                className="block py-2 pr-4 pl-3 border-b md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                            >
                                카카오스테이지
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/platforms/navernovel"
                                className="block py-2 pr-4 pl-3 border-b md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                            >
                                네이버 웹소설
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default navbar;
