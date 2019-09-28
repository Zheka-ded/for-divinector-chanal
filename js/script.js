
(function strToArr (){
    let arrText = document.querySelectorAll(`.title__text`);

    for(i = 0; i < arrText.length; i++){
        let str = arrText[i].innerText;
        let chars = str.split('');
        let chars_in_span = chars.map(char => `<span class="span__title" data-text="${char}">${char}</span>`);
        let new_html = chars_in_span.join('');
        arrText[i].innerHTML = new_html;

    }

}());





// document.querySelectorAll(`.span__title`).forEach(function(element){
//     element.onmouseenter = spanAddStyle;
// });

// function spanAddStyle() {
//     this.style.color = `red`;
//     this.style.fontSize = `40px`;
// };

// document.querySelectorAll(`.span__title`).forEach(function(element){
//     element.onmouseleave = spanRemoveStyle;
// });

// function spanRemoveStyle () {
//     this.style.color = `black`;
//     this.style.fontSize = `30px`;
// };
