const LESSONS=[
["01","Hallo! Ich bin…","Begrüßung, Name, Herkunft","sein · W-Fragen","👋"],
["02","Zahlen, Alphabet, persönliche Daten","Alter, Telefon, Adresse","haben · Zahlen · buchstabieren","🔢"],
["03","Familie und Personen","Familie, Beziehungen","Possessivartikel · Plural","👨‍👩‍👧"],
["04","Mein Tag","Tagesablauf","Präsens · Satzstellung","⏰"],
["05","Uhrzeit und Termine","Zeit, Wochentage, Monate","um/am/im · von…bis","📅"],
["06","Essen und Trinken","Lebensmittel, Café","Akkusativ · möchten","🥐"],
["07","Einkaufen","Preise, Mengen, Geschäfte","kein/nicht · Akkusativ","🛍️"],
["08","Kleidung und Farben","Kleidung, Größen","dieser/welcher · Adjektive","👗"],
["09","Wohnen","Zimmer, Möbel, Wohnung","es gibt · lokale Präpositionen","🏠"],
["10","In der Stadt","Orte und Wege","wo/wohin · zu/nach/in","🗺️"],
["11","Unterwegs","Bus, Bahn, Zug","mit + Dativ · trennbare Verben","🚆"],
["12","Freizeit und Hobbys","Sport, Musik, Freunde","gern/lieber · können","🎵"],
["13","Arbeit und Beruf","Berufe, Arbeitsplatz","müssen/sollen · Präsens","💼"],
["14","Im Restaurant","Bestellen, bezahlen","möchten · hätte gern","🍽️"],
["15","Gesundheit","Körper, Arzt, Apotheke","mir/dir · weh tun","🩺"],
["16","Wetter und Jahreszeiten","Wetter, Kleidung","es ist · wenn nötig Imperativ","🌦️"],
["17","Einladungen und Feste","Geburtstag, Treffen","dürfen/wollen · Akkusativ","🎉"],
["18","Hoteldeutsch","Rezeption, Zimmer, Gast","Sie-Form · höfliche Bitten","🏨"],
["19","Vergangenheit: Perfekt","gestern, letzte Woche","haben/sein + Partizip II","🕰️"],
["20","A1 Abschluss","Wiederholung + Sprechen","A1 Gesamtwiederholung","🏁"]
];
function lessonCards(){const el=document.querySelector("#lessonGrid");if(!el)return;el.innerHTML=LESSONS.map((l,i)=>`<a class="card" href="lessons/${l[0]}.html" style="text-decoration:none;color:inherit"><span class="tag">Lektion ${i+1}</span><h3>${l[4]} ${l[1]}</h3><p>${l[2]}</p><div class="small">${l[3]}</div><div class="progress"><span style="width:${Math.min(100,20+i*4)}%"></span></div><b>Öffnen →</b></a>`).join("")}lessonCards();