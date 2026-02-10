# Email Setup Guide

## Quick Setup (5 minutes)

Your forms are configured to send emails to **oawotokun@gmail.com** while displaying **victor@milescam.com** on the website.

### Step 1: Get Your Free Web3Forms Access Key

1. Go to: https://web3forms.com
2. Enter your email: **oawotokun@gmail.com**
3. Click "Get Your Access Key"
4. Copy the access key (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Add the Key to Your Code

1. Open `frontend/js/main.js`
2. Find this line (around line 8):
   ```javascript
   const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key:
   ```javascript
   const WEB3FORMS_ACCESS_KEY = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
   ```

### Step 3: Deploy

1. Commit and push the changes to GitHub
2. Netlify will automatically deploy
3. Test the forms on your live site

## How It Works

- **Beta Registration Form**: Sends to oawotokun@gmail.com with all application details
- **Contact Form**: Sends to oawotokun@gmail.com with message details
- **Display Email**: victor@milescam.com (shown on website)
- **Recipient Email**: oawotokun@gmail.com (where emails actually go)

## Free Tier Limits

- **250 emails/month** (free tier)
- No credit card required
- Works immediately after setup

## Alternative: EmailJS

If you prefer EmailJS instead:
1. Go to https://www.emailjs.com
2. Create account and set up Gmail service
3. Create email templates
4. Update the code in `js/main.js` to use EmailJS instead

## Testing

After setup, test both forms:
1. Fill out the Beta Registration form
2. Fill out the Contact form
3. Check oawotokun@gmail.com for the emails

---

**Note**: The forms will still work (show success messages) even without the access key, but emails won't be sent until you add your key.
