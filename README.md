# West High Standards

This repository contains a merged static site created from your Lovable project and the DonorPerfect donation form.

What I pushed
- Static pages: index.html, closet.html, donate.html, get-clothes.html, partners.html, admin.html
- Serverless function: api/send-email.js (for Vercel). Uses SENDGRID_API_KEY env var.
- styles.css and README

Deploying to Vercel (recommended)
1. Sign in to https://vercel.com and click "New Project" -> import from GitHub -> select this repository (zirob29-cloud/westhighstandards).
2. Build settings: this is a static site; Vercel will auto-detect. No build command required.
3. Set environment variables (in Vercel project settings -> Environment Variables):
   - SENDGRID_API_KEY = (your SendGrid API key)
4. Deploy. Vercel will provide a preview URL and a production URL.

Custom domain (westhighstandards.com)
1. Buy the domain at Namecheap or Cloudflare (example Namecheap search: https://www.namecheap.com/domains/registration/results/?domain=westhighstandards.com )
2. In Vercel, add the domain: Project -> Settings -> Domains -> Add.
3. Vercel will show DNS records. Common DNS entries for Vercel are:
   - A record: @ -> 76.76.21.21
   - CNAME: www -> cname.vercel-dns.com
   Use the exact records Vercel shows.

SendGrid setup
1. Create a SendGrid account (https://sendgrid.com) and verify sender identity (orders@westhighstandards.com) under Sender Authentication.
2. Add the DKIM/SPF DNS records SendGrid provides to your registrar.
3. Create an API key with Mail Send permission and set it as SENDGRID_API_KEY in Vercel.

Security notes
- The admin.html page is not protected — protect it with Vercel Password Protection, or implement authentication before going live.

Next steps I can do for you
- Help purchase the domain (I will prepare Namecheap/Cloudflare links) — you must complete payment.
- Verify DNS and finish SendGrid verification once you add the provider records.
- Generate final QR codes pointing to the live domain after DNS is set.
