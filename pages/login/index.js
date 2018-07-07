const app = getApp();

Page({
    data: {
        cardId: '',
        password: ''
    },

    // 获取输入账号
    usernameInput: function (e) {
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
                title: "身份证不能为空",
                icon: "none"
            })
        } else if (this.data.password.length == 0) {
            wx.showToast({
                title: "密码不能为空",
                icon: "none"
            })
        } else {
            wx.request({
                url: "https://www.dszejt.com/ws/ws_xcx.asmx/GetEjtYSLogin",
                data: {
                    strGH: this.data.cardId, //有数据测试账号"421003198210020013"
                    strPwd: this.data.password, // 111111
                    strKey: "C1BC7666E5C74BD384196-AD1532102C1"
                },
                method: "POST",
                dataType: "JSON",
                success: (res) => {
                    if (JSON.parse(JSON.parse(res.data).d)) {
                        wx.request({
                            url: "https://www.dszejt.com/ws/ws_xcx.asmx/GetEjtYSData",
                            data: {
                                strGH: this.data.cardId,
                                strKey: "C1BC7666E5C74BD384196-AD1532102C1"
                            },
                            method: "POST",
                            dataType: "JSON",
                            success: (res) => {
                                app.globalData.userinfo = JSON.parse(JSON.parse(res.data).d)[0];
                                wx.switchTab({
                                    url: '/pages/consult/index'
                                })
                            }
                        })
                    } else {
                        wx.showToast({
                            title: "用户名或密码错误",
                            icon: "none"
                        })
                    }
                }
            })
        }
    }
})