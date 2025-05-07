const data = JSON.parse(dataInfo);
const divContent = document.querySelector('.content');

data.forEach(element => {
    const headingElem = document.createElement('h2');
    headingElem.textContent = element.title;

    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'photo.jpg');
    imgElem.setAttribute('style', `width: ${element.width}px; heigth: ${element.heigth}px`);
    imgElem.src = element.url;

    const titleElem = document.createElement('p');
    titleElem.textContent = element.text;

    divContent.append(headingElem);
    divContent.append(imgElem);
    divContent.append(titleElem);
});

