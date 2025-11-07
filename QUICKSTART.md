# Quick Start Guide - ConstructionCo

Get your ConstructionCo website running in **3 simple steps**!

## Prerequisites
- Node.js 18+ installed
- Git installed

## Step 1: Navigate to Project
```bash
cd constructionCo
```

## Step 2: Install Dependencies
```bash
npm install
```

## Step 3: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser! 🚀

---

## What's Next?

### Customize Content
1. **Update Company Info**: Edit `src/components/Footer.tsx`
2. **Change Colors**: Modify `tailwind.config.ts`
3. **Edit Hero Text**: Update `src/components/Hero.tsx`
4. **Modify Products**: Change `src/components/About.tsx`

### Add Email Functionality
1. Uncomment Nodemailer code in `src/app/api/sendMail/route.ts`
2. Create `.env.local` file (see `.env.example`)
3. Add your SMTP credentials
4. Test the form submission

### Deploy to Production
```bash
npm run build
npm run start
```

Or deploy to Vercel in one click! See `DEPLOYMENT.md` for details.

---

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Need Help?

- 📖 **Full Documentation**: See `README.md`
- 🚀 **Deployment Guide**: See `DEPLOYMENT.md`
- ✨ **Features List**: See `FEATURES.md`

## Project Structure

```
constructionCo/
├── src/
│   ├── app/              # Pages and layouts
│   ├── components/       # React components
│   └── styles/           # Global styles
├── public/               # Static assets
└── Documentation files
```

## Testing Checklist

- [ ] Development server runs without errors
- [ ] All sections visible and styled correctly
- [ ] Form submission shows success message
- [ ] Responsive on mobile (test with browser DevTools)
- [ ] Smooth scroll animations working
- [ ] No console errors

---

**Happy Building! 🏗️**

For questions or issues, check the README.md file.


