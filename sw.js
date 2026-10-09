/* Generador ITSE: funciona sin internet. La versión cambia con cada publicación (la pone build.py). */
const V="itse-cf180a7ccdab", RT="itse-rt";
const CORE=["./","manifest.webmanifest","icon-192.png","icon-512.png","ocr/pdf-lib.min.js","ocr/jszip.min.js"];
const LAZY=["ocr/pdf.min.js","ocr/pdf.worker.min.js","ocr/tesseract-core-simd-lstm.wasm.js","ocr/spa.traineddata.gz.b64.txt","ocr/docx-preview.min.js","ocr/unrar.js","ocr/unrar.wasm.b64.txt"];
self.addEventListener("install",e=>{e.waitUntil((async()=>{const c=await caches.open(V);
  await c.addAll(CORE.map(u=>new Request(u,{cache:"reload"})));
  await Promise.all(LAZY.map(u=>c.add(new Request(u,{cache:"reload"})).catch(()=>{})))})())});
self.addEventListener("activate",e=>{e.waitUntil((async()=>{for(const k of await caches.keys()) if(k.startsWith("itse-")&&k!==V&&k!==RT) await caches.delete(k); await self.clients.claim()})())});
self.addEventListener("message",e=>{if(e.data==="skip") self.skipWaiting()});
self.addEventListener("fetch",e=>{const r=e.request; if(r.method!=="GET") return; const u=new URL(r.url);
  if(u.origin===location.origin){
    if(r.mode==="navigate"){e.respondWith((async()=>{const c=await caches.open(V), hit=await c.match("./"); if(hit) return hit; try{return await fetch(r)}catch(_){return new Response("Sin internet y esta página aún no se guardó en este equipo.",{status:503,headers:{"Content-Type":"text/plain; charset=utf-8"}})}})()); return}
    e.respondWith((async()=>{const c=await caches.open(V), hit=await c.match(r,{ignoreSearch:true}); if(hit) return hit; const res=await fetch(r); if(res.ok&&/\/(ocr\/|icon-|manifest)/.test(u.pathname)) c.put(r,res.clone()); return res})()); return}
  if(/^(fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com)$/.test(u.hostname)){
    e.respondWith((async()=>{const c=await caches.open(RT), hit=await c.match(r); const net=fetch(r).then(res=>{if(res.ok||res.type==="opaque") c.put(r,res.clone()); return res}).catch(()=>hit||Response.error()); return hit||net})())}});
