var game = {
	$txtper: null, //百分比文字 
	$pro: null, //百分比div
	$loadScene: null, //加载场景
	$startScene: null, //开始场景
	$winScene: null, //胜利场景
	$loseScene: null, //结束场景
	$gameScene: null, //游戏场景
	keyCode:{ //方向键
		left:37,
		up:38,
		right:39,
		down:40,
		space:32
	},
	keyStatus:[],
	gameStarted:false//游戏是否开始
};

//场景切换-缓慢切入
game.sceneFadein = function($scene) {
	if($scene) {
		$scene.addClass("scence_fadein");
	}
}

//场景切换-scene1关闭，scene2显示
game.changeScene = function($scene1, $scene2) {
	if($scene1 && $scene2) {
		$scene1.hide();
		$scene2.show();
	}
}
//键盘绑定
game.bindKey = function(){
	$(document).keydown(function(e){
		console.log('press key:'+e.which);
		if(!game.gameStarted){
			game.gameStarted = true;
			console.log('game started...');
			game.changeScene(game.$startScene,game.$gameScene);
			director.gameCtx = $('#gameCanvas')[0].getContext('2d');
//			alert(director.gameCtx);
			director.back = new backGround(director.gameCtx,director.imgs[7]);
//			飞机对象--玩家
			director.player = new player(director.gameCtx,director.imgs[2]);
//			敌人
			director.enemies[0] = new enemies(director.gameCtx,director.imgs[2],200,400);
			director.playGame();
		}
		else{
			game.keyStatus[e.which] = true;
		}
	}).keyup(function(e){
		game.keyStatus[e.which] = false;
	});
}
//页面加载完成后执行
$(function() {
	//获取页面各场景对象及控制对象(文字及进度)
	game.$txtper = $("#txtper");
	game.$pro = $("#progress");
	game.$startScene = $("#start_scene");
	game.$loadScence = $("#load_scene");
	game.$winScene = $("#win_scene");
	game.$loseScene = $("#lose_scene");
	game.$gameScene = $("#game_scene");
	//预加载所有的图片(只是简单思路，更完善的请访问https://www.createjs.com/docs/preloadjs/classes/LoadQueue.html)
	$.preload(director.imgs, {
		each: function(count) {
			//计算加载进度并显示进度条
			var per = Math.round((count + 1) * 100 / director.imgs.length) + "%";
			game.$txtper.text(per);
			game.$pro.css({
				width: per
			});
		},
		all: function() {
			//加载完成后，显示开始场景（本地显示太快，所以加延时，部署到服务端不用)
			setTimeout(function() {
				game.changeScene(game.$loadScence, game.$startScene);
				game.bindKey();
			}, 100);
		}
	});
});


