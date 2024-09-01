
const itemMenu = document.querySelectorAll('.menu__item');
const mainImg = document.querySelector('.main__img');
const wrapper = document.querySelector('.wrapper');



/* console.log(itemMenu); */


const menu = document.querySelector('.menu').addEventListener('click', (e) => {
    
    if(e.target.className === 'menu__item'){
        showImage(e);
    }
    
})


function showImage (e){

    /* console.log(e.target.textContent); */
    switch (e.target.textContent) {
        case 'алюминий 05-1мм окна габариты без рамки':
            mainImg.src = 'img/Алюминий 05-1мм окна габариты без рамки-min.jpg';
          break
        case '1.5 мм - окно в два прохода':
            mainImg.src = 'img/Вырезание отверстия 7 мм за два прохода-min.jpg';
          break
        case 'экзамен задание':
            mainImg.src = 'img/экзамен.jpg';
            break
        case 'окно 2,4 мм толщина 0,5мм':
            mainImg.src = 'img/окно 2,4 мм толщина 0,5мм-min.jpg';
            break
        default:
            break
      }
}
























