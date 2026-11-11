# Frederick Migano Portfolio

## Local development

```bash
npm install
npm run dev
```

## Free deployment

This project is ready for Netlify:

1. Create a free account at [netlify.com](https://www.netlify.com/).
2. Choose **Add new site → Deploy manually** and drag the generated `dist` folder into the upload area.
3. For automatic deploys, push this folder to GitHub and import the repository in Netlify. The included `netlify.toml` configures `npm run build` and `dist`.

Vercel also detects this Vite project automatically. Import the GitHub repository, use `npm run build` as the build command, and `dist` as the output directory.
