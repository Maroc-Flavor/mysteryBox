# MysteryBox Shop

A modern online shop for Mystery Boxes built with Next.js.

## GitHub Pages Deployment Setup

### 1. Environment Setup
1. Go to your repository settings
2. Navigate to "Environments"
3. Create a new environment called "github-pages"
4. Add the following secrets:
   - `NEXT_PUBLIC_PAYPAL_CLIENT_ID`: Your PayPal client ID
   - `NEXT_PUBLIC_API_URL`: Your API endpoint URL

### 2. Environment Protection Rules
1. In the github-pages environment settings:
   - Enable "Required reviewers" and add team members
   - Set "Deployment branches" to main/master only
   - Configure "Wait timer" if needed (e.g., 10 minutes)

### 3. Repository Settings
1. Go to "Pages" settings
2. Set source to "GitHub Actions"

### 4. Development
- Use environment variables in your code:
  ```js
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  ```

### 5. Local Development
1. Create a `.env.local` file:
   ```
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
   NEXT_PUBLIC_API_URL=your_api_url
   ```
2. Run development server:
   ```bash
   npm run dev
   ```

### 6. Build and Deploy
- Push to main branch to trigger automatic deployment
- GitHub Actions will handle the build and deployment process
- Check Actions tab for deployment status

## Technologies

- Next.js
- Tailwind CSS
- TypeScript
- GitHub Pages
