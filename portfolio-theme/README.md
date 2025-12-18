# HubSpot Portfolio Theme

A modern, fully customizable portfolio landing page theme built with HubSpot CMS. This theme allows content creators to build beautiful portfolio websites with drag-and-drop functionality and editable modules.

## 🌟 Features

### Custom Modules
- **Hero Banner** - Full-width identity section with image, headline, bio, and CTA button
- **Skills Grid** - Display technical skills with icons in a responsive grid layout
- **Project Cards** - Showcase portfolio projects with images, descriptions, and links
- **Contact Section** - Contact information and social media links

### Technical Features
- ✅ **50%+ Editability** - All modules use `fields.json` for easy content editing
- ✅ **Drag-and-Drop** - Full `dnd_area` implementation for flexible layouts
- ✅ **Responsive Design** - Mobile-first approach, optimized for all devices
- ✅ **Modern Tech Stack** - HTML5, CSS3, JavaScript, HubL
- ✅ **Interactive Elements** - Smooth animations, hover effects, scroll-to-top button
- ✅ **Theme Variables** - CSS custom properties for easy customization

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Development Workflow](#development-workflow)
5. [File Structure](#file-structure)
6. [Module Documentation](#module-documentation)
7. [Customization](#customization)
8. [Troubleshooting](#troubleshooting)
9. [CLI Commands Reference](#cli-commands-reference)

---

## 🔧 Prerequisites

Before you begin, ensure you have:
- **Node.js** (v12 or higher) - [Download](https://nodejs.org/)
- **HubSpot Account** (free or paid) - [Sign up](https://www.hubspot.com/)
- **Text Editor** - VS Code recommended
- **Command Line** - PowerShell (Windows), Terminal (Mac/Linux)

---

## 🚀 Installation

### Step 1: Install HubSpot CLI

Open your terminal and run:

```bash
npm install -g @hubspot/cli
```

### Step 2: Authenticate with HubSpot

```bash
hs auth
```

Follow the prompts to:
1. Choose your HubSpot account
2. Authorize the CLI
3. Name your configuration (e.g., "production")

This creates a `hubspot.config.yml` file in your home directory.

### Step 3: Upload Theme to HubSpot

Navigate to your project directory:

```bash
cd path/to/E-Commerce-Project
```

Upload the theme:

```bash
hs upload portfolio-theme portfolio-theme
```

**Note:** The first `portfolio-theme` is your local folder, the second is the destination in HubSpot.

### Step 4: Verify Upload

1. Log into HubSpot
2. Go to **Marketing** → **Files and Templates** → **Design Tools**
3. Find your `portfolio-theme` folder in the file tree
4. Verify all files are present

---

## 💻 Usage

### Creating a Page with Your Theme

1. **Navigate to Pages:**
   - Go to **Marketing** → **Website** → **Website Pages**

2. **Create New Page:**
   - Click **Create** → **Website page**

3. **Select Theme:**
   - Choose **"Portfolio Theme"**

4. **Select Template:**
   - Choose **"Portfolio Landing Page"**

5. **Edit Content:**
   - Click on modules to edit their content
   - Drag modules to reorder them
   - Add/remove sections as needed

6. **Configure Settings:**
   - Click **Settings** tab
   - Set page URL, title, and meta description

7. **Preview & Publish:**
   - Click **Preview** to see your page
   - Click **Publish** when ready

---

## 🔄 Development Workflow

### Watch Mode (Auto-Upload)

For active development, use watch mode to automatically upload changes:

```bash
hs watch portfolio-theme portfolio-theme
```

Now any file you save will automatically upload to HubSpot!

**To stop watching:** Press `Ctrl+C`

### Manual Upload

To upload specific files or folders:

```bash
# Upload entire theme
hs upload portfolio-theme portfolio-theme

# Upload specific file
hs upload portfolio-theme/css/theme.css portfolio-theme/css/theme.css

# Upload specific module
hs upload portfolio-theme/modules/hero-banner.module portfolio-theme/modules/hero-banner.module
```

### Fetch from HubSpot

To download changes made in HubSpot Design Manager:

```bash
hs fetch portfolio-theme portfolio-theme --overwrite
```

---

## 📁 File Structure

```
portfolio-theme/
├── theme.json                 # Theme configuration
├── fields.json                # Theme-level fields (empty for now)
├── css/
│   └── theme.css             # Global theme styles
├── js/
│   └── theme.js              # Global theme JavaScript
├── modules/
│   ├── hero-banner.module/
│   │   ├── meta.json         # Module configuration
│   │   ├── fields.json       # Editable fields
│   │   ├── module.html       # Module markup
│   │   └── module.css        # Module styles
│   ├── skills-grid.module/
│   ├── project-cards.module/
│   └── simple-contact.module/
└── templates/
    ├── portfolio-landing.html # Template markup
    └── portfolio-landing.json # Template configuration
```

---

## 📦 Module Documentation

### 1. Hero Banner Module

**Location:** `modules/hero-banner.module/`

**Editable Fields:**
- `hero_image` (Image) - Profile photo with alt text
- `headline` (Text) - Main headline/tagline
- `bio` (Rich Text) - Bio description with HTML formatting
- `cta_link` (Link) - Button URL with open in new tab options
- `cta_text` (Text) - Button text

**Styling:**
- Full-width background gradient
- Responsive image sizing
- Hover effects on button
- Mobile-optimized layout

---

### 2. Skills Grid Module

**Location:** `modules/skills-grid.module/`

**Editable Fields:**
- `skills_title` (Text) - Section heading
- `skill_group` (Group - Repeatable) - Multiple skill items:
  - `skill_icon` (Image) - Skill logo/icon
  - `skill_name` (Text) - Skill name

**Features:**
- Responsive grid layout (auto-fits based on screen size)
- Hover animations
- Icon support
- Default skills: HTML5, CSS3, JavaScript, HubL

---

### 3. Project Cards Module

**Location:** `modules/project-cards.module/`

**Editable Fields:**
- `projects_title` (Text) - Section heading
- `project_group` (Group - Repeatable) - Multiple projects:
  - `project_image` (Image) - Project screenshot
  - `project_title` (Text) - Project name
  - `project_description` (Rich Text) - Project details
  - `project_url` (Text) - Link to live project

**Features:**
- Card-based layout
- Hover effects
- Responsive grid
- Default projects included

---

### 4. Simple Contact Module

**Location:** `modules/simple-contact.module/`

**Editable Fields:**
- `contact_title` (Text) - Section heading
- `contact_details` (Rich Text) - Contact information with HTML
- `social_links` (Group - Repeatable) - Social media links:
  - `platform_name` (Text) - Social platform name
  - `platform_url` (Text) - Profile URL
  - `platform_icon` (Image) - Social icon (optional)

**Features:**
- Flexible contact layout
- Social media integration
- Custom icons support

---

## 🎨 Customization

### Changing Colors

Edit CSS variables in `css/theme.css`:

```css
:root {
  --primary-color: #667eea;      /* Primary brand color */
  --secondary-color: #764ba2;    /* Secondary/gradient color */
  --background-color: #f8f9fa;   /* Page background */
  --text-color: #333;            /* Body text */
  --text-light: #666;            /* Light text */
}
```

### Changing Fonts

1. Find Google Fonts at [fonts.google.com](https://fonts.google.com)
2. Update the link in `templates/portfolio-landing.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

3. Update the font-family in CSS:

```css
body {
  font-family: 'YourFont', sans-serif;
}
```

### Adding New Modules

```bash
hs create module portfolio-theme/modules/your-module-name.module
```

This creates a new module folder with all necessary files.

### Modifying Layout

The template uses HubSpot's drag-and-drop areas. To modify:

1. Edit `templates/portfolio-landing.html`
2. Use `{% dnd_section %}`, `{% dnd_column %}`, and `{% dnd_module %}` tags
3. Refer to [HubSpot DND Documentation](https://developers.hubspot.com/docs/cms/building-blocks/templates/drag-and-drop-areas)

---

## 🐛 Troubleshooting

### Theme Doesn't Appear in HubSpot

**Solution:**
- Verify `theme.json` has `"is_available_for_new_content": true`
- Check that all module folders have `.module` extension
- Re-upload the theme
- Wait a few minutes for HubSpot to index

### Modules Not Editable

**Solution:**
- Ensure each module has a valid `fields.json`
- Check for JSON syntax errors
- Verify field types are supported by HubSpot

### CSS Changes Not Showing

**Solution:**
- Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
- Clear HubSpot cache
- Check if CSS file uploaded successfully
- Verify file paths are correct

### Upload Errors

**Common Issues:**
- Field type not supported (use text, richtext, link, image, etc.)
- Module folders must have `.module` extension
- Template must have proper annotations
- Check HubSpot CLI is authenticated (`hs auth`)

---

## 📚 CLI Commands Reference

### Setup Commands

```bash
# Install CLI
npm install -g @hubspot/cli

# Check version
hs --version

# Authenticate
hs auth

# List accounts
hs accounts list
```

### Upload/Download Commands

```bash
# Upload entire theme
hs upload portfolio-theme portfolio-theme

# Upload with watch mode
hs watch portfolio-theme portfolio-theme

# Download from HubSpot
hs fetch portfolio-theme portfolio-theme

# Fetch and overwrite local files
hs fetch portfolio-theme portfolio-theme --overwrite
```

### File Operations

```bash
# List files in HubSpot
hs list portfolio-theme

# Remove file from HubSpot
hs remove portfolio-theme/path/to/file

# Move/rename file
hs mv portfolio-theme/old-path portfolio-theme/new-path
```

### Creation Commands

```bash
# Create new module
hs create module portfolio-theme/modules/module-name.module

# Create new template
hs create template portfolio-theme/templates/template-name.html

# Create website page template
hs create template portfolio-theme/templates/new-page.html --type=page
```

### Utility Commands

```bash
# Open HubSpot in browser
hs open

# View logs
hs logs

# Get help
hs --help
```

---

## 📧 Support

For questions or support:
- Create an issue on GitHub
- Contact: [fahdelkholy2004@gmail.com]
