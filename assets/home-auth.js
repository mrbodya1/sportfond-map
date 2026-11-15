(()=>{
const base=['localhost','127.0.0.1'].includes(location.hostname)?'':'https://api.sportfondhm.ru',login=document.getElementById('home-login'),account=document.getElementById('home-account'),logout=document.getElementById('home-logout'),status=document.getElementById('home-auth-status');let revision=0;
function render(user){login.hidden=!!user;account.hidden=!user;logout.hidden=!user}
async function refresh(){const current=++revision;try{const r=await fetch(base+'/api/map/session',{credentials:'include',signal:AbortSignal.timeout(15000)});if(!r.ok)throw Error();const data=await r.json();if(current===revision)render(data.user)}catch{}}
logout.onclick=async()=>{logout.disabled=true;status.hidden=true;revision++;try{const r=await fetch(base+'/api/map/logout',{method:'POST',credentials:'include',headers:{'Content-Type':'application/json'},body:'{}',signal:AbortSignal.timeout(15000)});if(!r.ok)throw Error();render(null)}catch{status.textContent='Не удалось выйти. Проверь связь и попробуй ещё раз.';status.hidden=false}finally{logout.disabled=false}};
window.addEventListener('focus',refresh);window.addEventListener('pageshow',refresh);refresh();
})();
