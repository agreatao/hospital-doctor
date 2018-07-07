const app = getApp();

Page({
    data: {
        user: null,
        doctor: null,
        messages: null
    },
    onLoad: function (options) {
        this.setData({
            doctor: app.globalData.userinfo
        })
        wx.request({
            url: "https://www.dszejt.com/ws/ws_xcx.asmx/Get_XCX_YSZX_User_ZXInfo",
            data: {
                strZXID: options['ID'],
                strKey: "C1BC7666E5C74BD384196-AD1532102C1"
            },
            method: "POST",
            dataType: "JSON",
            success: (res) => {
                this.setData({
                    user: JSON.parse(JSON.parse(res.data).d)[0]
                })
            }
        })
        wx.request({
            url: "https://www.dszejt.com/ws/ws_xcx.asmx/Get_XCX_YSZX_ZXInfo_LYList",
            data: {
                strZXID: options['ID'],
                strKey: "C1BC7666E5C74BD384196-AD1532102C1"
            },
            method: "POST",
            dataType: "JSON",
            success: (res) => {
                this.setData({
                    messages: JSON.parse(JSON.parse(res.data).d)
                })
            }
        })
    }
})