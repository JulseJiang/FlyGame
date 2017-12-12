/**
 * 飞机对象--玩家对象
 */

function player(ctx,imgSrc){
	this.ctx = ctx;
	this.img = new Image();
	this.img.src = imgSrc;
	this.x = (600-this.img.width)/2;
	this.y = 450-this.img.height;
	this.flayStep = 5;
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
	console.log('2.画飞机'+this.x+" "+this.y);
	this.ctx.drawImage(this.img,this.x,this.y);
}
player.prototype.shoot = function(){
	
}
