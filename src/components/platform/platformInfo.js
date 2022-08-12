import React from "react";

function PlatformInfo({ platformInfoData }) {
    return (
        <div className="container px-3 mt-4 py-2.5">
            <div className="flex flex-col">
                <div>
                    <span className="text-5xl font-light text-gray-200">
                        {platformInfoData.platformName}
                    </span>
                </div>
                <div className="mt-2">
                    <span className="pl-0.5 text-xl font-light text-gray-400">
                        {platformInfoData.platformYear}년{" "}
                        {platformInfoData.platformMonth}월 부터 서비스
                    </span>
                </div>
                <div className="mt-4 pl-0.5 grid grid-cols-2 xl:grid-cols-4">
                    <div className="mt-4 flex flex-col text-left">
                        <div>
                            <span className="text-2xl font-extralight text-gray-200">
                                총 조회수
                            </span>
                        </div>
                        <div className="mt-1">
                            <span className="text-3xl lg:text-4xl font-light text-gray-100">
                                {platformInfoData.totalViews.toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col text-left">
                        <div>
                            <span className="text-2xl font-extralight text-gray-200">
                                총 작품수
                            </span>
                        </div>
                        <div className="mt-1">
                            <span className="text-3xl lg:text-4xl font-light text-gray-100">
                                {platformInfoData.totalNovels.toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col text-left">
                        <div>
                            <span className="text-2xl font-extralight text-gray-200">
                                평균 조회수
                            </span>
                        </div>
                        <div className="mt-1">
                            <span className="text-3xl lg:text-4xl font-light text-gray-100">
                                {platformInfoData.avgViews.toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col text-left">
                        <div>
                            <span className="text-2xl font-extralight text-gray-200">
                                평균 연재수
                            </span>
                        </div>
                        <div className="mt-1">
                            <span className="text-3xl lg:text-4xl font-light text-gray-100">
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
