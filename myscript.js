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


// ytp-ad-moduleクラスが存在するまで探し続ける
var timer = setInterval(() => {
    var ad_modules = document.getElementsByClassName('ytp-ad-module')
    if (ad_modules.length > 0) {
        console.log("find ytp-ad-module")
        clearInterval(timer)
        observer_Ad_Module.observe(ad_modules[0], {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style']
        })
    }
}, 500);
