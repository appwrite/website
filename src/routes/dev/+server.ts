export function GET() {
    return new Response(HTML, {
        headers: { 'content-type': 'text/html; charset=utf-8' }
    });
}

const HTML = /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Appwrite — Terminal</title>
<meta name="description" content="open-source backend. all batteries included."/>
<link rel="icon" type="image/svg+xml" href="/images/logos/logo.svg"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#050505;overflow:hidden;font-family:'Fira Code','SF Mono','Cascadia Code','JetBrains Mono','Courier New',monospace;-webkit-font-smoothing:antialiased}
#root{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:2rem}
#win{width:100%;max-width:58rem;height:80vh;max-height:46rem;display:flex;flex-direction:column;background:#0e0e0e;border:1px solid #252525;border-radius:10px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.7),0 0 100px rgba(253,54,110,.04)}
#bar{display:flex;align-items:center;justify-content:center;height:2.25rem;background:#1a1a1a;border-bottom:1px solid #252525;flex-shrink:0;user-select:none;font-size:.7rem;color:#555}
#out{flex:1;overflow-y:auto;padding:1rem 1.25rem;font-size:.82rem;line-height:1.65;color:#d4d4d4;cursor:default}
#out::-webkit-scrollbar{width:5px}
#out::-webkit-scrollbar-track{background:transparent}
#out::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:3px}
.row{padding:.2em .6em;border-radius:4px;cursor:pointer;display:flex;gap:.75em;align-items:baseline}
.row:hover{background:#1e1e2e}
.row .k{color:#fd366e;flex-shrink:0;min-width:1.5em}
.row .l{color:#d4d4d4}
.row .d{color:#666;margin-left:.5em}
.prompt-row{display:flex;align-items:center;min-height:1.4em;margin-top:.25em}
.prompt-row span{color:#d4d4d4;white-space:nowrap}
.prompt-row input{flex:1;background:transparent;border:none;outline:none;color:#d4d4d4;font:inherit;padding:0;margin:0;caret-color:#d4d4d4}
.cta{display:inline-block;padding:.3em 1em;border:1px solid #fd366e;color:#fd366e;border-radius:4px;text-decoration:none;margin-right:.75em;margin-top:.5em;cursor:pointer;font:inherit;font-size:inherit;background:transparent}
.cta:hover{background:#fd366e;color:#fff}
.cta-primary{background:#fd366e;color:#fff}
.cta-primary:hover{background:#e02d5f}
@media(max-width:640px){#root{padding:0}#win{height:100dvh;max-height:none;border-radius:0;border:none}#out{font-size:.7rem;padding:.75rem}}
</style>
</head>
<body>
<div id="root"><div id="win">
<div id="bar">visitor@appwrite-cloud &mdash; appwrite-terminal &mdash; 80&times;24</div>
<div id="out"></div>
</div></div>
<script>
(function(){
var o=document.getElementById('out');
if(!o)return;

var PK='#fd366e',GR='#777',WH='#d4d4d4',DIM='#555';
var state='boot',menuBox=null,inputEl=null;
var PROMPT='visitor@appwrite-cloud ~ % ';

var SVC=[
{n:'auth',p:4201,doc:'/docs/products/auth',
why:'Drop-in auth for your app. Email/password, OAuth (30+ providers), magic links, phone OTP, anonymous sessions, MFA. Server-side sessions, JWT, role-based access. You write zero auth logic.',
tl:'appwrite.auth.createEmailPasswordSession(email, password)'},
{n:'databases',p:4202,doc:'/docs/products/databases',
why:'Document database with a REST + GraphQL API. Define collections and schemas, or go schemaless. Per-document permissions, compound indexes, relationships. Queries feel like a real DB, not a toy.',
tl:'appwrite.databases.createDocument(dbId, colId, ID.unique(), data)'},
{n:'storage',p:4203,doc:'/docs/products/storage',
why:'File storage with automatic compression, client-side encryption, and antivirus scanning. Serve images with on-the-fly transforms (resize, crop, format) via URL params. No CDN config needed.',
tl:'appwrite.storage.createFile(bucketId, ID.unique(), file)'},
{n:'functions',p:4204,doc:'/docs/products/functions',
why:'Serverless functions in Node, Python, Dart, PHP, Ruby, Bun, or any runtime. Deploy from Git or CLI. Trigger on events, cron schedules, or HTTP. Auto-scales to zero when idle.',
tl:'appwrite.functions.createExecution(functionId, body)'},
{n:'messaging',p:4205,doc:'/docs/products/messaging',
why:'Push notifications, email, and SMS from a single API. Create topics, target user segments, schedule delivery, track opens. Bring your own provider (SMTP, Twilio, FCM, APNS).',
tl:'appwrite.messaging.createPush(messageId, title, body, topics)'},
{n:'realtime',p:4206,doc:'/docs/apis/realtime',
why:'Subscribe to any resource change over WebSockets. Database writes, auth events, file uploads, function executions. Instant. One line of code. No polling.',
tl:'appwrite.client.subscribe("databases.*.collections.*.documents", cb)'},
{n:'hosting',p:4207,doc:'/docs/products/sites',
why:'Deploy static and SSR frontend apps. Auto-builds from Git on push. Preview deployments per branch, custom domains, edge CDN. Open-source Vercel alternative.',
tl:'appwrite sites create --framework next'}
];

var MAIN_MENU=[
{k:'1',l:'Explore products',a:'products'},
{k:'2',l:'Read the docs',a:'docs'},
{k:'3',l:'Start building',a:'signup'},
{k:'4',l:'Sign up free',a:'signup'}
];

var EGGS={
'sudo rm -rf /':'rm: permission denied. nice try. we have backups.',
'vim':'error: we use neovim here.',
'emacs':'error: this is a civilized terminal.',
'npm install':'bun > npm. we said what we said.',
'git push --force':'absolutely not.',
'curl localhost:3000':"you're already looking at it.",
':(){ :|:& };:':"fork bomb detected. nice. we're sandboxed though.",
'make coffee':"418 I'm a teapot",
'exit':'logout: there is no escape. (try signing up instead)',
'whoami':'visitor. for now. sign up and we will remember you.',
'pwd':'/home/visitor/appwrite',
'neofetch':'OS: Appwrite Cloud | Shell: appwrite-terminal | Runtime: SvelteKit + Bun | Uptime: 99.99%',
'git blame':"it was you. it's always you.",
'ssh':'ssh: connection refused. use the dashboard like everyone else.',
'top':'7 services running. 0% idle. 100% shipping.',
'ping':'PING appwrite.io: 64 bytes, time=0.42ms — yep, we are up.',
'cat .env':'nice try. secrets stay secret.',
'cat /etc/passwd':'cat: Permission denied. nice try though.',
'help':'try exploring the products above, or just type something fun.'
};

function el(tag,css,txt){var e=document.createElement(tag);if(css)e.style.cssText=css;if(txt!==undefined)e.textContent=txt;return e}

function ln(t,c,pre){var d=el('div','color:'+(c||WH)+';white-space:'+(pre?'pre':'pre-wrap')+';min-height:1em',t);o.appendChild(d);scr()}

function scr(){o.scrollTop=o.scrollHeight}
function w(ms){return new Promise(function(r){setTimeout(r,ms)})}

function fmtD(){var d=new Date(),D=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],M=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];function p(n){return String(n).padStart(2,'0');}return D[d.getDay()]+' '+M[d.getMonth()]+' '+p(d.getDate())+' '+p(d.getHours())+':'+p(d.getMinutes())+':'+p(d.getSeconds())}

function drawMainMenu(){
if(menuBox)menuBox.remove();
menuBox=document.createElement('div');
menuBox.style.cssText='margin-top:.25em;';
for(var i=0;i<MAIN_MENU.length;i++){
var r=document.createElement('div');
r.className='row';
r.innerHTML='<span class="k">'+MAIN_MENU[i].k+'</span><span class="l">'+MAIN_MENU[i].l+'</span>';
(function(idx){
r.onclick=function(){doMain(MAIN_MENU[idx])};
})(i);
menuBox.appendChild(r)
}
var hint=el('div','color:#444;font-size:.72rem;margin-top:.6em','click or press a number  \\u00b7  or just type a command below');
menuBox.appendChild(hint);
o.appendChild(menuBox);
addPrompt();
scr()
}

function addPrompt(){
if(inputEl&&inputEl.parentElement)inputEl.parentElement.remove();
var row=document.createElement('div');
row.className='prompt-row';
var sp=document.createElement('span');
sp.textContent=PROMPT;
inputEl=document.createElement('input');
inputEl.type='text';inputEl.autocomplete='off';inputEl.autocorrect='off';
inputEl.autocapitalize='off';inputEl.spellcheck=false;
inputEl.style.cssText='flex:1;background:transparent;border:none;outline:none;color:#d4d4d4;font:inherit;padding:0;margin:0;caret-color:#d4d4d4;';
inputEl.onkeydown=handleInput;
row.appendChild(sp);row.appendChild(inputEl);
o.appendChild(row);
scr();
inputEl.focus()
}

function handleInput(e){
if(e.key==='Enter'){
e.preventDefault();
var v=inputEl.value.trim();
inputEl.value='';
if(!v)return;
ln(PROMPT+v,WH);
if(inputEl.parentElement)inputEl.parentElement.remove();
processCmd(v);
}
}

function processCmd(v){
var low=v.toLowerCase();
if(state==='menu'){
for(var i=0;i<MAIN_MENU.length;i++){if(low===MAIN_MENU[i].k){doMain(MAIN_MENU[i]);return}}
}
if(state==='products'||state==='menu'){
var num=parseInt(low,10);
if(state==='products'&&num>=1&&num<=SVC.length){showProductDetail(num-1);return}
}
if(EGGS[low]){ln(EGGS[low],GR);ln('',WH);addPrompt();return}
if(low==='signup'||low==='sign up'||low==='register'||low==='start building'){
ln('opening Appwrite Cloud...',GR);
window.open('https://cloud.appwrite.io','_blank');
ln('',WH);addPrompt();return
}
if(low==='docs'||low==='rtfm'||low==='read the docs'){
ln('opening docs...',GR);
window.open('/docs','_blank');
ln('',WH);addPrompt();return
}
if(low==='products'||low==='explore'||low==='explore products'||low==='ls'){
showProductList();return
}
for(var i=0;i<SVC.length;i++){
if(low===SVC[i].n){showProductDetail(i);return}
}
ln('zsh: command not found: '+v.split(' ')[0],GR);
ln('',WH);addPrompt()
}

function doMain(m){
if(m.a==='products'){showProductList();return}
if(m.a==='docs'){window.open('/docs','_blank');return}
if(m.a==='signup'){window.open('https://cloud.appwrite.io','_blank');return}
}

function showProductList(){
state='products';
if(menuBox)menuBox.remove();
if(inputEl&&inputEl.parentElement)inputEl.parentElement.remove();
ln('',WH);
ln(PROMPT+'appwrite products',WH);
ln('',WH);
menuBox=document.createElement('div');
for(var i=0;i<SVC.length;i++){
var r=document.createElement('div');
r.className='row';
r.innerHTML='<span class="k">'+(i+1)+'</span><span class="l">'+SVC[i].n+'</span>';
(function(idx){
r.onclick=function(){showProductDetail(idx)};
})(i);
menuBox.appendChild(r)
}
var hint=el('div','color:#444;font-size:.72rem;margin-top:.6em','click or press a number  \\u00b7  esc back');
menuBox.appendChild(hint);
o.appendChild(menuBox);
scr()
}

async function showProductDetail(idx){
state='detail';
if(menuBox)menuBox.remove();
if(inputEl&&inputEl.parentElement)inputEl.parentElement.remove();
var s=SVC[idx];

ln('',WH);
var cmdText=PROMPT+'appwrite explain '+s.n;
var cmdDiv=el('div','color:'+WH+';white-space:pre-wrap;min-height:1em','');
o.appendChild(cmdDiv);
for(var i=1;i<=cmdText.length;i++){
cmdDiv.textContent=cmdText.slice(0,i);
scr();
await w(18)
}
await w(300);

ln('',WH);
ln(s.n.toUpperCase(),PK);
ln('',WH);
ln(s.why,WH);
ln('',WH);
ln('  '+s.tl,'#888');
ln('',WH);

var btns=document.createElement('div');
var docsBtn=document.createElement('a');
docsBtn.className='cta';docsBtn.textContent='read the docs';
docsBtn.href=s.doc;docsBtn.target='_blank';
var signBtn=document.createElement('a');
signBtn.className='cta cta-primary';signBtn.textContent='start building';
signBtn.href='https://cloud.appwrite.io';signBtn.target='_blank';
btns.appendChild(signBtn);btns.appendChild(docsBtn);
o.appendChild(btns);

ln('',WH);
var back=el('div','color:#555;font-size:.72rem;cursor:pointer;margin-top:.25em','\\u2190 esc back to products  \\u00b7  \\u2190\\u2190 esc esc back to menu');
back.onclick=function(){showProductList()};
o.appendChild(back);
scr()
}

function goHome(){
state='menu';
o.innerHTML='';
header();
showBootSummary();
drawMainMenu()
}

function header(){
var h=document.createElement('div');
h.style.cssText='display:flex;align-items:center;gap:1em;margin-bottom:.25em;';
var logo=document.createElement('img');
logo.src='/images/logos/logo.svg';logo.alt='Appwrite';
logo.style.cssText='width:1.8em;height:1.8em;';
var txt=document.createElement('div');
txt.innerHTML='<div style="color:'+PK+';font-size:1.05em;font-weight:bold;letter-spacing:.05em;">APPWRITE</div><div style="color:#666;font-size:.72rem;">v1.6.0 \\u00b7 open-source backend \\u00b7 appwrite.io</div>';
h.appendChild(logo);h.appendChild(txt);
o.appendChild(h)
}

function showBootSummary(){
ln('',WH);
ln(SVC.length+' services up. 0 failed. listening on port 443.',WH);
ln('open-source backend. auth, db, storage, functions, realtime, messaging, hosting.',GR);
ln('',WH);
}

document.addEventListener('keydown',function(e){
if(state==='boot')return;
if(e.target&&e.target.tagName==='INPUT')return;

if(state==='menu'){
for(var i=0;i<MAIN_MENU.length;i++){if(e.key===MAIN_MENU[i].k){e.preventDefault();doMain(MAIN_MENU[i]);return}}
}
else if(state==='products'){
if(e.key==='Escape'){e.preventDefault();goHome();return}
for(var j=1;j<=SVC.length;j++){if(e.key===String(j)){e.preventDefault();showProductDetail(j-1);return}}
}
else if(state==='detail'){
if(e.key==='Escape'){e.preventDefault();showProductList()}
}
});

o.addEventListener('click',function(e){
if(e.target.tagName==='A'||e.target.tagName==='INPUT')return;
if(inputEl)inputEl.focus();
});

async function boot(){
state='boot';
header();
ln('',WH);
ln('Last login: '+fmtD()+' on ttys001',WH);
ln('',WH);

var cmdText=PROMPT+'appwrite init';
var cmdDiv=el('div','color:'+WH+';white-space:pre-wrap;min-height:1em','');
o.appendChild(cmdDiv);
for(var i=1;i<=cmdText.length;i++){
cmdDiv.textContent=cmdText.slice(0,i);
scr();
await w(35)
}
await w(350);

ln('',WH);
ln('[init] resolving backend modules...',GR);
await w(300);
for(var i=0;i<SVC.length;i++){
ln('  '+SVC[i].n.padEnd(16)+'\\u2713 ready   (pid '+SVC[i].p+')',GR);
await w(120)
}
ln('',WH);
ln(SVC.length+' services up. 0 failed. listening on port 443.',WH);
ln('appwrite v1.6.0 \\u2014 open-source backend. all batteries included.',WH);
ln('',WH);

state='menu';
drawMainMenu()
}

boot()
})();
</script>
</body>
</html>`;
