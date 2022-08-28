let cursor;
const title = document.getElementById('title');
const subcategory = document.getElementById('subcategory');
const description = document.getElementById('description');
const icons = document.getElementById('icons');

const blinkCursor = () => {
    if (!cursor) {
        cursor = document.getElementById('cursor');
    }
    cursor.classList.toggle('hidden');
}

// setInterval(blinkCursor, 500);
for (const line of title.getElementsByClassName('line')) {
    const text = line.innerText;
    line.innerText = '';
    for (const char of text) {
        const span = document.createElement('span');
        span.innerText = char;
        span.classList.add('hidden');
        line.appendChild(span);

    }
}
title.classList.remove('hidden');
// const lines = title.getElementsByClassName('line');
// for (let i = 0; i < lines.length; i++) {
//     const chars = lines[i].getElementsByTagName('span');
//     for (let j = 0; j < chars.length; j++) {
//         setTimeout(() => {
//             chars[i].classList.remove('hidden');
//         }, 100 * i + 100 * j);
//     }
// }
const lines = title.getElementsByClassName('line');
for (let i = 0; i < lines.length; i++) {
    const chars = lines[i].getElementsByTagName('span');
    for (let j = 0; j < chars.length; j++) {
        setTimeout(() => {
            if (i === lines.length - 1 && j === chars.length - 1) {
                chars[j].innerText = "_";
                chars[j].id = "cursor";
                setInterval(blinkCursor, 500);
                title.classList.remove("initial")
                subcategory.classList.remove("hidden")
                description.classList.remove("initial")
                icons.classList.remove("initial")
            } else if (j > 1) {
                const prev = chars[j].innerText;
                chars[j].innerText = '_';
                setTimeout(() => {
                    chars[j].innerText = prev;
                }, j === chars.length - 1 ? 400 : 100);
            }
            chars[j].classList.remove('hidden');
        }, (150 * i * chars.length) + (100 * j));

    }
}
