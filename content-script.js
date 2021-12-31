window.onload = function () {
    let findTargetTag = 'pre';
    let replaceTargetTag = 'div';
    let preList = document.getElementsByTagName(findTargetTag);
    if (preList.length > 0) {
        Object.values(preList).forEach(function (obj) {
            let div = document.createElement(replaceTargetTag);
            div.className = obj.className;
            div.innerHTML = obj.innerHTML;
            obj.after(div);
            obj.remove();
        })
        console.log('======================');
        console.log('======it`s work!======');
        console.log('======================');
    }
}