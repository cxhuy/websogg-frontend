import React from "react";

function KeywordsTagsTable({ keywordsTagsData }) {
    return (
        <div className="container px-3 py-2.5 mt-6">
            <div
                className={
                    Object.values(keywordsTagsData.tagData).length > 0
                        ? "grid md:grid-cols-2 gap-4"
                        : ""
                }
            >
                <div>
                    <div>
                        <span className="text-3xl font-light text-gray-200">
                            인기 키워드
                        </span>
                    </div>
                    <table className="mt-3 w-full table-auto font-light text-gray-200">
                        <thead className="bg-white bg-opacity-10">
                            <tr className="text-left">
                                <th className="w-1/3 p-3 font-normal">
                                    키워드
                                </th>
                                <th className="w-1/3 p-3 font-normal">
                                    작품수
                                </th>
                                <th className="w-1/3 p-3 font-normal">
                                    평균 조회수
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(keywordsTagsData.keywordData).map(
                                ([key, keyword]) => (
                                    <tr className="bg-white bg-opacity-5">
                                        {Object.entries(keyword).map(
                                            ([key, data]) => (
                                                <td className="p-3">
                                                    {data.toLocaleString()}
                                                </td>
                                            )
                                        )}
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
                {Object.values(keywordsTagsData.tagData).length > 0 ? (
                    <div className="mt-6 md:mt-0">
                        <div>
                            <span className="text-3xl font-light text-gray-200">
                                인기 태그
                            </span>
                        </div>
                        <table className="mt-3 w-full table-auto font-light text-gray-200">
                            <thead className="bg-white bg-opacity-10">
                                <tr className="text-left">
                                    <th className="w-1/3 p-3 font-normal">
                                        태그
                                    </th>
                                    <th className="w-1/3 p-3 font-normal">
                                        작품수
                                    </th>
                                    <th className="w-1/3 p-3 font-normal">
                                        평균 조회수
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(keywordsTagsData.tagData).map(
                                    ([key, tag]) => (
                                        <tr className="bg-white bg-opacity-5">
                                            {Object.entries(tag).map(
                                                ([key, data]) => (
                                                    <td className="p-3">
                                                        {data.toLocaleString()}
                                                    </td>
                                                )
                                            )}
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default KeywordsTagsTable;
