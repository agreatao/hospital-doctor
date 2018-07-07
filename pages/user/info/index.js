const app = getApp();

Page({
    data: {
        user: null
    },
    onShow: function () {
        this.setData({
            user: app.globalData.userinfo
        })
    }
})