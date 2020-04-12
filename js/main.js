
let height;

let screenHeight = window.screen.availHeight;


height = (window.screen.availHeight) + 39;

function move_up() {
    window.scrollBy(0, +height);
    console.log(height);
}

function move_down() {
    window.scrollBy(0, -height);
    console.log(height);
}

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 39 || e.keyCode == 40) {
        move_up();
    }
    else if (e.keyCode == 37 || e.keyCode == 38) {
        move_down()
    }
})

// Verify theme API is supported by the Browser in OS System
if (window.matchMedia('prefers-color-scheme').media != "not all") {
    console.log("YEY, Your browser support this media!!! :D");
} else {
    console.log("Your browser doesn't support this media... YET... ");
}


