/**
 * 游戏背景类
 */

function backGround(ctx,imgSrc){
	this.ctx = ctx;
	this.img = new Image();
	this.img.src = imgSrc;
	this.x = 0;
	this.y = 0;//假设背景图片和游戏面板一样大，只需要起点位置
}
backGround.prototype.draw = function(){
//	console.log('1.画背景');
	this.ctx.drawImage(this.img,this.x,this.y);
	this.ctx.drawImage(this.img,this.x,this.y-this.img.height);
	this.y++;
	if(this.y >= 450){
		this.y=0;
	}
}
