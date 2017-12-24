/**
 * 控制脚本
 */
var util={
	canvasWith:600,
	canvasHeight:450
}
function Point(x,y){
	this.x = x;
	this.y = y;
}
/*为所有的数组做一个方法*/
Array.prototype.removeDiscard = function(){
//	if(this==null){
//		return this;
//	}
	var newArray = [];
	for (var i = 0; i < this.length; i++) {
		if(this[i].toDiscrad){
			this[i] = null;//内存回收
		}else{
			newArray.push(this[i]);
		}
	}
//	this = newArray;
	return newArray;
}
/*碰撞检测*/
function checkCollision(obj1,obj2){
	if(obj1&&obj2){
		var cen1 = obj1.getCenter();
		var cen2 = obj2.getCenter();
		if(cen1&&cen2&& cen1 instanceof Point && cen2 instanceof Point){//判断是否为空，判断是否是Point实例
			if((Math.abs(cen1.x-cen2.x)<=(obj1.img.width+obj2.img.width)/3)
				&&(Math.abs(cen1.y-cen2.y)<=(obj1.img.height+obj2.img.height)/3))
				return true;
		}
	}
	return false;
}
