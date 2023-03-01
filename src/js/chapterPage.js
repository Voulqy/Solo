let chapterArray = [];
let seriesID = document.getElementById('seriesID').textContent;
let chapterID = document.getElementById('chapterID').textContent;

// Load items from JSON file
const loadChapters = async () => {
    try {
        const res = await fetch(`../json/series/${seriesID}.json`);
        chapterArray = await res.json();

        chapterDetails(chapterArray);
        // navigationSystem(chapterArray);
    } catch (error) {
        console.log(err);
    }
};

const chapterDetails = (array) => {
    let seriesID = document.getElementById('seriesID').textContent;
    let chapterID = document.getElementById('chapterID').textContent;
    let pageCount = array[chapterID].chapterPageCount;

    // Set page title to the chapter number
    document.title = 'Chapter ' + array[chapterID].chapterID;

    let chapter = `<div class="imageColumn">`;
    for (let index = 0; index < pageCount; index++) {
        if (chapterID < 10) {
            chapter += `<img src="/public/assets/chapters/${seriesID}/00${chapterID}/`;
        } else if (chapterID >= 10 && chapterID < 100) {
            chapter += `<img src="/public/assets/chapters/${seriesID}/0${chapterID}/`;
        } else if (chapterID >= 100) {
            chapter += `<img src="/public/assets/chapters/${seriesID}/${chapterID}/`;
        }

        if (index < 9) {
            chapter += `p00${
                index + 1
            }.jpg" alt="Page ${index}" class="chapterPage" draggable="false" loading="lazy" /> `;
        } else {
            chapter += `p0${
                index + 1
            }.jpg" alt="Page ${index}" class="chapterPage" draggable="false" loading="lazy" /> `;
        }
    }
    chapter += `</div>`;

    document.getElementById('chapterContainer').innerHTML = chapter;
};

// navigation system open
// let navContent = document.getElementById('navContainer');

// let chapterNav = ``;
// console.log(chapterID);

// if (chapterID == 0) {
//     chapterNav += `<a href="#" id="backButton">Back</a>`;
//     chapterNav += `<select id="chapterCatalog" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
//     <option value="">Select Chapter</option>`;
//     for (let index = 0; index <= chapterCount; index++) {
//         chapterNav += `<option value="../pages/chapter_${index}`;
//         chapterNav += `.html">Chapter ${index}</option>`;
//     }
//     chapterNav += `</select>`;
//     chapterNav += `<a href="chapter_${
//         Number(chapterID) + 1
//     }.html" id="nextButton">Next</>`;
//     console.log(chapterID);
// } else if (chapterID > 0) {
//     chapterNav += `<a href="chapter_${
//         Number(chapterID) - 1
//     }.html" id="backButton">Back</a>`;
//     chapterNav += `<select id="chapterCatalog" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
//     <option value="">Select Chapter</option>`;
//     for (let index = 0; index <= chapterCount; index++) {
//         chapterNav += `<option value="../pages/chapter_${index}`;
//         chapterNav += `.html">Chapter ${index}</option>`;
//     }
//     chapterNav += `</select>`;
//     chapterNav += `<a href="chapter_${
//         Number(chapterID) + 1
//     }.html" id="nextButton">Next</a>`;
// } else if (chapterID > chapterArray[chapterID].length) {
//     chapterNav += `<a href="chapter_${
//         Number(chapterID) - 1
//     }.html" id="backButton">Back</>`;
//     chapterNav += `<select id="chapterCatalog" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
//     <option value="">Select Chapter</option>`;
//     for (let index = 0; index <= chapterCount; index++) {
//         chapterNav += `<option value="../pages/chapter_${index}`;
//         chapterNav += `.html">Chapter ${index}</option>`;
//     }
//     chapterNav += `</select>`;
//     chapterNav += `<a href="#" id="nextButton">Next</>`;
// }

// chapterNav += ``;
// document.getElementById('navContainer').innerHTML = chapterNav;
// navigation system close

loadChapters();
