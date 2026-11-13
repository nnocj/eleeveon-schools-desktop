"use strict";
const el=id=>document.getElementById(id);
const n=window.eleeveonNative;
async function invoke(name,arg){const result=await n[name](arg);if(!result?.ok)throw Error(result?.error||'Native operation failed');return result.value;}
async function refresh(){try{const state=await invoke('activation-details');el('installationId').value=state.installationId;el('machineFingerprint').value=state.machineFingerprint;el('edition').textContent='Edition: '+state.edition.replaceAll('_',' ');el('state').textContent=state.licensed?'Signed certificate verified · '+state.claims.licenseId:'Not activated · import a signed certificate after payment verification';}catch(e){el('state').textContent='Activation unavailable: '+e.message;}}
for(const button of document.querySelectorAll('[data-copy]'))button.addEventListener('click',async()=>{try{await invoke('copy-activation-field',{field:button.dataset.copy});el('result').textContent='Copied '+button.dataset.copy+' to clipboard.';}catch(e){el('result').textContent=e.message;}});
el('website').addEventListener('click',async()=>{try{await invoke('open-licence-purchase');}catch(e){el('result').textContent=e.message;}});
el('import').addEventListener('click',async()=>{try{const cert=await invoke('license-import');if(cert){el('result').textContent='Verified and securely stored for account '+cert.accountId;await refresh();}}catch(e){el('result').textContent='Certificate rejected: '+e.message;}});
el('refresh').addEventListener('click',refresh);refresh();