function solve() {
    let cart = [];
    Array.from(document.getElementsByTagName('button')).forEach(b => b.addEventListener('click', triggerEvent));
    let textArea = document.getElementsByTagName('textarea')[0];
 
    function triggerEvent(e) {
 
        let btn = e.target;
        if (btn.textContent === 'Add to cart') {
            let siblings = Array.from(btn.parentElement.children).filter(ch => ch.tagName === 'P');
            let name = siblings[0].textContent;
            // let price = parseFloat(siblings[1].textContent.split(': ')[1]);
            let price = +(siblings[1].textContent.split(': ')[1]);
            let obj = {
                'name': name,
                'price': price
            }
            cart.push(obj);
            textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        } else if (btn.textContent === 'Buy') {
            let products = [...new Set(cart.map(x => x.name))];
            let money = cart.reduce((acc,el) => {return acc+el.price}, 0.0);
 
            textArea.value += `You bought ${products.join(', ')} for ${money.toFixed(2)}.\n`;
        }
    }
}