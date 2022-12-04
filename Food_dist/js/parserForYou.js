window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const arrayNodes = [];
    function recursyDOM(element) {
        element.childNodes.forEach(node => {
                if(node.nodeName === '#text')return;
                if(node.nodeName.match(/^H\d/)) {
                    const object = {
                        nodeName: node.nodeName,
                        nodeContent: node.textContent.trim(),
                    };
                    arrayNodes.push(object);
                }
                if((node.nodeName.length > 1))recursyDOM(node);  
        });
        return arrayNodes;
    }
    recursyDOM(body);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',},
        body: JSON.stringify(arrayNodes),
    }).then(response => response.json()).then(json => console.log(json));
});