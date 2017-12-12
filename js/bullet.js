/**
 * bullets 子弹对象
 */
function bullet(ctx,imgSrc,x,y){
	this.ctx = ctx;
	this.img = new Image();
	this.img.src = imgSrc;
	this.x = x;
	this.y = y;
}
bullet.prototype.draw = function(){
	this.y-=3;
	this.ctx.drawImage(this.img,this.x-this.img.width/2,this.y);
	if(this.y<0){
	}
}
