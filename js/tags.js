const tags = 'burgery, Nowa Huta, Kraków, Zielonki, os. Złotego Wieku, food porn, slow food, frytki belgijskie, Mistrzejowice, zajezdnia, cheeseburger, burger'
const tagsArr = tags.split(', ');

const shuffle = (arr) => {
  let currentIndex = arr.length, temporaryValue, randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
}

const size = (wordLength) => {
    const longestTag = [...tagsArr].sort((a,b) => b.length - a.length)[0];
    let size = longestTag.length/wordLength * 10;
    if(window.innerWidth > 768) {
        size = size * 1.5;
    }
    return (Math.floor(size) + 'px')
}

const tagsOutput = [];

for(let tag of shuffle(tagsArr)) {
    tagsOutput.push(
        `<li class="tags__tag" style="font-size: ${size(tag.length)}">${tag}</li>`
    )
}

document.querySelector('.tags__list').innerHTML = tagsOutput.join('');
