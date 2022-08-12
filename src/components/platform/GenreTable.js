import React from "react";

function GenreTable({ genreData }) {
    return (
        <div class="container px-3 py-2.5 mt-6">
            <div>
                <span class="text-3xl font-light text-gray-200">
                    장르별 통계
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
                        {Object.entries(genreData).map(([genre, value]) =>
                            genre !== "모든 장르" ? (
                                <tr class="bg-white bg-opacity-5">
                                    <td class="p-3">{genre}</td>
                                    {Object.entries(genreData[genre]).map(
                                        ([key, data]) => (
                                            <td class="p-3">
                                                {data.toLocaleString()}
                                            </td>
                                        )
                                    )}
                                </tr>
                            ) : (
                                <></>
                            )
                        )}
                        {/* {#each Object.keys(genreData) as genre}
                    {#if genre != "모든 장르"}
                        <tr class="bg-white bg-opacity-5">
                            <td class="p-3">{genre}</td>
                            {#each Object.values(genreData[genre]) as data}
                                <td class="p-3">{data.toLocaleString()}</td>
                            {/each}
                        </tr>
                    {/if}
                {/each} */}
                    </tbody>
                </table>
            </div>
            <div class="lg:hidden">
                {Object.entries(genreData).map(([genre, value]) =>
                    genre !== "모든 장르" ? (
                        <div class="mt-3 p-3 font-light rounded-md text-gray-200 bg-white bg-opacity-5">
                            <div class="text-xl">{genre}</div>
                            <div class="mt-auto ml-auto">
                                {genreData[genre][
                                    "novelCount"
                                ].toLocaleString()}{" "}
                                작품
                            </div>
                            <div class="mt-2 grid grid-cols-2">
                                <div>
                                    <span class="text-gray-400">조회수: </span>
                                    {genreData[genre][
                                        "totalViews"
                                    ].toLocaleString()}
                                </div>
                                <div class="ml-4">
                                    <span class="text-gray-400">
                                        평균 조회수:{" "}
                                    </span>
                                    {genreData[genre][
                                        "avgViews"
                                    ].toLocaleString()}
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div>
                                    <span class="text-gray-400">
                                        좋아요 수:{" "}
                                    </span>
                                    {genreData[genre][
                                        "totalLikes"
                                    ].toLocaleString()}
                                </div>
                                <div class="ml-4">
                                    <span class="text-gray-400">
                                        평균 좋아요 수:{" "}
                                    </span>
                                    {genreData[genre][
                                        "avgLikes"
                                    ].toLocaleString()}
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div>
                                    <span class="text-gray-400">선작수: </span>
                                    {genreData[genre][
                                        "totalFavs"
                                    ].toLocaleString()}
                                </div>
                                <div class="ml-4">
                                    <span class="text-gray-400">
                                        평균 선작수:{" "}
                                    </span>
                                    {genreData[genre][
                                        "avgFavs"
                                    ].toLocaleString()}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )
                )}
                {/* {#each Object.keys(genreData) as genre}
            {#if genre != "모든 장르"}
                <div class="mt-3 p-3 font-light rounded-md text-gray-200 bg-white bg-opacity-5">
                    <div class="text-xl">{genre}</div>
                    <div class="mt-auto ml-auto">{genreData[genre]["novelCount"].toLocaleString()} 작품</div>
                    <div class="mt-2 grid grid-cols-2">
                        <div><span class="text-gray-400">조회수: </span>{genreData[genre]["totalViews"].toLocaleString()}</div>
                        <div class="ml-4"><span class="text-gray-400">평균 조회수: </span>{genreData[genre]["avgViews"].toLocaleString()}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div><span class="text-gray-400">좋아요 수: </span>{genreData[genre]["totalLikes"].toLocaleString()}</div>
                        <div class="ml-4"><span class="text-gray-400">평균 좋아요 수: </span>{genreData[genre]["avgLikes"].toLocaleString()}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div><span class="text-gray-400">선작수: </span>{genreData[genre]["totalFavs"].toLocaleString()}</div>
                        <div class="ml-4"><span class="text-gray-400">평균 선작수: </span>{genreData[genre]["avgFavs"].toLocaleString()}</div>
                    </div>
                </div>
            {/if}
        {/each} */}
            </div>
        </div>
    );
}

export default GenreTable;
