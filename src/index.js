class Queue {
  constructor(size = 4) {
    this.size = size;
    this.array = new Array(size).fill(null);
    this.front = 0;
    this.rear = 0;
    this.count = 0;
  }

  isEmpty() { return this.count === 0; }
  isFull() { return this.count === this.size; }

  enqueue(element) {
    if (this.isFull()) this.expand();

    this.array[this.rear] = element;
    this.rear = (this.rear + 1) % this.size;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const val = this.array[this.front];
    this.array[this.front] = null;
    this.front = (this.front + 1) % this.size;
    this.count--;
    return val;
  }

  expand() {
    const newSize = this.size * 2;
    const newArray = new Array(newSize).fill(null);

    // copy elements in correct order
    for (let i = 0; i < this.count; i++) {
      newArray[i] = this.array[(this.front + i) % this.size];
    }

    this.array = newArray;
    this.size = newSize;
    this.front = 0;
    this.rear = this.count;
  }

  peek() {
    return this.isEmpty() ? null : this.array[this.front];
  }
}






function canReach(position){
    let adjacent = {};
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
                
                
                adjacent[`${yNew},${xNew}`] = move;
            }
        }
    }
    return adjacent;
}

function getKey(position){
    return `${position[0]},${position[1]}`;
}

function knightTravails(start,end, seen = {}){
    let adj = canReach(start);
    
    let keys = Object.keys(adj)
    let queue  = new Queue(keys.length)

    
    
    
    seen[getKey(start)] = start
    queue.enqueue(start)
    let previous = {}
    previous[getKey(start)] = null
    console.log(previous)
    let currNode;
    while(!queue.isEmpty()){
        currNode = queue.dequeue()
        adj = canReach(currNode)
        keys = Object.keys(adj)
        if(getKey(end) in adj){
            previous[getKey(end)] = getKey(currNode)
            break;
        }

        for (let key of keys){
            if(!(key in seen)){
                queue.enqueue(adj[key])
                seen[key] = adj[key]
                previous[key] = getKey(currNode)
            }
        }
    }

    
    return reconstructShortestPath(previous,end)

}
function keyToArray(key){
    let arr = []
    arr.push(Number(key.charAt(0)))
    arr.push(Number(key.charAt(2)))
    return arr
}

function reconstructShortestPath(previous, end){
    let path = []
    let current = getKey(end)
    path.push(end)
    while (previous[current]!= null){
        path.push(keyToArray(previous[current]))
        current = previous[current];
    }
    return path.reverse()


}

console.log(keyToArray('1,2'))



let path = knightTravails([3,3],[6,6])

console.log("final path: ",path)


