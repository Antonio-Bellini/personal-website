const showMoreBtn = document.querySelector(".showMoreBtn");
const moreWorks = document.querySelector(".moreWorks");

showMoreBtn.addEventListener('click',()=> {
    moreWorks.classList.toggle("showMore");
    if (showMoreBtn.innerText === 'Show more') {
        showMoreBtn.innerText = 'Show less';
    } else {
        showMoreBtn.innerText = 'Show more';
    }
})