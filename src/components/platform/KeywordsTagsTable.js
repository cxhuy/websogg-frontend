import React from 'react'

function KeywordsTagsTable({ keywordsTagsData }) {
  return (
    <div class="container px-3 py-2.5 mt-6">
    <div class={Object.values(keywordsTagsData.tagData).length > 0 ? "grid md:grid-cols-2 gap-4" : ""}>
        <div>
            <div>
                <span class="text-3xl font-light text-gray-200">인기 키워드</span>
            </div>
            <table class="mt-3 w-full table-auto font-light text-gray-200">
                <thead class="bg-white bg-opacity-10">
                    <tr class="text-left">
                        <th class="w-1/3 p-3 font-normal">키워드</th>
                        <th class="w-1/3 p-3 font-normal">작품수</th>
                        <th class="w-1/3 p-3 font-normal">평균 조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(keywordsTagsData.keywordData).map(([key, keyword]) =>
                            <tr class="bg-white bg-opacity-5">
                                {
                                    Object.entries(keyword).map(([key, data]) =>
                                        <td class="p-3">{data.toLocaleString()}</td>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        {
            Object.values(keywordsTagsData.tagData).length > 0 ?
            <div class="mt-6 md:mt-0">
                <div>
                    <span class="text-3xl font-light text-gray-200">인기 태그</span>
                </div>
                <table class="mt-3 w-full table-auto font-light text-gray-200">
                    <thead class="bg-white bg-opacity-10">
                        <tr class="text-left">
                            <th class="w-1/3 p-3 font-normal">태그</th>
                            <th class="w-1/3 p-3 font-normal">작품수</th>
                            <th class="w-1/3 p-3 font-normal">평균 조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.entries(keywordsTagsData.tagData).map(([key, tag]) =>
                                <tr class="bg-white bg-opacity-5">
                                    {
                                        Object.entries(tag).map(([key, data]) =>
                                            <td class="p-3">{data.toLocaleString()}</td>
                                        )
                                    }
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>:<></>
        }
        {/* {#if Object.values(keywordsTagsData.tagData).length > 0}
            <div class="mt-6 md:mt-0">
                <div>
                    <span class="text-3xl font-light text-gray-200">인기 태그</span>
                </div>
                <table class="mt-3 w-full table-auto font-light text-gray-200">
                    <thead class="bg-white bg-opacity-10">
                        <tr class="text-left">
                            <th class="w-1/3 p-3 font-normal">태그</th>
                            <th class="w-1/3 p-3 font-normal">작품수</th>
                            <th class="w-1/3 p-3 font-normal">평균 조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each Object.values(keywordsTagsData.tagData) as tag}
                            <tr class="bg-white bg-opacity-5">
                                {#each Object.values(tag) as data}
                                    <td class="p-3">{data.toLocaleString()}</td>
                                {/each}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {/if} */}
    </div>
</div>
  )
}

export default KeywordsTagsTable