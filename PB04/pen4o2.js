function pen4oPath (x) {
    let path = Math.floor(Math.random()*3)+1;
    if  (path === x){
        console.log(`Congratulations, Pen4o! You found the treasure behind Door ${path}`)
    console.log(path)
    }else if (x !== path && x<=3){
      console.log(`A bucket of cold water splashes on you! Unlucky Pen4o!`)
      console.log(path)
    
    } else {
        console.log(`Invalid choice. Please select Door 1, 2, or 3.`)
    }
    
}
pen4oPath(3)