let seriesArray = [];
// let seriesContainer = document.getElementById('seriesContainer');

// Load items from JSON file
const getSeries = async () => {
    try {
        const res = await fetch('/src/json/series.json');
        seriesArray = await res.json();
        // console.log(seriesArray);
        loadSeries(seriesArray);
    } catch (error) {
        console.log(err);
    }
};

const loadSeries = (array) => {
    // let seriesBox = `<div class="seriesCardsContainer">`;
    let seriesBox = ``;
    for (let index = 0; index < array.length; index++) {
        seriesBox += `<div class="seriesCard">`;
        seriesBox += `<a href="/src/pages/seriesPage.html" id="${array[index].seriesName}" onclick="setSeriesID(this.id)">`;
        seriesBox += `<div class="seriesPoster"><img src="/public/assets/posters/${array[index].seriesName}.jpg" class="poster"
        alt=""/></div>`;
        seriesBox += `<div class="seriesName">${array[index].seriesName}</div>`;
        seriesBox += `</a></div>`;
    }

    document.getElementById('seriesContainer').innerHTML += seriesBox;
};

getSeries();
