const familyNames = {
  names : ["Mohamed","Lara","Baraa","juwayria","Kayan"],
  pickName(){
    const idx = Math.floor(Math.random() * this.names.length);
    return this.names[idx];
  },
  start(){
    this.timerId = setInterval(()=>{
       console.log(this.pickName())
    },3000)
  },
  stop(){
    clearInterval(this.timerId);
    console.log("stooooop!");
  }

}
