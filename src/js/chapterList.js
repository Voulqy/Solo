// console.log(localStorage.getItem('seriesID', seriesID));

let chaptersArray = [];
let getID = localStorage.getItem('seriesID', seriesID);
console.log(getID);

// Load items from JSON file
const getChapters = async () => {
    try {
        const res = await fetch(`/src/json/series/${getID}.json`);
        chaptersArray = await res.json();
        // let chapterCount = chaptersArray.length - 1;
        // console.log(chapterCount);
        loadChapters(chaptersArray);
    } catch (error) {
        console.log(err);
    }
};

getChapters();

const loadChapters = (array) => {
    let index = 0;
    let chapters = `<ul>`;
    for (index = 0; index < array.length; index++) {
        // console.log(index);
        chapters += `<a class="chapterItem" href="/src/pages/chapterPage.html" id="${index}" onclick="setChapterID(this.id)"><li class="chapterItem">`;
        if (index < 10) {
            chapters += `<img src="/public/assets/thumbnails/${getID}/00${index}.jpg" alt="Chapter ${index}" class="chapterThumbnail" loading="lazy" /> `;
            chapters += `<span class="chapterTitle">Chapter 00${index}</span>`;
        } else if (index >= 10 && index < 100) {
            chapters += `<img src="/public/assets/thumbnails/${getID}/0${index}.jpg" alt="Chapter ${index}" class="chapterThumbnail" loading="lazy" /> `;
            chapters += `<span class="chapterTitle">Chapter 0${index}</span>`;
        } else if (index >= 100) {
            chapters += `<img src="/public/assets/thumbnails/${getID}/${index}.jpg" alt="Chapter ${index}" class="chapterThumbnail" loading="lazy" /> `;
            chapters += `<span class="chapterTitle">Chapter ${index}</span>`;
        }
        chapters += `</li>`;
    }
    chapters += `</ul>`;
    document.getElementById('chapterContainer').innerHTML += chapters;
};
