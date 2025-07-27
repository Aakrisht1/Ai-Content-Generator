# 🚀 AI Content Generator

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" alt="Drizzle ORM" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk Auth" />
</div>

<div align="center">
  <h3>🎯 Generate High-Quality Content with AI Power</h3>
  <p>A modern, full-stack application that leverages artificial intelligence to create engaging content across multiple formats and templates.</p>
</div>

---

## ✨ Features

🤖 **AI-Powered Content Generation**
- Multiple content templates (Blog titles, articles, social media posts, etc.)
- Smart HTML formatting for rich text editors
- Context-aware content creation

📊 **Dashboard & Analytics**
- Personal dashboard with content history
- Usage tracking and credit management
- Real-time generation status

🔐 **Secure Authentication**
- Clerk authentication integration
- User management and profiles
- Protected routes and API endpoints

💰 **Billing & Subscription**
- Credit-based usage system
- Billing management interface
- Usage limits and notifications

📝 **Rich Text Editor**
- Toast UI Editor integration
- HTML output formatting
- Copy and export functionality

🎨 **Modern UI/UX**
- Responsive design with Tailwind CSS
- Dark/Light theme support
- Smooth animations with Framer Motion
- Professional shadcn/ui components

## 🏗️ Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern UI components
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[Toast UI Editor](https://ui.toast.com/tui-editor)** - Rich text editing

### Backend & Database
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe database toolkit
- **[PostgreSQL](https://www.postgresql.org/)** - Reliable relational database

### Authentication & Services
- **[Clerk](https://clerk.dev/)** - Complete authentication solution
- **AI Integration** - Powered by advanced language models

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Clerk account for authentication

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/content-generator.git
cd content-generator
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup**
```bash
cp .env.example .env.local
```

Fill in your environment variables:
```env
# Database
DATABASE_URL="your_postgresql_connection_string"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# AI Service (OpenAI/Gemini)
AI_API_KEY=your_ai_api_key
```

4. **Database Setup**
```bash
npm run db:push
# or
npx drizzle-kit push:pg
```

5. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser! 🎉

## 📁 Project Structure

```
content-generator/
├── app/                    # Next.js 14 App Router
│   ├── (auth)/            # Authentication routes
│   ├── (context)/         # Context providers
│   ├── (data)/            # Data and templates
│   ├── dashboard/         # Dashboard pages
│   │   ├── billing/       # Billing management
│   │   ├── content/       # Content generation
│   │   ├── history/       # Generation history
│   │   └── settings/      # User settings
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility libraries
├── utils/                # Helper functions
├── public/               # Static assets
├── drizzle.config.js     # Database configuration
└── middleware.ts         # Next.js middleware
```

## 🎯 Usage

### 1. **Choose a Template**
Select from various content templates like:
- 📝 Blog titles and articles
- 📱 Social media posts
- 📧 Email campaigns
- 🎯 Marketing copy
- And more!

### 2. **Fill the Form**
Provide context and requirements:
- Topic or subject
- Target audience
- Tone and style
- Additional specifications

### 3. **Generate Content**
Click generate and watch AI create:
- High-quality, contextual content
- Properly formatted HTML output
- Ready-to-use text for your needs

### 4. **Edit & Export**
- Use the built-in rich text editor
- Make adjustments as needed
- Copy or export your content

## 🔧 Configuration

### Database Schema
The project uses [Drizzle ORM](drizzle.config.js) for database management with the following key tables:
- `users` - User profiles and settings
- `ai_output` - Generated content history
- `templates` - Content templates
- `billing` - Subscription and usage tracking

### AI Model Configuration
Content generation is handled by [`utils/AIModel.tsx`](app/dashboard/content/[template-slug]/page.tsx) with:
- Structured prompts for consistency
- HTML formatting instructions
- Template-specific optimizations

## 🎨 Customization

### Adding New Templates
1. Create template configuration in [`app/(data)/Templates.tsx`](app/dashboard/content/[template-slug]/_components/OutputSection.tsx)
2. Define form fields and AI prompts
3. Add to the templates array

### Styling
- Modify [`app/globals.css`](app/globals.css) for global styles
- Use Tailwind classes for component styling
- Customize theme in [`components.json`](components.json)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for deployment platform
- [Clerk](https://clerk.dev/) for authentication services
- [shadcn](https://ui.shadcn.com/) for beautiful UI components
- [Drizzle Team](https://orm.drizzle.team/) for the excellent ORM

---

<div align="center">
  <p>Made with ❤️ and powered by AI</p>
  <p>
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-usage">Usage</a>
  </p>
</div>