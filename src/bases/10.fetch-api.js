const apiKey = '7bF9631PZyGG68PUzirO17S2CT1zuLTV';

//https://api.giphy.com/v1/gifs/random?api_key=7bF9631PZyGG68PUzirO17S2CT1zuLTV

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then(resp => resp.json())
.then(({data}) => {
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch(console.warn)