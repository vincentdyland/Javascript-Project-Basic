const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const main = document.querySelector("main");
const form = document.querySelector("form");
const search = document.querySelector("search");

GetMovie();

async function GetMovie(){
    const resp = await fetch(APIURL);
    const respData = await resp.json();

    console.log(respData);

    // respData.results.forEach((movie) => {
    //     const img = document.createElement('img');
    //     img.src = IMGPATH + movie.poster_path;

    //     document.body.appendChild(img);
    // });

    respData.results.forEach((movie) => {
        const {poster_path, title, vote_average} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img 
                src="${IMGPATH + poster_path}" 
                alt="${title}"/>
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
        
        `;

        main.appendChild(movieEl);

    });

    return respData;

}

getClassByRate = function (vote_average) {
    if(vote_average >= 8){
        return 'green';
    }else if(vote_average >= 5){
        return 'orange';
    }else{
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
});
