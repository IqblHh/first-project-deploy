setInterval(()=>{
    const time = document.querySelector("#time")
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let dn = "AM";
    if(hours > 12){
        dn = "PM";
        hours = hours-12;
    }
    if(hours < 10){
        hours = "0"+hours;
    }
    if(minutes < 10){
        minutes = "0"+minutes;
    }
    time.textContent =hours+":"+minutes+" "+dn;
});

const op = document.getElementById('bar');
const cl = document.getElementById('clsbar');
const nav = document.getElementById('navi');

if (op) {
    op.addEventListener('click', () => {
        nav.classList.add('active');
        op.classList.add('active');
    })
}

if (cl) {
    cl.addEventListener('click', () => {
        nav.classList.remove('active');
        op.classList.remove('active');
    })
}


var counta = 2;
setInterval(function(){
  const numa = document.querySelector("#num.a")
  const noplaya = document.getElementById('a' + (counta - 1));
  if (counta > 1) {
    noplaya.classList.remove('active');
  };
  if (counta > 10) {
    counta = 1;    
  };
  const displaya = document.getElementById('a' + counta);
  displaya.classList.add('active');    
  numa.textContent = counta;
  counta++;
}, 5000);

var countb = 2;
setInterval(function(){
  const numb = document.querySelector("#num.b")
  const noplayb = document.getElementById('b' + (countb - 1));
  if (countb > 1) {
    noplayb.classList.remove('active');
  };
  if (countb > 8) {
    countb = 1;    
  };
  const displayb = document.getElementById('b' + countb);
  displayb.classList.add('active');    
  numb.textContent = countb;
  countb++;
}, 5000);