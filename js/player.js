/**
 * 飞机对象--玩家对象
 */

function player(ctx,imgSrc){
	this.ctx = ctx;
	this.img = new Image();
	this.img.src = imgSrc;
	this.x = 0;
	this.y = 0;
}
player.prototype.draw = function(){
	console.log('2.画飞机');
	this.x = (600-this.img.width)/2;
	this.y = 450-this.img.height;
	this.ctx.drawImage(this.img,this.x,this.y);
}
player.prototype.shoot = function(){
	
}
