const app = getApp();

Page({
    data: {
        newestData: null
    },
    onShow: function () {
        wx.request({
            url: "https://www.dszejt.com/ws/ws_xcx.asmx/Get_XCX_YSZX_ZXList",
            data: {
                strEmpID: app.globalData.userinfo['医生ID'],
                strTitle: '',
                strKey: "C1BC7666E5C74BD384196-AD1532102C1"
            },
            method: "POST",
            dataType: "JSON",
            success: (res) => {
                this.setData({
                    newestData: JSON.parse(JSON.parse(res.data).d)
                })
            }
        })
    }
})