import { NextResponse } from 'next/server';
import axios from 'axios';

// Umgebungsvariable für den API-Schlüssel
const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

// Deine Google Place ID
const PLACE_ID = process.env.GOOGLE_PLACE_ID || 'DEINE_GOOGLE_PLACE_ID';

export async function GET() {
  try {
    // Mock-Daten für Bewertungen
    const mockData = {
      name: "Rodriguez Web",
      rating: 4.9,
      reviews: [
        {
          author_name: "Max Mustermann",
          profile_photo_url: "https://ui-avatars.com/api/?name=Max+Mustermann&background=random",
          rating: 5,
          text: "Hervorragende Arbeit! Die Website sieht fantastisch aus und funktioniert perfekt. Sehr professioneller Service!",
          time: new Date().getTime() / 1000 - 86400 * 7 // 7 Tage zurück
        },
        {
          author_name: "Maria Schmidt",
          profile_photo_url: "https://ui-avatars.com/api/?name=Maria+Schmidt&background=random",
          rating: 5,
          text: "Rodriguez hat unsere Anforderungen übertroffen. Der Entwicklungsprozess war reibungslos und das Ergebnis überzeugt auf ganzer Linie.",
          time: new Date().getTime() / 1000 - 86400 * 14 // 14 Tage zurück
        },
        {
          author_name: "Thomas Werner",
          profile_photo_url: "https://ui-avatars.com/api/?name=Thomas+Werner&background=random",
          rating: 5,
          text: "Die beste Entscheidung, die wir für unsere Webpräsenz treffen konnten. Kreativ, zuverlässig und technisch einwandfrei.",
          time: new Date().getTime() / 1000 - 86400 * 21 // 21 Tage zurück
        }
      ]
    };

    // Live API-Aufruf nur ausführen, wenn API-Schlüssel und PLACE_ID korrekt gesetzt sind
    if (GOOGLE_API_KEY && PLACE_ID && PLACE_ID !== 'DEINE_GOOGLE_PLACE_ID') {
      try {
        // Abrufen der Platzdaten inkl. Bewertungen von der Google Places API
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${GOOGLE_API_KEY}`
        );

        // Extrahieren der relevanten Daten wenn verfügbar
        if (response.data && response.data.result) {
          const { name, rating, reviews } = response.data.result;
          if (reviews && reviews.length > 0) {
            return NextResponse.json({ name, rating, reviews });
          }
        }
      } catch (apiError) {
        console.error('Fehler beim API-Aufruf:', apiError);
        // Bei API-Fehler trotzdem zu Mock-Daten übergehen
      }
    }

    // Immer Mock-Daten zurückgeben, wenn keine echten Daten verfügbar sind
    return NextResponse.json({ 
      name: mockData.name, 
      rating: mockData.rating, 
      reviews: mockData.reviews 
    });
    
  } catch (error) {
    console.error('Fehler beim Abrufen der Google-Bewertungen:', error);
    return NextResponse.json({ 
      error: 'Fehler beim Abrufen der Google-Bewertungen' 
    }, { status: 500 });
  }
}
