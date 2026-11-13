"use strict";
/** Explicitly separated online business services. Never permit school /sync or /media. */
const DEFAULT_BACKEND = "https://eleeveon-schools-backend.onrender.com";
const DEFAULT_WEBSITE = "https://schools.eleeveon.com";
function requireHttpsOrigin(value) {
 const url = new URL(value);
 if(url.protocol!=="https:" || url.username || url.password || url.pathname!=="/" || url.search || url.hash)
   throw Error("Online service origin must be an HTTPS origin");
 return url.origin;
}
function businessOrigins(env=process.env){
 return {backend:requireHttpsOrigin(env.ELEEVEON_ONLINE_BACKEND_ORIGIN||DEFAULT_BACKEND),website:requireHttpsOrigin(env.ELEEVEON_ONLINE_WEBSITE_ORIGIN||DEFAULT_WEBSITE)};
}
const ALLOWED_PATHS = [
 /^\/auth\/(?:login|me|refresh|logout)\/?$/,
 /^\/support(?:\/|$)/,
 /^\/billing(?:\/|$)/,
 /^\/licenses(?:\/|$)/,
 /^\/entitlements(?:\/|$)/,
 /^\/socket\.io(?:\/|$)/
];
function isAllowedServiceRequest(raw, enabled, backend) {
 if(!enabled)return false;
 try{
  const u=new URL(raw);
  if(u.origin!==backend || !["https:","wss:"].includes(u.protocol) || u.username || u.password)return false;
  return ALLOWED_PATHS.some(pattern=>pattern.test(u.pathname));
 }catch{return false;}
}
const ALLOWED_PAGES = new Set(["/", "/login", "/owner/subscription", "/owner/subscriptions", "/support"]);
function servicePageUrl(page, website){
 if(typeof page!=="string" || !ALLOWED_PAGES.has(page))throw Error("Unapproved Eleeveon service page");
 return new URL(page,website).href;
}
module.exports={businessOrigins,isAllowedServiceRequest,servicePageUrl};
