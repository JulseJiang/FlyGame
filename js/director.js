var director={
	imgs:["images/explosionEnemy.png",//0
	"images/explosionPlayer.png",//1
	"images/Player.png",//2
	"images/projectile.png",//3
	"images/Rock.png",//4
	"images/SpaceShooter_Lose.png",//5
	"images/SpaceShooter_Win.png",//6
	"images/Stars.png",//7
	"images/Start.png"],//8
	back:null,//背景
	player:null,//玩家
	bullets:[],//子弹对象集合
	enemies:[],//敌人对象集合
	explosionEnemyAudio:null,
	explosionPlayerAudio:null,
	shootAudio:null,//射击音频对象
	backAudio:null,//背景音频对象
	gameCtx:null,//canvas渲染上下文
	score:0,//得分
	gameTimer:null,//刷帧控制器
	playGame:function(){
		console.log('play...');
		this.gameTimer = requestAnimationFrame(gameLoop);//一分钟60帧/16.7ms
	},
	pauseGame:function(){
		cancelAnimationFrame(this.gameTimer);
	}
};
/*游戏主循环*/
function gameLoop(){
	//0.清屏
	console.log('0.清屏');
	director.gameCtx.clearRect(0,0,600,450);
	//1.画背景
//	console.log('1.画背景');
	director.back.draw();
	//2.画飞机
//	console.log('2.画飞机');
	director.player.draw();
	//3.画敌人
	console.log('3.画敌人');
	director.enemies[0].draw();
	//4.画子弹
	console.log('4.画子弹');
	//5.碰撞检测
	console.log('5.碰撞检测');
	//6.画分数
	console.log('6.画分数');
	
	director.gameTimer = requestAnimationFrame(gameLoop);
}
