/**
 * 游戏界面参与者
 */
function candidate(ctx,imgSrc){
	this.ctx = ctx;
	this.img =  new Image();
	this.img.src = imgSrc;
	this.x = 0;
	this.y = 0;
}
//this.prototype.draw = function(){};
