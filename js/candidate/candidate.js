/**
 * 游戏界面参与者
 */
function candidate(ctx,imgSrc,x,y){
	this.ctx = ctx;
	this.img = new Image();
	this.img.src = imgSrc;
	this.x = x;
	this.y = y;
	this.toDiscrad = false;
}
//基本画图方式
candidate.prototype.draw = function(){}
//获取中心点
candidate.prototype.getCenter = function(){
	return new Point(this.x+this.img.width/2,this.y+this.img.height/2);
}
