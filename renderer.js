var timer;

var prize_num = {
    "恐龙蛋": 6,
    "美人鱼尾巴": 4,
    "棒棒糖": 5,
    "巧克力": 5,
    "文具套装": 3,
    "铅笔橡皮": 10,
    "免写作业卡": 5,
    "零食卡": 5,
    "试卷一套": 5,
    "笔记本": 5,
    "快手涂色公仔": 1,
    "机器人小玩具": 5,
    "袁老师的祝福": 1,
    "袁老师的合照": 1,
    "薛老师的合照": 1,
    "杨卓豪妈妈的关爱": 1,
    "免揍卡": 5
}

window.onload = function() {
    var start = document.getElementById('start');
    var pause = document.getElementById('pause');
    var prize = document.getElementById('prize-name');
    var bgm = document.getElementById("bgm");

    var prizes = [];
    for (var key in prize_num) {
        num = prize_num[key];
        for (var i = 0; i < num; i++) {
            prizes.push(key);
        }
    }

    var index = -1
    prize.innerText = prizes[0]
    clearInterval(timer);
    start.onclick = function() {
        if (bgm.paused) {
            bgm.play()
        }
        // delete chosen prize
        if (prizes.length == 1) {
            prize.innerText = "奖池抽干啦~"
        } else {
            if (index != -1) {
                prizes.splice(index, 1)
            }

            timer = setInterval(function() {
                index = Math.floor(Math.random() * prizes.length);
                prize.innerText = prizes[index]
                prize.setAttribute
            }, 50);
        }
    }

    pause.onclick = function() {
        if (!bgm.paused) {
            bgm.pause();
            bgm.currentTime = 0;
        }
        clearInterval(timer);
    }
}