import React from "react";

function UploadPeriodTable({ uploadPeriodData }) {
    return (
        <div className="container px-3 py-2.5 mt-6">
            <div>
                <span className="text-3xl font-light text-gray-200">
                    연재 주기별 통계
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
                        {Object.entries(uploadPeriodData).map(
                            ([uploadPeriod, value]) => (
                                <tr
                                    key={"desktop_" + uploadPeriod}
                                    className="bg-white bg-opacity-5"
                                >
                                    {uploadPeriod === "7" ? (
                                        <td className="p-3">
                                            주 {uploadPeriod}회 이상
                                        </td>
                                    ) : (
                                        <td className="p-3">
                                            주 {uploadPeriod}회
                                        </td>
                                    )}
                                    {Object.entries(
                                        uploadPeriodData[uploadPeriod]
                                    ).map(([key, data]) => (
                                        <td
                                            key={
                                                "desktop_" +
                                                uploadPeriod +
                                                "_" +
                                                key
                                            }
                                            className="p-3"
                                        >
                                            {data.toLocaleString()}
                                        </td>
                                    ))}
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
            <div className="lg:hidden">
                {Object.entries(uploadPeriodData).map(
                    ([uploadPeriod, value]) => (
                        <div
                            key={"mobile" + uploadPeriod}
                            className="mt-3 p-3 font-light rounded-md text-gray-200 bg-white bg-opacity-5"
                        >
                            {uploadPeriod === "7" ? (
                                <div className="text-xl">
                                    주 {uploadPeriod}회 이상
                                </div>
                            ) : (
                                <div className="text-xl">
                                    주 {uploadPeriod}회
                                </div>
                            )}
                            <div className="mt-auto ml-auto">
                                {uploadPeriodData[uploadPeriod][
                                    "novelCount"
                                ].toLocaleString()}{" "}
                                작품
                            </div>
                            <div className="mt-2 grid grid-cols-2">
                                <div>
                                    <span className="text-gray-400">
                                        조회수:{" "}
                                    </span>
                                    {uploadPeriodData[uploadPeriod][
                                        "totalViews"
                                    ].toLocaleString()}
                                </div>
                                <div className="ml-4">
                                    <span className="text-gray-400">
                                        평균 조회수:{" "}
                                    </span>
                                    {uploadPeriodData[uploadPeriod][
                                        "avgViews"
                                    ].toLocaleString()}
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div>
                                    <span className="text-gray-400">
                                        좋아요 수:{" "}
                                    </span>
                                    {uploadPeriodData[uploadPeriod][
                                        "totalLikes"
                                    ].toLocaleString()}
                                </div>
                                <div className="ml-4">
                                    <span className="text-gray-400">
                                        평균 좋아요 수:{" "}
                                    </span>
                                    {uploadPeriodData[uploadPeriod][
                                        "avgLikes"
                                    ].toLocaleString()}
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div>
                                    <span className="text-gray-400">
                                        선작수:{" "}
                                    </span>
                                    {uploadPeriodData[uploadPeriod][
                                        "totalFavs"
                                    ].toLocaleString()}
                                </div>
                                <div className="ml-4">
                                    <span className="text-gray-400">
                                        평균 선작수:{" "}
                                    </span>
                                    {uploadPeriodData[uploadPeriod][
                                        "avgFavs"
                                    ].toLocaleString()}
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default UploadPeriodTable;
