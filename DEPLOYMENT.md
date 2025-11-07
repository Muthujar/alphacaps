# Deployment Guide - ConstructionCo

This guide will help you deploy your ConstructionCo website to Vercel.

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ConstructionCo website"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!**
   - Your site will be live at `https://your-project.vercel.app`
   - Vercel provides automatic HTTPS and global CDN

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Variables (Optional)

If you add email functionality later, add these environment variables in Vercel:

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add the following:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@constructionco.com
ADMIN_EMAIL=admin@constructionco.com
```

## Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the instructions to update DNS records

## Build Settings

Vercel automatically detects these settings (already configured):

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## Performance Optimization Tips

1. **Images**: Replace placeholder backgrounds with optimized images
2. **Fonts**: Already using `next/font` for optimized font loading
3. **Caching**: Vercel handles automatic caching
4. **Analytics**: Consider adding Vercel Analytics in project settings

## Monitoring

After deployment:

1. **Check Build Logs**: Monitor build status in Vercel dashboard
2. **Test Form Submission**: Submit a test enquiry and check console logs
3. **Mobile Testing**: Test on actual mobile devices
4. **Performance**: Run Lighthouse audit

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test locally with `npm run build`

### Form Not Working
- Check API route is deployed: `/api/sendMail`
- Check browser console for errors
- Verify form validation is working

### Styles Not Loading
- Clear Vercel cache and redeploy
- Check TailwindCSS configuration
- Verify `globals.css` is imported in layout

## Post-Deployment Checklist

- [ ] Test all sections load correctly
- [ ] Submit test enquiry form
- [ ] Check responsive design on mobile
- [ ] Test all navigation links
- [ ] Verify SEO meta tags (view source)
- [ ] Check social media links
- [ ] Test on different browsers
- [ ] Set up custom domain (if applicable)
- [ ] Add environment variables (if using email)
- [ ] Monitor analytics

## Continuous Deployment

Once connected to Git:
- Every push to `main` branch triggers automatic deployment
- Pull requests create preview deployments
- Rollback available through Vercel dashboard

## Support

For deployment issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

---

**Your site is now live! 🎉**

Share your URL: `https://your-project.vercel.app`


