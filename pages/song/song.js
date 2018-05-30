
Page({
  data: {
    poster: '',
    name: '',
    author: '',
    src: ''
  },

  onLoad: function (option) {

    var that = this;
    wx.request({
      url: 'https://api.wenthywang.cn/music/' + option.mid,
      method: 'GET',
      success: function (res) {
        that.setData({
          name: res.data.name,
          src:res.data.url,
          poster: res.data.album_Image,
          author: res.data.author
        })
 
      }

    })

  },
  
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.play()
  },
    audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio90: function () {
    this.audioCtx.seek(90)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})
