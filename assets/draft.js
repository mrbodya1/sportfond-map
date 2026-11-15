(()=>{
const workspace=document.querySelector('.workspace'),status=document.getElementById('map-status');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
window.sfMapView=mode=>{workspace.dataset.view=mode;document.querySelectorAll('.nav-view').forEach(b=>{const on=b.dataset.view===mode;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});if(mode==='map')requestAnimationFrame(()=>window.sportfondMap?.resize())};
document.querySelectorAll('.nav-view').forEach(b=>b.addEventListener('click',()=>sfMapView(b.dataset.view)));
const dialog=document.getElementById('organizer-dialog');let opener;
document.querySelectorAll('.organizer-open').forEach(b=>b.onclick=()=>{opener=b;dialog.showModal()});
document.querySelector('.dialog-close').onclick=()=>dialog.close();dialog.addEventListener('close',()=>opener?.focus());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
if(typeof maplibregl==='undefined'){status.textContent='Не удалось загрузить карту. События доступны в списке.';return}
try{
const map=new maplibregl.Map({container:'map',style:window.sfStyle(),transformRequest:window.sfMapRequest,center:[70.2,61.7],zoom:5.5,attributionControl:true});window.sportfondMap=map;
map.addControl(new maplibregl.NavigationControl({showCompass:false}),'top-right');map.addControl(new maplibregl.ScaleControl({maxWidth:100,unit:'metric'}),'bottom-left');
map.on('error',()=>{status.hidden=false;status.textContent='Некоторые слои карты не загрузились. Список событий доступен.'});map.on('idle',()=>{if(map.queryRenderedFeatures().some(f=>f.source==='openmaptiles'))status.hidden=true});
setTimeout(()=>{if(!status.hidden)status.textContent='Карта загружается дольше обычного. События доступны в списке.'},18000);window.addEventListener('resize',()=>map.resize());
document.getElementById('region-view').onclick=()=>{window.dispatchEvent(new CustomEvent('sportfond:region'));map.flyTo({center:[70.2,61.7],zoom:5.5,duration:reduced?0:1000})};
document.getElementById('map-tilt').onclick=e=>{const on=e.currentTarget.getAttribute('aria-pressed')!=='true';e.currentTarget.setAttribute('aria-pressed',String(on));e.currentTarget.textContent=on?'2D':'3D';map.easeTo({pitch:on?50:0,bearing:on?-15:0,duration:reduced?0:900})};
}catch{status.textContent='Этот браузер не поддерживает карту. Открой список событий.'}
})();
