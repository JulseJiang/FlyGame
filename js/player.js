/**
 * 飞机对象--玩家对象
 */

function player(ctx,imgSrc){
	this.ctx = ctx;
	this.img = new Image();
	this.img.src = imgSrc;
//	if(this.img.width>0&&this.height>0){
//		this.x = (600-this.img.width)/2;
//		this.y = 450-this.img.height;
//	}else{
		this.x = 250;
		this.y = 350;
//	}
	this.flayStep = 5;
	this.fireTime = new Date();
}
player.prototype.draw = function(){
	
	//向上
	if(game.keyStatus[game.keyCode.up]){
		this.y-=this.flayStep;
		if(this.y<0){
			this.y=0;
		}
	}
	//向下
	if(game.keyStatus[game.keyCode.down]){
		this.y+=this.flayStep;
		if(this.y>450-this.img.height){
			this.y = 450-this.img.height;
		}
	}
	//向左
	if(game.keyStatus[game.keyCode.left]){
		this.x-=this.flayStep;
		if(this.x<0){
			this.x=0;
		}
	}
	//向右
	if(game.keyStatus[game.keyCode.right]){
		this.x+=this.flayStep;
		if(this.x>600-this.img.width){
			this.x=600-this.img.width;
		}
	}
	//Space--发射子弹
	if(game.keyStatus[game.keyCode.space]){
		this.fire();
	}
//	console.log('2.画飞机'+this.x+" "+this.y);
	this.ctx.drawImage(this.img,this.x,this.y);
}
player.prototype.fire = function(){
	var currentFile = new Date();
	if(currentFile - this.fireTime>300){
		director.shootAudio.play();
		var bul = new bullet(this.ctx,director.imgs[3],this.x+this.img.width/2,this.y);
		director.bullets.push(bul);
		this.fireTime = new Date();
	}
}
player.prototype.getCenter = function(){
	return new Point(this.x+this.img.width/2,this.y+this.img.height/2);
}