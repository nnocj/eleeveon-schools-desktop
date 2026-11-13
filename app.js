'use strict';
const q=id=>document.getElementById(id);let current=null;
function error(message){q('error').textContent=message;q('error').classList.remove('hidden');}
function clearError(){q('error').classList.add('hidden');}
async function call(name,args){clearError();const r=await window.eleeveonNative[name](args);if(!r.ok)throw Error(r.error);return r.value;}
function show(state){current=state;q('setup').classList.toggle('hidden',state.opened);q('workspace').classList.toggle('hidden',!state.opened);if(!state.opened){q('dataDir').value=state.dataFolder||'';return;}q('schoolTitle').textContent=state.schoolName;q('location').textContent='Primary data: '+state.dataFolder;q('backupDir').value=state.backupFolder||'';const list=q('studentList');list.replaceChildren();for(const s of state.students){const row=document.createElement('div');row.textContent=`${s.admission} · ${s.name}`;list.appendChild(row);}}
function bind(id,fn){q(id).addEventListener('click',async()=>{try{await fn();}catch(e){error(e.message);}});}
bind('chooseData',async()=>{const d=await call('pick-data');if(d)q('dataDir').value=d;});
bind('create',async()=>{show(await call('create',{folder:q('dataDir').value,schoolName:q('school').value,password:q('password').value}));q('password').value='';});
bind('unlock',async()=>{show(await call('unlock',{folder:q('dataDir').value,password:q('password').value}));q('password').value='';});
bind('lock',async()=>show(await call('lock')));
bind('addStudent',async()=>{show(await call('add-student',{name:q('studentName').value,admission:q('studentAdmission').value}));q('studentName').value='';q('studentAdmission').value='';});
bind('chooseBackup',async()=>{const d=await call('pick-backup');if(d)q('backupDir').value=d;});
bind('backupNow',async()=>{const res=await call('backup');q('backupResult').textContent='Backup saved: '+res.file+' · SHA-256: '+res.sha256;});
bind('restore',async()=>{if(!confirm('Restore may replace local records. A safety backup will be made first. Continue?'))return;const r=await call('restore');if(r){show(r.state);q('backupResult').textContent='Restored. Previous state saved at '+r.safetyBackup;}});
q('schedule').addEventListener('change',async()=>{try{await call('backup-schedule',{minutes:Number(q('schedule').value)});}catch(e){error(e.message);}});
call('state').then(show).catch(e=>error(e.message));

for (const button of document.querySelectorAll('.toggle-password')) {
  button.addEventListener('click', () => {
    const field = q(button.dataset.target);
    const visible = field.type === 'password';
    field.type = visible ? 'text' : 'password';
    button.textContent = visible ? 'Hide' : 'Show';
    button.setAttribute('aria-pressed', String(visible));
  });
}
bind('changePassword',async()=>{
  const currentPassword=q('currentPassword').value;
  const newPassword=q('newPassword').value;
  const confirmPassword=q('confirmPassword').value;
  if(newPassword!==confirmPassword)throw Error('New password and confirmation do not match');
  if(newPassword.length<12)throw Error('New password must have at least 12 characters');
  if(!confirm('Change the school encryption password? Previous backup files will still need the old password.'))return;
  await call('change-password',{currentPassword,newPassword});
  for(const id of ['currentPassword','newPassword','confirmPassword']){q(id).value='';q(id).type='password';}
  for(const b of document.querySelectorAll('.toggle-password')){if(b.dataset.target!=='password'){b.textContent='Show';b.setAttribute('aria-pressed','false');}}
  q('passwordResult').textContent='Password changed. Please create a fresh encrypted backup now. Older backups require your previous password.';
});

// Secure native offline certificate status (not a client-side entitlement flag).
async function displayLicense(){
 try{const id=await call('installation-id');q('installId').value=id;
  const s=await call('license-status');
  q('licenseStatus').textContent=s.licensed?`Signed ${s.claims.edition} license verified for account ${s.claims.accountId}.`:'No signed license installed. School workspace remains a development lab.';
 }catch(e){q('licenseStatus').textContent='Activation unavailable: '+e.message;}
}
bind('importLicense',async()=>{const result=await call('license-import');if(result){await displayLicense();alert('Signed certificate installed and verified.');}});
bind('copyInstallId',async()=>{if(!q('installId').value)throw Error('No installation ID');await navigator.clipboard.writeText(q('installId').value);});
displayLicense();
