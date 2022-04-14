const pokeinfo = document.getElementById('pokeinfo');

console.log(pokeinfo);

const fetchpokeinfo = () => {

    const promises = [];
    for(let i = 1; i <= 150; i++) {
   const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then( results => {
        const pokeinfo = results.map( (data)=>({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', ')
        }));
        displayPokeinfo(pokeinfo);
    });
};
fetchpokeinfo();