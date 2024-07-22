
const menu = document.getElementById('header-nav');
const btn = document.getElementById('burger-btn');


btn.onclick = () =>{
    if(menu.className.includes('header-nav-show')){
        menu.className = 'header-nav'
    } else {
        menu.className = 'header-nav header-nav-show'
    }
}

document.querySelectorAll('.header-link').forEach(item =>{

    item.onclick = () =>{
        if(menu.className.includes('header-nav-show')){
            menu.className = 'header-nav'
        } else {
            menu.className = 'header-nav header-nav-show'
        }
    }

})
