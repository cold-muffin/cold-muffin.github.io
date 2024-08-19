
var r = document.querySelector(':root')

/*document.querySelector('.cta-button').addEventListener('transitionend', function(event) {
    const button = event.target;
    console.log(event.propertyName)
});*/

const skills = document.getElementById('skills')
const skill3 = document.getElementById('skill-3')
const skill2 = document.getElementById('skill-2')
const skill1 = document.getElementById('skill-1')

function getStyleFromRoot(property) {
    var rs = getComputedStyle(r);
    return rs.getPropertyValue(property);
}

function setStyleInRoot(property, value) {
    r.style.setProperty(property, value);
}

function getMousePos(event) {
    let x = event.clientX;
    let y = event.clientY;
    let w = window.innerWidth;
    let h = window.innerHeight;

    // Slider control
    let miny = 7.5;
    let maxy = 100 - miny;
    let yValue = (y / h) * 100;
    let y2Value = 100 - ((y / h) * 100)

    let marginTopValue = Math.max(miny, Math.min(yValue, maxy));
    let marginBottomValue = Math.max(miny, Math.min(y2Value, maxy));

    skills.style.marginTop = `${marginTopValue}%`;
    skills.style.marginBottom = `${marginBottomValue}%`;
    skills.style.backgroundPositionY = `${marginTopValue}%`;
}
