import React from "react";

function PricingTable({ pricingData }) {
    return (
        <div class="container px-3 py-2.5 mt-6">
            <div>
                <span class="text-3xl font-light text-gray-200">
                    연재 방식별 통계
                </span>
            </div>
            <div class="hidden lg:block">
                <table class="mt-3 w-full table-auto font-light text-gray-200">
                    <thead class="bg-white bg-opacity-10">
                        <tr class="text-left">
                            <th class="p-3 font-normal">장르</th>
                            <th class="p-3 font-normal">작품수</th>
                            <th class="p-3 font-normal">조회수</th>
                            <th class="p-3 font-normal">평균 조회수</th>
                            <th class="p-3 font-normal">좋아요 수</th>
                            <th class="p-3 font-normal">평균 좋아요 수</th>
                            <th class="p-3 font-normal">선작수</th>
                            <th class="p-3 font-normal">평균 선작수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(pricingData).map(([pricing, value]) => (
                            <tr class="bg-white bg-opacity-5">
                                <td class="p-3">{pricing}</td>
                                {Object.entries(pricingData[pricing]).map(
                                    ([key, data]) => (
                                        <td class="p-3">
                                            {data.toLocaleString()}
                                        </td>
                                    )
                                )}
                            </tr>
                        ))}
                        {/* {#each Object.keys(pricingData) as pricing}
                    {#if pricing != "모든 장르"}
                        <tr class="bg-white bg-opacity-5">
                            <td class="p-3">{pricing}</td>
                            {#each Object.values(pricingData[pricing]) as data}
                                <td class="p-3">{data.toLocaleString()}</td>
                            {/each}
                        </tr>
                    {/if}
                {/each} */}
                    </tbody>
                </table>
            </div>
            <div class="lg:hidden">
                {Object.entries(pricingData).map(([pricing, value]) => (
                    <div class="mt-3 p-3 font-light rounded-md text-gray-200 bg-white bg-opacity-5">
                        <div class="text-xl">{pricing}</div>
                        <div class="mt-auto ml-auto">
                            {pricingData[pricing][
                                "novelCount"
                            ].toLocaleString()}{" "}
                            작품
                        </div>
                        <div class="mt-2 grid grid-cols-2">
                            <div>
                                <span class="text-gray-400">조회수: </span>
                                {pricingData[pricing][
                                    "totalViews"
                                ].toLocaleString()}
                            </div>
                            <div class="ml-4">
                                <span class="text-gray-400">평균 조회수: </span>
                                {pricingData[pricing][
                                    "avgViews"
                                ].toLocaleString()}
                            </div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div>
                                <span class="text-gray-400">좋아요 수: </span>
                                {pricingData[pricing][
                                    "totalLikes"
                                ].toLocaleString()}
                            </div>
                            <div class="ml-4">
                                <span class="text-gray-400">
                                    평균 좋아요 수:{" "}
                                </span>
                                {pricingData[pricing][
                                    "avgLikes"
                                ].toLocaleString()}
                            </div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div>
                                <span class="text-gray-400">선작수: </span>
                                {pricingData[pricing][
                                    "totalFavs"
                                ].toLocaleString()}
                            </div>
                            <div class="ml-4">
                                <span class="text-gray-400">평균 선작수: </span>
                                {pricingData[pricing][
                                    "avgFavs"
                                ].toLocaleString()}
                            </div>
                        </div>
                    </div>
                ))}
                {/* {#each Object.keys(pricingData) as pricing}
            {#if pricing != "모든 장르"}
                <div class="mt-3 p-3 font-light rounded-md text-gray-200 bg-white bg-opacity-5">
                    <div class="text-xl">{pricing}</div>
                    <div class="mt-auto ml-auto">{pricingData[pricing]["novelCount"].toLocaleString()} 작품</div>
                    <div class="mt-2 grid grid-cols-2">
                        <div><span class="text-gray-400">조회수: </span>{pricingData[pricing]["totalViews"].toLocaleString()}</div>
                        <div class="ml-4"><span class="text-gray-400">평균 조회수: </span>{pricingData[pricing]["avgViews"].toLocaleString()}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div><span class="text-gray-400">좋아요 수: </span>{pricingData[pricing]["totalLikes"].toLocaleString()}</div>
                        <div class="ml-4"><span class="text-gray-400">평균 좋아요 수: </span>{pricingData[pricing]["avgLikes"].toLocaleString()}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div><span class="text-gray-400">선작수: </span>{pricingData[pricing]["totalFavs"].toLocaleString()}</div>
                        <div class="ml-4"><span class="text-gray-400">평균 선작수: </span>{pricingData[pricing]["avgFavs"].toLocaleString()}</div>
                    </div>
                </div>
            {/if}
        {/each} */}
            </div>
        </div>
    );
}

export default PricingTable;
