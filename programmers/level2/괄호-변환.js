function solution(p){
    p = p.split("");
    const [u , v]  = validate(p);
    console.log(u, v)

    const [uu, vv] = validate(v)
    console.log(uu, vv)
    function validate(p){
        const stack = [];
        let vIndex = 0
        const u = [];
        const v = [];

        for(let i =0; i<p.length; i++){
            const element = p[i];
            if(element === '('){
                stack.push(element);
            }

            if(stack.length === 0 && element === ')'){
                vIndex += i;
                break;
            }

            if(element === ')'){
                stack.pop();
            }
        }
        u.push(...p.slice(0, vIndex));
        v.push(...p.slice(vIndex));

        return [u, v];
    }
}


const p = "()))((()";
// const p = "(()())()";
// const p = "((())))(";

console.log(solution(p));
