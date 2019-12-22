// 全体のDOMの監視
const observer_body = new MutationObserver(() => {
    // 監視ターゲットの取得
    /*--- 動画広告 ---*/
    var button = document.getElementsByClassName('ytp-ad-skip-button-container')
    /*--- オーバーレイ広告 ---*/
    var overlay = document.getElementsByClassName('ytp-ad-overlay-close-container')


    // 監視の開始
    if (button.length > 0) {
        Array.prototype.forEach.call(button, element => {
            if (element.style.display !== "none") {
                console.log("Skip ad")
                element.click()
            }
        });
    }

    if (overlay.length > 0) {
        Array.prototype.forEach.call(overlay, element => {
            console.log("Close ad")
            element.click()
        });
    }

})

observer_body.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style']
});
