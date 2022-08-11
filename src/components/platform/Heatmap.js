import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip';

function Heatmap({ heatmapData, platformGenres }) {
    const days = ["월", "화", "수", "목", "금", "토", "일"];

    const [heatmapType, setHeatmapType] = useState("조회수");
    const [heatmapGenre, setHeatmapGenre] = useState("모든 장르");

    const changeHeatmapType = event => {
        // console.log(event.target.value);
        setHeatmapType(event.target.value);
    };

    const changeHeatmapGenre = event => {
        // console.log(event.target.value);
        setHeatmapGenre(event.target.value);
    };

  return (
    <div class="container px-3 mt-4 xl:mt-8 py-2.5">
    <div class="hidden lg:block">
        <div>
            <span class="text-3xl font-light text-gray-200">시간대별 {heatmapType} 통계</span>
        </div>
        <div>
            <span class="text-lg font-light text-gray-400">해당 시간에 업로드한 시점으로부터 1시간동안 집계된 {heatmapType}</span>
        </div>

        <div class="flex mt-4">
            <select value={heatmapType} onChange={changeHeatmapType} class="block py-1 px-0 w-1/6 text-sm bg-transparent border-0 border-b-2 text-gray-400 border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option value="조회수">조회수</option>
                <option value="작품수">작품수</option>
            </select>
            <select value={heatmapGenre} onChange={changeHeatmapGenre} class="ml-4 block py-1 px-0 w-1/6 text-sm bg-transparent border-0 border-b-2 text-gray-400 border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                {
                    platformGenres.map((genre) => 
                        <option value={genre}>{genre}</option>
                    )
                }
            </select>
        </div>
        <div class="mt-3 flex flex-col gap-1.5">
            {
                days.map((day, dayIndex) =>
                    <div class="flex gap-1.5">
                        <span class="mr-2 text-xl font-light text-gray-200">{day}</span>
                        {
                            heatmapType === "조회수" ?
                            Object.entries(heatmapData[heatmapGenre]["views"][dayIndex]).map(([key, views], viewIndex) =>
                                <>
                                    <div data-tip data-for={"view_" + day + '_' + key} class="w-7 h-7 rounded-md" style={{backgroundColor: "hsl(100, " + (heatmapData[heatmapGenre].mostViews === 0 ? 0 : views/heatmapData[heatmapGenre].mostViews*100) + "%, 50%)"}}></div>
                                    <ReactTooltip id={"view_" + day + '_' + key} place='bottom' type='dark' effect='solid'>
                                        {String(viewIndex).padStart(2, '0') + ":00 ~ " + String(viewIndex + 1).padStart(2, '0') + ":00"}<br/>
                                        조회수 : {views.toLocaleString()}<br/>
                                        작품수 : {heatmapData[heatmapGenre]["uploads"][dayIndex][viewIndex].toLocaleString()}
                                    </ReactTooltip>
                                </>
                            ) : 
                            Object.entries(heatmapData[heatmapGenre]["uploads"][dayIndex]).map(([key, uploads], uploadIndex) =>
                                <>
                                    <div data-tip data-for={"upload_" + day + '_' + key} class="w-7 h-7 rounded-md" style={{backgroundColor: "hsl(35, " + (heatmapData[heatmapGenre].mostUploads === 0 ? 0 : uploads/heatmapData[heatmapGenre].mostUploads*100) + "%, 50%)"}}></div>
                                    <ReactTooltip id={"upload_" + day + '_' + key} place='bottom' type='dark' effect='solid'>
                                        {String(uploadIndex).padStart(2, '0') + ":00 ~ " + String(uploadIndex + 1).padStart(2, '0') + ":00"}<br/>
                                        작품수 : {uploads.toLocaleString()}<br/>
                                        조회수 : {heatmapData[heatmapGenre]["views"][dayIndex][uploadIndex].toLocaleString()}
                                    </ReactTooltip>
                                </>
                            )
                        }
                    </div>
                )
            }
        </div>
        {/* <div class="mt-3 flex flex-col gap-1.5">
            {#each days as day, dayIndex}
                <div class="flex gap-1.5">
                    <span class="mr-2 text-xl font-light text-gray-200">{day}</span>
                    {#if heatmapType == "조회수"}
                        {#each Object.values(heatmapData[heatmapGenre]["views"][dayIndex]) as views, index}
                            <Tooltip content="{String(index).padStart(2, '0') + ":00 ~ " + String(index + 1).padStart(2, '0') + ":00\n"}조회수 : {views.toLocaleString() + '\n'}작품수 : {heatmapData[heatmapGenre]["uploads"][dayIndex][index].toLocaleString()}">
                                <div class="w-7 h-7 rounded-md" style="background-color: hsl(100, {views/heatmapData[heatmapGenre].mostViews*100}%, 50%);"></div>
                            </Tooltip>
                        {/each}
                    {:else}
                        {#each Object.values(heatmapData[heatmapGenre]["uploads"][dayIndex]) as uploads, index}
                            <Tooltip content="{String(index).padStart(2, '0') + ":00 ~ " + String(index + 1).padStart(2, '0') + ":00\n"}작품수 : {uploads.toLocaleString() + '\n'}조회수 : {heatmapData[heatmapGenre]["views"][dayIndex][index].toLocaleString()}">
                                <div class="w-7 h-7 rounded-md" style="background-color: hsl(35, {uploads/heatmapData[heatmapGenre].mostUploads*100}%, 50%);"></div>
                            </Tooltip>
                        {/each}
                    {/if}
                </div>
            {/each}
        </div> */}
    </div>
    <div class="mt-0 lg:mt-8">
        <span class="text-3xl font-light text-gray-200">업로드하기 좋은 시간대</span>
    </div>
    <div>
        <span class="text-lg font-light text-gray-400">평균 조회수가 높은 시간대</span>
    </div>
    <div class="flex mt-2">
        {
            Object.entries(heatmapData[heatmapGenre].bestTimes).map(([key, value]) =>
                <div class="w-fit p-2 mr-3 rounded-md bg-white bg-opacity-5">
                    <span class="text-xl font-light text-gray-200">{value}</span>
                </div>
            )
        }
    </div>
    {/* <div class="flex mt-2">
        {#each heatmapData[heatmapGenre].bestTimes as time}
            <div class="w-fit p-2 mr-3 rounded-md bg-white bg-opacity-5">
                <span class="text-xl font-light text-gray-200">{time}</span>
            </div>
        {/each}
    </div> */}
</div>
  )
}

export default Heatmap