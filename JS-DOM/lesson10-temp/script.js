const data = JSON.parse(dataProduct);
const divContent = document.querySelector('.product_content');

const temp = template.content;
data.forEach(element => {
    const newTemp = temp.cloneNode(true);
    
    newTemp.querySelector('.product_img').src = element.img;
    newTemp.querySelector('.product_info a').innerHTML = element.title;
    newTemp.querySelector('.product_info p').innerHTML = element.text;
    newTemp.querySelector('.product_info span').innerHTML = element.price;

    divContent.append(newTemp);
});
