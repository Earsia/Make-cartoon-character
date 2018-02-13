!function(){
    let speed = 20;
    let $button = $("Button");
    $button.on("click", function(){
        console.log(this)
        let chooseBtn = $(this);
        $button.removeClass('active');
        chooseBtn.addClass("active");
        let idName= chooseBtn.attr("id");
        switch (idName) {
            case 'slow':
                speed = 150;
                break;
            case 'middle':
                speed = 50;
                break;
            case 'fast':
                speed = 10;
                break;
        }
    })

    function writeCode(prefix, code, fn ){
        let container = document.querySelector("#code");
        let styleTag = document.querySelector("#styleTag");
        let n =0;
        let id= setTimeout(function run (){
            n += 1;
            container.innerHTML = code.substring(0,n);
            styleTag.innerHTML = code.substring(0,n);
            container.scrollTop = container.scrollHeight;
            if(n < code.length){
               id = setTimeout(run,speed);
            } else {
                let audio = document.getElementsByTagName("audio")[0];
                audio.play()
                console.log(11111111111)
                fn && fn.call();
            }
        },speed)
    }
    let code = `
    /*今天，用代码给你画一只皮卡丘
    *首先，画一张皮卡丘的皮
     */
    .preview {
        height: 100%;
        border:1px solid green;
        background: #FEE433;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /*
     *接着，画鼻子
     */
    .nose {
        height: 0;
        width: 0;
        border-style: solid;
        border-color: black transparent transparent;
        border-width: 15px;
        border-radius:100%;
        position: absolute;
        top: 28px;
        left: 50%;
        margin-left: -15px;
    }
    /*
    *然后，画眼睛
     */
    .eye {
        width: 50px;
        height: 50px;
        background: #2E2E2E;
        border: 3px solid #000;
        border-radius:100%;
        position: absolute;
    }
    /*
     *这是眼中的亮光
     */
    .eye::before{
        content:"";
        display:block;
        width:24px;
        height:24px;
        border:2px solid #000;
        border-radius: 100%;
        background: white;
        position: absolute;
        left: 8px;
    }
    /*
     *分别调整左右眼的位置
     */
    .eye.left {
        left: 75%;
        margin-left: -25px;
    }
    .eye.right {
        right: 75%;
        margin-right: -25px;
    }
    /*
     *要画脸蛋了
     */
    .face {
        width: 80px;
        height: 80px;
        background: #FC0D1C;
        border: 2px solid #000;
        border-radius: 100%;
        position: absolute;
        top:60%;
    }
    /*
    *分别调整左右脸蛋的位置
     */
    .face.left {
        left: 15%;
        margin-left:-40px;
    }
    .face.right {
        right: 15%;
        margin-right: -40px
    }
    /*
     *接着，画上嘴唇
     */
    .upperLip {
        width: 90px;
        height:35px;
        border: 3px solid #000;
        position: absolute;
        top: 50px;
        background: #FEE433;
    }
    /*
     *画左上嘴唇的曲线
     */
    .upperLip.left{
        border-bottom-left-radius: 50px 40px;
        border-top: none;
        border-right: none;
        right: 50%;
        transform: rotate(-20deg);
    }
    /*
     *画右上嘴唇的曲线
     */
    .upperLip.right{
        border-bottom-right-radius: 50px 40px;
        border-top: none;
        border-left: none;
        left: 50%;
        transform: rotate(20deg);
    }
    /*
     *要画下嘴唇啦
     */
    .lowerLip-wrapper {
        position: absolute;
        top: 66px;
        left: 50%;
        margin-left: -150px;
        height: 145px;
        width: 300px;
        overflow: hidden;
    }
    .lowerLip {
        width: 300px;
        height: 2000px;
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -150px;
        border: 3px solid #000;
        border-radius: 80%;
        background: #990513;
        overflow: hidden
    }
    /*
     *最后，给它画上舌头
     */
    .lowerLip::after {
        content:"";
        position: absolute;
        bottom: -20px;
        left:50%;
        margin-left:-60px;
        width: 120px;
        height:120px;
        background: #FC4A62;
        border-radius: 50%
    }
    /*
     *大功告成，皮卡丘！！！
     */
`
    writeCode('',code)
}.call()