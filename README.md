# Hotepo Portfolio

A modern, simple portfolio website that is very easy to update.

## How to update the website (Super Simple)

All content lives in the **content/** folder as plain text files (JSON).

### Files you can edit:

| File | What it controls |
|------|------------------|
| `content/about.json` | Name, tagline, bio, profile picture path, email, location |
| `content/education.json` | Education history |
| `content/skills.json` | Skills (technical, creative, tools) |
| `content/experience.json` | Work experience |
| `content/jobs.json` | Current jobs |
| `content/projects.json` | Apps and Websites |
| `content/stories.json` | Stories |
| `content/articles.json` | Articles |
| `content/poems.json` | Poems |
| `content/socials.json` | Social media links |

### How to change your profile picture
1. Put your photo in the `images/` folder (name it `profile.jpg` or any name)
2. Open `content/about.json`
3. Change the `"profileImage"` value to `"images/your-photo-name.jpg"`

### How to add a new poem / story / article / project
Just open the matching JSON file and add a new object inside the array `[ ]`.

Example for a new poem in `poems.json`:

```json
{
  "title": "My New Poem",
  "date": "2025",
  "content": "Line one\nLine two\nLine three"
}
```

### How to deploy / update on Vercel

**First time:**
1. Create a free account on [vercel.com](https://vercel.com)
2. Create a free account on [github.com](https://github.com)
3. Upload this whole folder to a new GitHub repository
4. In Vercel → "Add New Project" → Import your GitHub repo → Deploy

**Later updates:**
1. Edit any file in the `content/` folder
2. Push the changes to GitHub (or use the GitHub website to edit files directly)
3. Vercel automatically updates the live site in under a minute

### Even simpler (no GitHub knowledge needed)
You can also drag-and-drop the whole folder into Vercel’s dashboard every time you want to update. It works, but GitHub is better long-term.

---

You can edit everything later — nothing is permanent. Just change the text files.
