$(function(){
    // 初始化又称为滚动条  此方法定义在 scroll.js 中
    // 自动滚动到页面底部
    resetui();

    // 为发送按钮绑定鼠标点击事件
    $('#btnSend').on('click',function(){
        var text = $('#ipt').val().trim();  // 获取输入的数据
        if(text.length <= 0){ // 如果输入的内容为0或空格，则清空内容 
            return $('#ipt').val('');
        }
        // 如果用户输入了内容，则将内容追加到页面上
        $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>'+text+'</span></li>')
        $('#ipt').val('');
        resetui();  // 重置滚动条的位置
    })




})