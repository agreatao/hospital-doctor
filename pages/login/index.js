// pages/login/index.js
Page({
  data: {
    cardId: '',
    password: ''
  },

  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      cardId: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  // 登录
  login: function () {
    if (this.data.cardId.length == 0) {
      wx.showToast({
        title: "工号不能为空",
        icon: 'loading'
      })
    } else if (this.data.password.length == 0) {
      wx.showToast({
        title: "密码不能为空",
        icon: 'loading'
      })
    } else {
      // wx.request({
      //   url: "https://www.dszejt.com/ws/ws_xcx.asmx/GetEjtUserLogin",
      //   data: {
      //     strSFZH: this.data.cardId,//有数据测试账号"650202192611260017"
      //     strPwd: this.data.password,
      //     strKey: "C1BC7666E5C74BD384196-AD1532102C1"
      //   },
      //   method: "POST",
      //   dataType: "JSON",
      //   success: (res) => {

      //   }
      // })
      wx.switchTab({
        url: '../consult/index'
      })
    }
  }
})