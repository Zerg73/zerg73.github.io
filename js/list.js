

function ChangeDoc(num) {
    switch (num) {
        case 1:
            document.getElementById("doc").innerHTML = "<h1>物品栏</h1><p>本网站提供一些基础的网络知识及其他的相关内容。</p><p>其实就是我自己写的一些小项目啦。</p>";
            break;
        case 2:
        case 3:
        case 4:
            document.getElementById("doc").innerHTML = "<h1>施工中</h1>";
            break;
        case 5:
            document.getElementById("doc").innerHTML = "<a href=\"game/三消/index.html\" style=\"text-decoration:none;\">三消</a>";


    }

}