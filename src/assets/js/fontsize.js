(function (win, doc) {
  function setFontSize () {
    var winWidth = window.innerWidth
    var size = winWidth / 7.2
    doc.documentElement.style.fontSize = (size < 60 ? size : 60) + 'px'
  }
  var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize'
  var timer = null

  win.addEventListener(evt, function () {
    clearTimeout(timer)
    timer = setTimeout(setFontSize, 300)
  }, false)

  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(timer)
      timer = setTimeout(setFontSize, 300)
    }
  }, false)

    // 初始化
  setFontSize()
}(window, document))
