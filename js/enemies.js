/**
 * enemies
 */
function enemies(ctx,imgSrc,x,y){
	this.ctx = ctx;
	this.img =  new Image();
	this.img.src = imgSrc;
	this.x = x;
	this.y = y;
	//处理爆炸
	this.exploded = false;
	this.explodedImg = new Image();
	this.explodedImg.src = director.imgs[0];
	this.explodedIndex = 0;
}
enemies.prototype.draw = function(){
	if(!this.exploded){
//		this.ctx.drawImage(this.img,this.x,this.y,this.img.width/2,this.img.height/2);
//		this.ctx.drawImage(this.img,this.x,this.y-this.img.height,this.img.width/2,this.img.height/2);
		this.ctx.drawImage(this.img,this.x,this.y);
		this.y++;
		if(this.y >= 450){
			this.y=0;
	}
		
	}else{
		this.ctx.drawImage(this.explodedImg,44*this.explodedIndex,0,44,49,this.x,this.y,44,49);
		if(this.explodedIndex++>7){
			director.toDiscrad = true;
		};
	}
	
}
enemies.prototype.getCenter = function(){
	return new Point(this.x+this.img.width/2,this.y+this.img.height/2);
}
