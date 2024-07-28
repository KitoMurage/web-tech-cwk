const wrapper = document.querySelector('.wrapperWorkout');
const bodybuildingLink = document.querySelector('.bodybuildingLink');
const powerliftingLink = document.querySelector('.powerliftingLink');
const iconBack = document.querySelector('.icon-back');
const iconNext = document.querySelector('.icon-next');

function switchBackgroundImage(link) {
    if (link === bodybuildingLink) {
        wrapper.style.backgroundImage = "url('images/hypertrophyimg.jpg')";
    } else if (link === powerliftingLink) {
        wrapper.style.backgroundImage = "url('images/strength.jpg')";
    }
}

switchBackgroundImage(bodybuildingLink);

iconBack.addEventListener('click', () => {
    bodybuildingLink.style.display = 'inline';
    powerliftingLink.style.display = 'none';
    iconNext.style.display = 'inline';
    iconBack.style.display = 'none';
    switchBackgroundImage(bodybuildingLink);
});

iconNext.addEventListener('click', () => {
    bodybuildingLink.style.display = 'none';
    powerliftingLink.style.display = 'inline';
    iconNext.style.display = 'none';
    iconBack.style.display = 'inline';
    switchBackgroundImage(powerliftingLink);
});
