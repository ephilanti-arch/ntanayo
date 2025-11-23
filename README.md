# NTanayo Blog

A simple, elegant blog built with Astro and TypeScript, designed to be easy for non-technical users to maintain and publish content.

## What is this?

This is a personal blog that:

- ✅ Automatically publishes when you add or edit blog posts
- ✅ Hosts for free on GitHub Pages
- ✅ Requires no complex setup once installed
- ✅ Works with simple Markdown files (like writing in a text editor)
- ✅ Includes images, tags, and a professional design

## Quick Start for Non-Technical Users

### What You Need

1. A GitHub account (free at [github.com](https://github.com))
2. A text editor (Visual Studio Code is recommended - free at [code.visualstudio.com](https://code.visualstudio.com))
3. Git installed on your computer (download at [git-scm.com](https://git-scm.com))

### How to Write Your First Blog Post

**Step 1: Create a new blog post file**

1. Navigate to the `src/posts/` folder in your project
2. Create a new file with this naming format: `YYYY-MM-DD-your-title.md`
   - Example: `2025-11-25-my-first-post.md`

**Step 2: Add the front matter (post information)**

At the very top of your file, add this template and fill in your information:

```markdown
---
title: 'Your Post Title Here'
date: 2025-11-25
slug: your-post-title-here
categories: [personal, getting-started]
tags: [intro, blogging]
draft: false
---
```

**Step 3: Write your content**

Below the `---` line, write your blog post using Markdown. Here are some examples:

```markdown
# Main Heading

This is a paragraph. Just write naturally!

## Subheading

- Bullet point one
- Bullet point two

**Bold text** and _italic text_

[Link to website](https://example.com)

![Image description](https://images.unsplash.com/photo-example?w=800&q=80)
```

**Step 4: Save and preview locally (optional)**

If you want to see how your post looks before publishing:

1. Open Terminal (Mac/Linux) or Command Prompt (Windows)
2. Navigate to your project folder
3. Run these commands:

```bash
npm install
npm run dev
```

4. Open your browser to `http://localhost:4321/ntanayo/`

**Step 5: Publish your post**

1. In VS Code or Terminal, run these commands:

```bash
git add src/posts/your-new-file.md
git commit -m "Add new blog post: Your Title"
git push origin main
```

2. Wait 1-2 minutes for GitHub Actions to build and deploy
3. Visit your live site: `https://YOUR-USERNAME.github.io/ntanayo/`

## Common Tasks

### Adding Images to Posts

You can use free stock photos from Unsplash or upload your own images:

```markdown
![Description of image](https://images.unsplash.com/photo-ID?w=800&q=80)
_Photo credit_
```

### Hiding a Post (Draft Mode)

In the front matter, change `draft: false` to `draft: true`:

```markdown
---
draft: true
---
```

The post won't appear on your site until you change it back to `false`.

### Organizing with Tags and Categories

Tags and categories help readers find related posts:

```markdown
---
categories: [technology, tutorial]
tags: [web-development, astro, beginners]
---
```

## Technical Setup (One-Time Only)

### For Developers: Local Development

Requirements: Node.js 20+ and pnpm

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

The site will be available at:

- **Development**: `http://localhost:4321/ntanayo/`
- **Production**: `https://ephilanti-arch.github.io/ntanayo/`

### Project Structure

```
ntanayo/
├── src/
│   ├── posts/           # Your blog posts (Markdown files)
│   ├── pages/           # Site pages (index, about, post templates)
│   ├── layouts/         # Page layouts
│   ├── styles/          # CSS styling
│   └── data/            # Site configuration
├── public/              # Static files (images, favicons)
├── .github/workflows/   # Automated deployment
└── astro.config.mjs     # Astro configuration
```

### Customization

**Update site information** in `src/data/site.ts`:

```typescript
export const site: Site = {
  title: 'Your Blog Name',
  author: {
    name: 'Your Name',
    email: 'you@example.com',
  },
  description: 'Your blog description',
  url: 'https://your-username.github.io/your-repo',
  baseurl: '/your-repo',
};
```

**Configure GitHub Pages**:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **gh-pages** branch and **/ (root)** folder
5. Click **Save**

## Features

- 🎨 **Modern Design**: Clean, professional layout with dark theme
- 📱 **Responsive**: Works on all devices (mobile, tablet, desktop)
- 🖼️ **Image Support**: Add images to make posts engaging
- 🏷️ **Tags & Categories**: Organize content for easy discovery
- 📊 **SEO Friendly**: Includes meta tags and sitemap
- 📡 **RSS Feed**: Readers can subscribe at `/rss.xml`
- 🔍 **Google Analytics Ready**: Track your visitors (optional)
- 💬 **Comments**: Utterances integration for GitHub-based comments

## Troubleshooting

### Post not showing up?

- Make sure `draft: false` is in your front matter
- Check that your filename starts with a date: `YYYY-MM-DD-title.md`
- Verify you pushed to the `main` branch
- Wait 1-2 minutes for deployment to complete

### Build failed on GitHub?

1. Go to your repository → **Actions** tab
2. Click on the failed workflow run
3. Read the error message
4. Common fixes:
   - Check for typos in front matter (must be valid YAML)
   - Ensure date format is correct: `YYYY-MM-DD`
   - Verify all required fields are present

### Images not loading?

- Check the image URL is correct and accessible
- Use HTTPS URLs (not HTTP)
- Consider using Unsplash for free, reliable images

### Site showing 404?

- Verify GitHub Pages is configured correctly (Settings → Pages)
- Check that the `gh-pages` branch exists
- Ensure the repository is public or you have GitHub Pro

## Adding Comments (Optional)

To enable GitHub-based comments using Utterances:

1. Visit [utteranc.es](https://utteranc.es)
2. Install the Utterances app on your repository
3. Update `src/data/site.ts`:

```typescript
utterancesRepo: 'your-username/your-repo',
```

## Adding Analytics (Optional)

To track visitors with Google Analytics:

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Copy your Measurement ID (looks like `G-XXXXXXXXXX`)
3. Update `src/data/site.ts`:

```typescript
googleAnalytics: 'G-XXXXXXXXXX',
```

## Getting Help

- **For writing posts**: See the guide at `/posts/how-to-publish-as-non-technical/`
- **For design tips**: Read `/posts/professionalize-blog/`
- **For GitHub issues**: Check the repository [Issues](../../issues) page
- **For Astro help**: Visit [docs.astro.build](https://docs.astro.build)

## License

MIT License - feel free to use this for your own blog!

---

**Ready to publish?** Start by creating your first post in `src/posts/` and push to GitHub!
