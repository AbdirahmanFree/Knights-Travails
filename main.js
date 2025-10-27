/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("{class Queue {\n  constructor(size = 4) {\n    this.size = size;\n    this.array = new Array(size).fill(null);\n    this.front = 0;\n    this.rear = 0;\n    this.count = 0;\n  }\n\n  isEmpty() { return this.count === 0; }\n  isFull() { return this.count === this.size; }\n\n  enqueue(element) {\n    if (this.isFull()) this.expand();\n\n    this.array[this.rear] = element;\n    this.rear = (this.rear + 1) % this.size;\n    this.count++;\n  }\n\n  dequeue() {\n    if (this.isEmpty()) return null;\n\n    const val = this.array[this.front];\n    this.array[this.front] = null;\n    this.front = (this.front + 1) % this.size;\n    this.count--;\n    return val;\n  }\n\n  expand() {\n    const newSize = this.size * 2;\n    const newArray = new Array(newSize).fill(null);\n\n    // copy elements in correct order\n    for (let i = 0; i < this.count; i++) {\n      newArray[i] = this.array[(this.front + i) % this.size];\n    }\n\n    this.array = newArray;\n    this.size = newSize;\n    this.front = 0;\n    this.rear = this.count;\n  }\n\n  peek() {\n    return this.isEmpty() ? null : this.array[this.front];\n  }\n}\n\n\n\n\n\n\nfunction canReach(position){\n    let adjacent = {};\n    const xPos = position[1]\n    const yPos = position[0]\n    for(let xMove = -2; xMove <=2; xMove++){\n        if(xMove == 0){\n            continue\n        }\n        for(let yMove = -2; yMove<=2; yMove++){\n            if(Math.abs(xMove) == Math.abs(yMove) || yMove == 0){\n                continue;\n            }\n            else{\n                let xNew = xMove + xPos;\n                let yNew = yMove + yPos;\n                if(xNew <0 || xNew>7){\n                    continue;\n                }\n                if(yNew < 0 || yNew > 7){\n                    continue;\n                }\n                let move = [yNew,xNew]\n                \n                \n                adjacent[`${yNew},${xNew}`] = move;\n            }\n        }\n    }\n    return adjacent;\n}\n\nfunction getKey(position){\n    return `${position[0]},${position[1]}`;\n}\n\nfunction knightTravails(start,end, seen = {}){\n    let adj = canReach(start);\n    \n    let keys = Object.keys(adj)\n    let queue  = new Queue(keys.length)\n\n    \n    \n    \n    seen[getKey(start)] = start\n    queue.enqueue(start)\n    let previous = {}\n    previous[getKey(start)] = null\n    console.log(previous)\n    let currNode;\n    while(!queue.isEmpty()){\n        currNode = queue.dequeue()\n        adj = canReach(currNode)\n        keys = Object.keys(adj)\n        if(getKey(end) in adj){\n            previous[getKey(end)] = getKey(currNode)\n            break;\n        }\n\n        for (let key of keys){\n            if(!(key in seen)){\n                queue.enqueue(adj[key])\n                seen[key] = adj[key]\n                previous[key] = getKey(currNode)\n            }\n        }\n    }\n\n    \n    return reconstructShortestPath(previous,end)\n\n}\nfunction keyToArray(key){\n    let arr = []\n    arr.push(Number(key.charAt(0)))\n    arr.push(Number(key.charAt(2)))\n    return arr\n}\n\nfunction reconstructShortestPath(previous, end){\n    let path = []\n    let current = getKey(end)\n    path.push(end)\n    while (previous[current]!= null){\n        path.push(keyToArray(previous[current]))\n        current = previous[current];\n    }\n    return path.reverse()\n\n\n}\n\nconsole.log(keyToArray('1,2'))\n\n\n\nlet path = knightTravails([0,0],[7,7])\n\nconsole.log(\"final path: \",path)\n\n\n\n\n//# sourceURL=webpack://knights-travails/./src/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;