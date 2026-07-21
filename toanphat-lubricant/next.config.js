/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key:"X-Content-Type-Options", value:"nosniff" },
  { key:"X-Frame-Options", value:"SAMEORIGIN" },
  { key:"X-XSS-Protection", value:"1; mode=block" },
];
const nextConfig = {
  images: { unoptimized:true, dangerouslyAllowSVG:true, contentDispositionType:"attachment", contentSecurityPolicy:"default-src 'self'; script-src 'none'; sandbox;" },
  async headers() { return [{ source:"/(.*)", headers:securityHeaders }]; },
};
module.exports = nextConfig;
