function solve() {
    Array.from(document.querySelectorAll(".product button")).forEach(el => el.addEventListener("click", addProduct));
    document.querySelector("#exercise > button").addEventListener("click", buyProducts);

    let list = [];
    let sum = 0;

    function addProduct(e) {
        let parent = e.target.parentNode;
        let product = parent.querySelectorAll("p")[0].textContent;
        let priceValue = parent.querySelectorAll("p")[1].textContent;
        let [, price] = priceValue.split(": ");
        let result;

        if (list.includes(product)) {
            sum += +price;
        }else{
            list.push(product);
            sum += +price;
        }
        result = `Added ${product} for ${price} to the cart.\n`;
        let textarea = document.querySelector("#exercise > textarea");
        textarea.textContent += result; 
    }
    function buyProducts(e) {
        let result = `You bought ${list.join(", ")} for ${sum.toFixed(2)}.\n`
        let textarea = document.querySelector("#exercise > textarea");
        textarea.textContent += result; 
    }
}