/**
 * @name TreeSetting
 */
const defaultSetting = {
    view: {
        addDiyDom: null,
        autoCancelSelected: true,
        dblClickExpand: true,
        expandSpeed: "fast",
        fontCss: {},
        nameIsHTML: false,
        selectedMulti: true,
        showIcon: true,
        showLine: true,
        showTitle: true,
        txtSelectedEnable: false
    },
    data: {
        key: {
            children: "children",
            name: "name",
            title: "",
            url: "url",
            icon: "icon"
        },
        simpleData: {
            enable: false,
            idKey: "id",
            pIdKey: "pId",
            rootPId: null
        },
        keep: {
            parent: false,
            leaf: false
        }
    },
    async: {
        enable: false,
        contentType: "application/x-www-form-urlencoded",
        type: "post",
        dataType: "text",
        url: "",
        autoParam: [],
        otherParam: [],
        dataFilter: null,
        xhrFactory: null
    },
    callback: {
        beforeAsync: null,
        beforeClick: null,
        beforeDblClick: null,
        beforeRightClick: null,
        beforeMouseDown: null,
        beforeMouseUp: null,
        beforeExpand: null,
        beforeCollapse: null,
        beforeRemove: null,

        onAsyncError: null,
        onAsyncSuccess: null,
        onNodeCreated: null,
        onClick: null,
        onDblClick: null,
        onRightClick: null,
        onMouseDown: null,
        onMouseUp: null,
        onExpand: null,
        onCollapse: null,
        onRemove: null
    }
};

export default defaultSetting;
