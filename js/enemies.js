/**
 * enemies
 */
function enemies(ctx,imgSrc,x,y){
	this.ctx = ctx;
	this.img =  new Image();
	this.img.src = imgSrc;
	this.x = x;
	this.y = y;
}
enemies.prototype.draw = function(){
	this.ctx.drawImage(this.img,this.x,this.y,this.img.width/2,this.img.height/2);
}
