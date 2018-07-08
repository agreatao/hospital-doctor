const app = getApp();

Page({
    data: {
        content: null,
        zx: null,
        user: null,
        doctor: null,
        messages: null
    },
    onLoad: function (options) {
        this.setData({
            doctor: app.globalData.userinfo,
            zx: options['ID']
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
    },
    change: function (e) {
        this.setData({
            content: e.detail.value
        })
    },
    submit: function () {
        wx.request({
            url: "https://www.dszejt.com/ws/ws_xcx.asmx/Set_XCX_YSZX_LYSC",
            data: {
                strZXID: this.data.zx,
                strLYDX: "Y",
                strLYRID: this.data.doctor['医生ID'],
                strNR: this.data.content,
                strKey: "C1BC7666E5C74BD384196-AD1532102C1"
            },
            method: "POST",
            dataType: "JSON",
            success: (res) => {
                var result = JSON.parse(JSON.parse(res.data).d);
                if (result.code == 0) {
                    this.data.messages.push({
                        '留言ID': result['留言ID'],
                        '内容': this.data.content,
                        '留言对象': 'Y',
                        '留言人ID': this.data.doctor['医生ID'],
                        '姓名': this.data.doctor['姓名'],
                        '头像': this.data.doctor['头像']
                    })
                    this.setData({
                        messages: this.data.messages,
                        content: ''
                    })
                } else {
                    // 留言失败
                }
            }
        })
    }
})