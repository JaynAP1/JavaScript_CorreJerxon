let url =""
for(let i =0; i < 732; i++){
    url=`https://superheroapi.com/api.php/010fdd537209636fb72f119546b5d119/`+String(i);
    fetch(url)
    .then(res => res.json())
    .then(Data => {
        console.log(Data.id);
    })
}

