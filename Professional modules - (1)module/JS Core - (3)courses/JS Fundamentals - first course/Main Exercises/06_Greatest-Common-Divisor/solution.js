function greatestCD() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let result = document.getElementById("result");

    

        function gcd(a,b) {
            a = Math.abs(a);
            b = Math.abs(b);
            if (b > a) {var temp = a; a = b; b = temp;}
            while (true) {
                if (b == 0) return a;
                a %= b;
                if (a == 0) return b;
                b %= a;
            }
        }
        result.textContent = `${gcd(a, b)}`
    
}