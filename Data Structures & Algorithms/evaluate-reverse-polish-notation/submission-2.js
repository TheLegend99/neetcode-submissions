class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        let a = '', b = '', res = '';
        for (const token of tokens){
            switch (token){
                case "+":
                    b = stack.pop();
                    a = stack.pop();
                    res = Number(a) + Number(b)
                    stack.push(res);
                    break;
                case "-":
                    b = stack.pop();
                    a = stack.pop();
                    res = Number(a) - Number(b)
                    stack.push(res);
                    break;
                case "*":
                    b = stack.pop();
                    a = stack.pop();
                    res = Number(a) * Number(b)
                    stack.push(res);
                    break;
                case "/":
                    b = stack.pop();
                    a = stack.pop();
                    res = Math.trunc(Number(a) / Number(b))
                    stack.push(res);
                    break;
                default:
                    stack.push(token);
            }
        }
        return Number(stack.pop());
    }
}
