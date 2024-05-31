var box = document.querySelector(".circle");
var point = document.querySelector(".point");

var a = document.querySelectorAll('a');
var hob = document.querySelectorAll('svg');

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;

    box.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    point.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;


});



a.forEach(item => {
    item.addEventListener('mouseover', () => {
        box.classList.add('boxed');
        point.classList.add('boxed');

    });
    item.addEventListener('mouseleave', () => {
        box.classList.remove('boxed');
        point.classList.remove('boxed');

    });
})


hob.forEach(item => {
    item.addEventListener('mouseover', () => {
        box.classList.add('hobs');
        point.classList.add('hobs');

    });
    item.addEventListener('mouseleave', () => {
        box.classList.remove('hobs');
        point.classList.remove('hobs');

    });
})