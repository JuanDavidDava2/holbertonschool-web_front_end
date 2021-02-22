const createElement = data => {
    let p = document.createElement("p");
    p.innerText = data;
    document.body.appendChild(p);
}

const scrappedData = cb => {
    let res = new XMLHttpRequest();
    res.onload = () => {
        if (res.status == 200) {
            let data = JSON.parse(res.responseText);
            cb(data.query.pages['21721040'].extract);
        } else console.log(xhr.responseText);
    };
    res.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=* ');
    res.send();
}

scrappedData(createElement);