"use strict";
const {test}=require('node:test');const assert=require('node:assert/strict');
const {businessOrigins,isAllowedServiceRequest,servicePageUrl}=require('../service-network-policy.cjs');
const {backend,website}=businessOrigins();
test('local is default: no remote requests',()=>{assert.equal(isAllowedServiceRequest(backend+'/support/conversations',false,backend),false);});
test('support, billing and auth allowed only on exact backend',()=>{
 for(const p of ['/support/conversations','/billing/plans','/auth/login','/licenses/activate','/entitlements/current'])assert.equal(isAllowedServiceRequest(backend+p,true,backend),true,p);
 for(const p of ['/sync/push','/sync/pull','/media/files/abc','/finance/withdrawals/initiate','/auth/reset-password'])assert.equal(isAllowedServiceRequest(backend+p,true,backend),false,p);
});
test('host spoofing and HTTP blocked',()=>{
 assert.equal(isAllowedServiceRequest('https://eleeveon-schools-backend.onrender.com.evil.test/support',true,backend),false);
 assert.equal(isAllowedServiceRequest(backend.replace('https:','http:')+'/support',true,backend),false);
 assert.equal(isAllowedServiceRequest('https://elsewhere.test/support',true,backend),false);
});
test('website page opener only permits listed pages',()=>{
 assert.equal(servicePageUrl('/owner/subscriptions',website),website+'/owner/subscriptions');
 assert.throws(()=>servicePageUrl('https://evil.test/',website));
 assert.throws(()=>servicePageUrl('//evil.test',website));
 assert.throws(()=>servicePageUrl('/sync/push',website));
});
test('non-https configuration rejected',()=>assert.throws(()=>businessOrigins({ELEEVEON_ONLINE_BACKEND_ORIGIN:'http://example.test'})));
