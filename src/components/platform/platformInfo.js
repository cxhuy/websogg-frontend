import React from "react";

function PlatformInfo({ platformInfoData }) {
    return (
        <div class="container px-3 mt-4 py-2.5">
            <div class="flex flex-col">
                <div>
                    <span class="text-5xl font-light text-gray-200">
                        {platformInfoData.platformName}
                    </span>
                </div>
                <div class="mt-2">
                    <span class="pl-0.5 text-xl font-light text-gray-400">
                        {platformInfoData.platformYear}년{" "}
                        {platformInfoData.platformMonth}월 부터 서비스
                    </span>
                </div>
                <div class="mt-4 pl-0.5 grid grid-cols-2 xl:grid-cols-4">
                    <div class="mt-4 flex flex-col text-left">
                        <div>
                            <span class="text-2xl font-extralight text-gray-200">
                                총 조회수
                            </span>
                        </div>
                        <div class="mt-1">
                            <span class="text-3xl lg:text-4xl font-light text-gray-100">
                                {platformInfoData.totalViews.toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <div class="mt-4 flex flex-col text-left">
                        <div>
                            <span class="text-2xl font-extralight text-gray-200">
                                총 작품수
                            </span>
                        </div>
                        <div class="mt-1">
                            <span class="text-3xl lg:text-4xl font-light text-gray-100">
                                {platformInfoData.totalNovels.toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <div class="mt-4 flex flex-col text-left">
                        <div>
                            <span class="text-2xl font-extralight text-gray-200">
                                평균 조회수
                            </span>
                        </div>
                        <div class="mt-1">
                            <span class="text-3xl lg:text-4xl font-light text-gray-100">
                                {platformInfoData.avgViews.toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <div class="mt-4 flex flex-col text-left">
                        <div>
                            <span class="text-2xl font-extralight text-gray-200">
                                평균 연재수
                            </span>
                        </div>
                        <div class="mt-1">
                            <span class="text-3xl lg:text-4xl font-light text-gray-100">
                                {platformInfoData.avgChapters.toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlatformInfo;
