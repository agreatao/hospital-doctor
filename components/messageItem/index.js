Component({
    properties: {
        listData: Array
    },
    methods: {
        longpress: function (e) {
            console.log("a");
            if (e.currentTarget.dataset.del)
                wx.showModal({
                    title: '确定删除吗',
                    cancelText: '取消',
                    confirmText: '确定',
                    confirmColor: "#007aff",
                    success: (e1) => {
                        if (e1.confirm) {
                            wx.request({
                                url: "https://www.dszejt.com/ws/ws_xcx.asmx/Set_XCX_YSZX_LYDEL",
                                data: {
                                    strLYID: e.currentTarget.dataset.id,
                                    strLYRID: e.currentTarget.dataset.sfzh,
                                    strKey: "C1BC7666E5C74BD384196-AD1532102C1"
                                },
                                method: "POST",
                                dataType: "JSON",
                                success: (res) => {
                                    var result = JSON.parse(JSON.parse(res.data).d);
                                    if (result.code == 0) {
                                        wx.showToast({
                                            title: '成功删除',
                                        });
                                        var index = e.currentTarget.dataset.index;
                                        this.data.listData.splice(index, 1);
                                        this.setData({
                                            listData: this.data.listData
                                        })
                                    }
                                }
                            })
                        }
                    }
                })
        }
    }
})