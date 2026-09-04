document.addEventListener("DOMContentLoaded",()=>{
const loader=document.querySelector(".loader");setTimeout(()=>loader?.classList.add("done"),1400);
const cursor=document.querySelector(".cursor"),dot=document.querySelector(".dot");let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;
addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY});
(function loop(){cx+=(mx-cx)*.15;cy+=(my-cy)*.15;if(cursor){cursor.style.left=cx+"px";cursor.style.top=cy+"px"}if(dot){dot.style.left=mx+"px";dot.style.top=my+"px"}requestAnimationFrame(loop)})();
document.querySelectorAll("a,.project,.service").forEach(el=>{el.addEventListener("mouseenter",()=>{if(cursor){cursor.style.width="65px";cursor.style.height="65px";cursor.style.borderColor="#b8ff2c";cursor.style.background="#b8ff2c15"}});el.addEventListener("mouseleave",()=>{if(cursor){cursor.style.width="36px";cursor.style.height="36px";cursor.style.borderColor="#ffffff66";cursor.style.background="transparent"}})});
document.querySelectorAll(".magnetic").forEach(el=>{el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect(),x=e.clientX-(r.left+r.width/2),y=e.clientY-(r.top+r.height/2);el.style.transform=`translate(${x*.18}px,${y*.18}px)`});el.addEventListener("mouseleave",()=>el.style.transform="translate(0,0)")});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");obs.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));
const hero=document.querySelector(".hero"),copy=document.querySelector(".copy"),portrait=document.querySelector(".portrait");
hero?.addEventListener("mousemove",e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;if(copy)copy.style.transform=`translate(${x*10}px,${y*8}px)`;if(portrait)portrait.style.transform=`translate(${x*-14}px,${y*-10}px)`});
hero?.addEventListener("mouseleave",()=>{if(copy)copy.style.transform="translate(0,0)";if(portrait)portrait.style.transform="translate(0,0)"});
const project=document.querySelector("#project");project?.addEventListener("mousemove",e=>{const r=project.getBoundingClientRect(),x=e.clientX/r.width-(r.left/r.width)-.5,y=e.clientY/r.height-(r.top/r.height)-.5;project.style.transform=`perspective(1200px) rotateX(${y*-3}deg) rotateY(${x*4}deg)`});project?.addEventListener("mouseleave",()=>project.style.transform="");
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));
});