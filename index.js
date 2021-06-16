// Your code here

// Challenge1
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity="go to the office") {
  return `This Monday, I will ${activity}!`;
}
mondayWork()


// Challenge3
function wrapAdjective(str="*") {
  return function(adjective="special") {
    return `You are ${str}${adjective}${str};`
  }
}

wrapAdjective("||")("a dedicated programmer")
wrapAdjective()("a hard worker")


// Challenge4
const Calculator = {
    Calculator : {},
    add: function(x, y){return x + y},
    subtract: function(x, y){return x - y},
    multiply: function(x, y){return x * y},
    divide: function(x, y){return x / y}

};


function multi1(x){
    return x*2 ;
}
function add1(x){
    return x + 1000;
}
function modulo1(x) {
    return x % 7;
}


l

