let chapterCount = 185;

let html = `<ul>`;
for (let index = 0; index <= chapterCount; index++) {
    html += `<a class="chapterItem" href="/src/pages/chapter_${index}.html"><li class="chapterItem">`;
    if (index < 10) {
        html += `<img src="/public/assets/thumbnails/00${index}.jpg" alt="Chapter ${index}" class="chapterThumbnail" loading="lazy" /> `;
        html += `<span class="chapterTitle">Chapter 00${index}</span>`;
    } else if (index >= 10 && index < 100) {
        html += `<img src="/public/assets/thumbnails/0${index}.jpg" alt="Chapter ${index}" class="chapterThumbnail" loading="lazy" /> `;
        html += `<span class="chapterTitle">Chapter 0${index}</span>`;
    } else if (index >= 100) {
        html += `<img src="/public/assets/thumbnails/${index}.jpg" alt="Chapter ${index}" class="chapterThumbnail" loading="lazy" /> `;
        html += `<span class="chapterTitle">Chapter ${index}</span>`;
    }
    html += `</li>`;
}
html += `</ul></a>`;

document.getElementById('chapterContainer').innerHTML = html;
