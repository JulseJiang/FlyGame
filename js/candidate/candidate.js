/**
 * 游戏界面参与者
 */
function candidate(ctx,imgSrc){
	this.ctx = ctx;
	this.img = new Image();
	this.img.src = imgSrc;
	this.x = x;
	this.y = y;
	this.toDiscrad = false;
}

bullet.prototype.draw = function(){}
bullet.prototype.getCenter = function(){
	return new Point(this.x+this.img.width/2,this.y+this.img.height/2);
}
