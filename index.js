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
const Calculator = {}
function add(){
  return Calculator.add = 1 + 3
}
add()



