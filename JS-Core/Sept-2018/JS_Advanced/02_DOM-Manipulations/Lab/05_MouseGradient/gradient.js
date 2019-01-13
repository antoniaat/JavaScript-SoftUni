function attachGradientEvents() {
    let container = document.getElementById('gradient-box');
    container.addEventListener('mousemove', mousemove);
    
    function mousemove(event) {
        document.getElementById('result').textContent = `${event.layerX}%`;
    }
}