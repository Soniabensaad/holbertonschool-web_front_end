const roomDimensions ={
    width: 50,
    length: 100,
    getArea:function(){
        return this.Width * this.length
}
};
let boundGetArea = roomDimensions.getArea.bind(roomDimensions)
console.log(boundGetArea)
