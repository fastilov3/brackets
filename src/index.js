module.exports = function check(str, bracketsConfig) {
    let a = 1;
    
    while(a == 1) {
        let res = str;
        bracketsConfig.map(n => str = str.replace(n[0] + n[1], ''));
        if (res === str) { 
          a = 0; 
        };
    }
    return (str.length == 0) ? true : false;
  }
