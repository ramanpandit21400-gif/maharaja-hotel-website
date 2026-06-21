# Live Google Rating Setup Guide
### (For Maharaja Hotel website — or any client site using this template)

This guide turns the static "4.7 ★ · 153 Reviews" text into a number that updates automatically whenever the business's real Google rating changes — no manual editing ever again.

**Important:** This only works once the site is deployed on Vercel (or similar). If you just open the HTML file by double-clicking it, the rating will stay as the static fallback number — that's expected, not a bug.

---

## What you're setting up

```
Browser  →  yoursite.vercel.app/api/rating  →  Google Places API  →  Google's servers
           (your serverless function,            (your API key lives
            API key hidden here)                  only here, never in browser)
```

The API key never reaches the visitor's browser. This matters — an exposed key can be stolen and abused by anyone who views your page source.

---

## Step 1 — Get a Google Cloud account & enable the Places API

1. Go to **console.cloud.google.com** and sign in (any Gmail account works).
2. Create a new Project (top-left dropdown → "New Project"). Name it anything, e.g. "Maharaja Hotel Website".
3. In the search bar, type **"Places API (New)"** and open it.
4. Click **Enable**.
5. Go to **APIs & Services → Credentials → Create Credentials → API Key**.
6. Copy the key that appears (looks like `AIzaSy...`). Keep this tab open.
7. **Restrict the key** (important, do not skip):
   - Click the key you just made → "API restrictions" → select **Places API (New)** only.
   - Under "Application restrictions," choose **IP addresses** (since this key is used server-side by Vercel, not in a browser) — or leave unrestricted only if you're not comfortable with IP lists; restricting by API is the critical part.
8. Google gives a **free monthly credit** (currently enough for thousands of requests/month for a single business site). Add a billing account if Google asks — you will not be charged unless you go far beyond the free tier, which a single restaurant site won't.

---

## Step 2 — Find the correct Google Place ID

This is the unique ID for *this exact business* on Google Maps. Getting the wrong one will show a different business's rating, so do this carefully.

1. Open: **https://developers.google.com/maps/documentation/places/web-service/place-id**
2. Scroll to the **"Place ID Finder"** tool embedded on that page (or search "Google Place ID Finder" and use the official widget).
3. Type the exact business name + address, e.g.:
   `Maharaja Hotel & Family Restaurant, Back Side Nagar Palika, Near TK Nagina, Charkhi Dadri, Haryana 127306`
4. Click the correct pin on the map that matches the business (double-check the rating shown matches what you expect — there may be more than one similarly-named place nearby).
5. Copy the **Place ID** shown (looks like `ChIJp1-VoKWJplQRMz8g-7Wa3Do`).

---

## Step 3 — Deploy the site on Vercel

1. Go to **vercel.com** → sign up free (GitHub login is easiest).
2. Click **Add New → Project**.
3. Upload/import the project folder you received (it contains `index.html`, `app.js`, `images.js`, `vercel.json`, and an `api/rating.js` file).
   - Easiest path: create a free GitHub repo, push these files to it, then import that repo into Vercel.
4. Before clicking Deploy, go to **Environment Variables** and add:

   | Name | Value |
   |---|---|
   | `GOOGLE_PLACES_API_KEY` | the key you copied in Step 1 |
   | `GOOGLE_PLACE_ID` | the Place ID you copied in Step 2 |

5. Click **Deploy**. Vercel gives you a live URL like `maharaja-hotel.vercel.app`.
6. Open the site — the rating numbers on the Home page (hero strip + lobby photo badge) and About Us page (trust strip) will now show the real, live Google rating.

---

## Step 4 — Connect your own domain (optional but recommended for resale)

1. In the Vercel project → **Settings → Domains** → add the client's domain (e.g. `maharajahoteldadri.com`).
2. Vercel shows DNS records to add — give these to the client's domain registrar (GoDaddy, Hostinger, etc.), or do it for them.
3. Once DNS propagates (a few minutes to a few hours), the site is live on their own domain with the rating feature working.

---

## How it behaves

- Rating is fetched once per browser session and cached for 6 hours, so the site stays fast and doesn't hit Google's API on every click.
- If the API key or Place ID is ever missing/wrong, the site quietly falls back to the static number already written in the page — **it never shows an error to visitors.**
- To update the static fallback number (e.g. before the API is even set up), just edit the numbers directly in `app.js` — search for `4.7` and `153`.

---

## Reselling this to other clients

For each new client, repeat Steps 1–4 with their own Google account, their own API key, and their own Place ID. You never need to hold or manage anyone's credentials — full access is handed over to them at the time of setup, exactly as planned.
