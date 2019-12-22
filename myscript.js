// .ytp-ad-moduleのDOMの監視
const observer_Ad_Module = new MutationObserver(() => {
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

const ad_module = document.getElementsByClassName('ytp-ad-module')[0]

observer_Ad_Module.observe(ad_module, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style']
});
