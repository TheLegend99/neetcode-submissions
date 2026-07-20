class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for (let i = 0; i < s.length; i ++){
            switch (s[i]){
                case '(' : 
                case '{' : 
                case '[' :
                    stack.push(s[i]);
                    break;
                case ')' :
                    if (stack.length === 0 || stack.pop() !== '('){
                        return false;
                    }
                    break;
                case '}' :
                    if (stack.length === 0 || stack.pop() !== '{'){
                        return false;
                    }
                    break;
                case ']' :
                    if (stack.length === 0 || stack.pop() !== '['){
                        return false;
                    }
                    break;
            }
        }
        return stack.length === 0;
    }
}
