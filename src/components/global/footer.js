import React from "react";

function footer() {
    return (
        <div class="container w-screen mx-auto px-3 py-8">
            <div>
                <span class="text-gray-400 pl-0.5 text-sm font-normal">
                    © 2022 <a href="https://webso.gg">Webso.gg</a>. All Rights
                    Reserved.
                </span>
            </div>
            <div>
                <span class="text-gray-400 pl-0.5 text-sm font-normal">
                    본 서비스 운영자는 사이트 내에 등장하는 웹소설 플랫폼들과는
                    전혀 관계가 없으며, 서비스에서 제공하는 정보는 때에 따라
                    정확하지 않을 수 있습니다.
                </span>
            </div>
        </div>
    );
}

export default footer;
