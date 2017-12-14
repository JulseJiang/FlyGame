/**
 * bullets 子弹对象
 */
function bullet(ctx,imgSrc,x,y){
	this.ctx = ctx;
	this.img = new Image();
	this.img.src = imgSrc;
	this.x = x;
	this.y = y;
	this.toDiscrad = false;
}
bullet.prototype.draw = function(){
	console.log('画子弹：bullet.prototype.draw');
	this.y-=3;
	this.ctx.drawImage(this.img,this.x-this.img.width/2,this.y);
	
	if(this.y<-10){
		this.toDiscrad = true;//标记是否丢弃该子弹
	}
}
bullet.prototype.getCenter = function(){
	return new Point(this.x+this.img.width/2,this.y+this.img.height/2);
}
