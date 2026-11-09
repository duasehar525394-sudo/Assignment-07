const beforeimg = document.createElement('img');
beforeimg.src = 'sunset_original_left.png';

const afterimg = document.createElement('img'); 
afterimg.src = 'moonlit_original_right.png';

const button = document.createElement('button');
button.textContent = 'Switch Images';


const div = document.createElement('div');
div.appendChild(beforeimg);

let showingbefore = true;   

button.addEventListener('click', () => {
    if(showingbefore) {
        div.removeChild(beforeimg);
        div.appendChild(afterimg);
        showingbefore = false;
    } 
    else {
        div.removeChild(afterimg);
        div.appendChild(beforeimg);
        showingbefore = true;
    }                       
    }
);


document.body.appendChild(div);
document.body.appendChild(button);
