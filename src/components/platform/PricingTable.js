import React from "react";

function PricingTable({ pricingData }) {
    return (
        <div className="container px-3 py-2.5 mt-6">
            <div>
                <span className="text-3xl font-light text-gray-200">
                    연재 방식별 통계
                </span>
            </div>
            <div className="hidden lg:block">
                <table className="mt-3 w-full table-auto font-light text-gray-200">
                    <thead className="bg-white bg-opacity-10">
                        <tr className="text-left">
                            <th className="p-3 font-normal">장르</th>
                            <th className="p-3 font-normal">작품수</th>
                            <th className="p-3 font-normal">조회수</th>
                            <th className="p-3 font-normal">평균 조회수</th>
                            <th className="p-3 font-normal">좋아요 수</th>
                            <th className="p-3 font-normal">평균 좋아요 수</th>
                            <th className="p-3 font-normal">선작수</th>
                            <th className="p-3 font-normal">평균 선작수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(pricingData).map(([pricing, value]) => (
                            <tr
                                key={"desktop_" + pricing}
                                className="bg-white bg-opacity-5"
                            >
                                <td className="p-3">{pricing}</td>
                                {Object.entries(pricingData[pricing]).map(
                                    ([key, data]) => (
                                        <td
                                            key={
                                                "desktop_" + pricing + "_" + key
                                            }
                                            className="p-3"
                                        >
                                            {data.toLocaleString()}
                                        </td>
                                    )
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="lg:hidden">
                {Object.entries(pricingData).map(([pricing, value]) => (
                    <div
                        key={"mobile" + pricing}
                        className="mt-3 p-3 font-light rounded-md text-gray-200 bg-white bg-opacity-5"
                    >
                        <div className="text-xl">{pricing}</div>
                        <div className="mt-auto ml-auto">
                            {pricingData[pricing][
                                "novelCount"
                            ].toLocaleString()}{" "}
                            작품
                        </div>
                        <div className="mt-2 grid grid-cols-2">
                            <div>
                                <span className="text-gray-400">조회수: </span>
                                {pricingData[pricing][
                                    "totalViews"
                                ].toLocaleString()}
                            </div>
                            <div className="ml-4">
                                <span className="text-gray-400">
                                    평균 조회수:{" "}
                                </span>
                                {pricingData[pricing][
                                    "avgViews"
                                ].toLocaleString()}
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                                <span className="text-gray-400">
                                    좋아요 수:{" "}
                                </span>
                                {pricingData[pricing][
                                    "totalLikes"
                                ].toLocaleString()}
                            </div>
                            <div className="ml-4">
                                <span className="text-gray-400">
                                    평균 좋아요 수:{" "}
                                </span>
                                {pricingData[pricing][
                                    "avgLikes"
                                ].toLocaleString()}
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                                <span className="text-gray-400">선작수: </span>
                                {pricingData[pricing][
                                    "totalFavs"
                                ].toLocaleString()}
                            </div>
                            <div className="ml-4">
                                <span className="text-gray-400">
                                    평균 선작수:{" "}
                                </span>
                                {pricingData[pricing][
                                    "avgFavs"
                                ].toLocaleString()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PricingTable;
