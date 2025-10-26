function canReach(position){
    let adjacent = [];
    const xPos = position[1]
    const yPos = position[0]
    for(let xMove = -2; xMove <=2; xMove++){
        if(xMove == 0){
            continue
        }
        for(let yMove = -2; yMove<=2; yMove++){
            if(Math.abs(xMove) == Math.abs(yMove) || yMove == 0){
                continue;
            }
            else{
                let xNew = xMove + xPos;
                let yNew = yMove + yPos;
                if(xNew <0 || xNew>7){
                    continue;
                }
                if(yNew < 0 || yNew > 7){
                    continue;
                }
                let move = [yNew,xNew]
                
                adjacent.push(move)
            }
        }
    }
    return adjacent;
}


let array = canReach([0,5]);
console.log(array)

