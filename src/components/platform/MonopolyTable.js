import React from "react";

function MonopolyTable({ monopolyData }) {
    return (
        <div className="container px-3 py-2.5 mt-6">
            <div>
                <span className="text-3xl font-light text-gray-200">
                    독점별 통계
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
                        {Object.entries(monopolyData).map(
                            ([monopoly, value]) => (
                                <tr className="bg-white bg-opacity-5">
                                    <td className="p-3">{monopoly}</td>
                                    {Object.entries(monopolyData[monopoly]).map(
                                        ([key, data]) => (
                                            <td className="p-3">
                                                {data.toLocaleString()}
                                            </td>
                                        )
                                    )}
                                </tr>
                            )
                        )}
                        {/* {#each Object.keys(monopolyData) as monopoly}
                    {#if monopoly != "모든 장르"}
                        <tr className="bg-white bg-opacity-5">
                            <td className="p-3">{monopoly}</td>
                            {#each Object.values(monopolyData[monopoly]) as data}
                                <td className="p-3">{data.toLocaleString()}</td>
                            {/each}
                        </tr>
                    {/if}
                {/each} */}
                    </tbody>
                </table>
            </div>
            <div className="lg:hidden">
                {Object.entries(monopolyData).map(([monopoly, value]) => (
                    <div className="mt-3 p-3 font-light rounded-md text-gray-200 bg-white bg-opacity-5">
                        <div className="text-xl">{monopoly}</div>
                        <div className="mt-auto ml-auto">
                            {monopolyData[monopoly][
                                "novelCount"
                            ].toLocaleString()}{" "}
                            작품
                        </div>
                        <div className="mt-2 grid grid-cols-2">
                            <div>
                                <span className="text-gray-400">조회수: </span>
                                {monopolyData[monopoly][
                                    "totalViews"
                                ].toLocaleString()}
                            </div>
                            <div className="ml-4">
                                <span className="text-gray-400">평균 조회수: </span>
                                {monopolyData[monopoly][
                                    "avgViews"
                                ].toLocaleString()}
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                                <span className="text-gray-400">좋아요 수: </span>
                                {monopolyData[monopoly][
                                    "totalLikes"
                                ].toLocaleString()}
                            </div>
                            <div className="ml-4">
                                <span className="text-gray-400">
                                    평균 좋아요 수:{" "}
                                </span>
                                {monopolyData[monopoly][
                                    "avgLikes"
                                ].toLocaleString()}
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                                <span className="text-gray-400">선작수: </span>
                                {monopolyData[monopoly][
                                    "totalFavs"
                                ].toLocaleString()}
                            </div>
                            <div className="ml-4">
                                <span className="text-gray-400">평균 선작수: </span>
                                {monopolyData[monopoly][
                                    "avgFavs"
                                ].toLocaleString()}
                            </div>
                        </div>
                    </div>
                ))}
                {/* {#each Object.keys(monopolyData) as monopoly}
            {#if monopoly != "모든 장르"}
                <div className="mt-3 p-3 font-light rounded-md text-gray-200 bg-white bg-opacity-5">
                    <div className="text-xl">{monopoly}</div>
                    <div className="mt-auto ml-auto">{monopolyData[monopoly]["novelCount"].toLocaleString()} 작품</div>
                    <div className="mt-2 grid grid-cols-2">
                        <div><span className="text-gray-400">조회수: </span>{monopolyData[monopoly]["totalViews"].toLocaleString()}</div>
                        <div className="ml-4"><span className="text-gray-400">평균 조회수: </span>{monopolyData[monopoly]["avgViews"].toLocaleString()}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div><span className="text-gray-400">좋아요 수: </span>{monopolyData[monopoly]["totalLikes"].toLocaleString()}</div>
                        <div className="ml-4"><span className="text-gray-400">평균 좋아요 수: </span>{monopolyData[monopoly]["avgLikes"].toLocaleString()}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div><span className="text-gray-400">선작수: </span>{monopolyData[monopoly]["totalFavs"].toLocaleString()}</div>
                        <div className="ml-4"><span className="text-gray-400">평균 선작수: </span>{monopolyData[monopoly]["avgFavs"].toLocaleString()}</div>
                    </div>
                </div>
            {/if}
        {/each} */}
            </div>
        </div>
    );
}

export default MonopolyTable;
