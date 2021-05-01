let lights = document.querySelectorAll('.light');
let ActiveLight = 0;
setInterval(ChangeLight, 1000);
function ChangeLight() {
    lights[ActiveLight].className = 'light';
    ActiveLight++;
    if(ActiveLight>2){
        ActiveLight = 0;
    }
    let CurrentLight = lights[ActiveLight];
    
    CurrentLight.classList.add(CurrentLight.getAttribute('color'));
}