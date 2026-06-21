// /api/rating.js
// Vercel Serverless Function — fetches live Google rating server-side.
// The Google API key NEVER reaches the browser; it stays here on the server.
//
// Required environment variables (set in Vercel dashboard -> Settings -> Environment Variables):
//   GOOGLE_PLACES_API_KEY   -> your Google Cloud API key (Places API (New) enabled)
//   GOOGLE_PLACE_ID         -> the business's Google Place ID
//
// This function is called by the website's frontend JS at: /api/rating

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate=86400');

  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;

  if (!API_KEY || !PLACE_ID) {
    return res.status(500).json({
      error: 'Missing configuration',
      message: 'GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID environment variable is not set in Vercel.',
    });
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'rating,userRatingCount,displayName,googleMapsUri',
      },
    });

    if (!response.ok) {
      const errBody = await response.text();
      return res.status(response.status).json({
        error: 'Google Places API request failed',
        details: errBody,
      });
    }

    const data = await response.json();

    return res.status(200).json({
      rating: data.rating ?? null,
      reviewCount: data.userRatingCount ?? null,
      name: data.displayName?.text ?? null,
      mapsUrl: data.googleMapsUri ?? null,
      fetchedAt: new Date().toISOString(),
    });
  } catch (err) {
    return res.status(500).json({
      error: 'Server error while fetching rating',
      message: err.message,
    });
  }
}
