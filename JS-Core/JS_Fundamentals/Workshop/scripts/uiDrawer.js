; uiDrawer = (function() {
    function draw(id, className) {
        document.getElementById(id).className = className;

    }

    return {
        draw
    }

})();