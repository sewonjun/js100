function solution (expression) {
    expression = splitExpression(expression);
    const operators = expression[1];
    console.log(operators);

    const operatorCombination = [];
    operators.forEach((element, index, arr) => {
        const rest = [...arr.splice(0,index), ...arr.splice(index+1)];
        console.log(rest);
    })

}

function splitExpression(expression){
    const total = [];
    let temp = [];
    let operator = new Set();
    for(let element of expression){
        if(
            element === "-" ||
            element === "*" ||
            element === "+"
        ){
            total.push(temp);
            total.push([element]);
            temp = [];
            operator.add(element);
        } else {
            temp.push(element)
        }
    }
    const final = [];
    operator = [...operator];
    const [arr, operators] = [final, operator];
    total.map(element => final.push(element.join("")));
    return [arr, operators];
}

const expression = "100-200*300-500+20";

// const expression = "50*6-3*2"


console.log(solution(expression));