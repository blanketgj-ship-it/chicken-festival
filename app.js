const welcome=document.querySelector('#welcome');
const invitation=document.querySelector('#invitation');
let opening=false;
function releaseChickens(){const colors=['#b83e29','#265b91','#be8b36','#7e8273','#cf795b','#e1ad40'];colors.forEach((color,i)=>{const bird=document.createElement('div');bird.className='runner';bird.style.color=color;bird.style.setProperty('--dx',`${(i%2?1:-1)*(innerWidth*.7+100)}px`);bird.style.setProperty('--dy',`${(i-2)*120}px`);bird.style.setProperty('--r',`${i%2?30:-25}deg`);bird.style.animationDelay=`${i*.11}s`;bird.innerHTML='<svg viewBox="0 0 240 240"><use href="#chicken"/></svg>';document.querySelector('#runners').append(bird);setTimeout(()=>bird.remove(),3000);});}
function openLetter(){if(opening)return;opening=true;welcome.classList.add('opening');setTimeout(releaseChickens,400);setTimeout(()=>welcome.classList.add('leaving'),1200);setTimeout(()=>{welcome.hidden=true;welcome.style.display='none';invitation.hidden=false;window.scrollTo(0,0);document.querySelector('.poster h2').focus();},1850);}
document.querySelector('#open').addEventListener('click',openLetter);
document.querySelector('#replay').addEventListener('click',()=>{invitation.hidden=true;welcome.hidden=false;welcome.style.display='flex';welcome.classList.remove('opening','leaving');opening=false;window.scrollTo(0,0);document.querySelector('#open').focus();});

