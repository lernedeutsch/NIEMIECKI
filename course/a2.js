const LESSONS=[
["01","Ankommen auf A2","Wiederholen, genauer erzählen","Präsens · Perfekt · Satzstellung","🚀"],
["02","Erlebnisse und Vergangenheit","Reisen, Wochenende, Erfahrungen","Perfekt vertiefen · Präteritum war/hatte","🕰️"],
["03","Pläne und Zukunft","Termine, Vorhaben, Ziele","werden · Zeitangaben · wollen","🎯"],
["04","Wohnen und Nachbarschaft","Wohnung, Umzug, Probleme","Wechselpräpositionen · Dativ/Akkusativ","🏠"],
["05","Arbeit und Bewerben","Beruf, Bewerbung, Arbeitsalltag","weil · dass · Modalverben","💼"],
["06","Im Hotel professionell","Gäste, Beschwerden, Lösungen","höfliche Bitten · würde/könnte","🏨"],
["07","Gesundheit und Arzt","Symptome, Termine, Ratschläge","sollen · müssen · wenn","🩺"],
["08","Einkaufen und Reklamieren","Produkte, Umtausch, Beschwerden","Adjektive · Komparativ","🛍️"],
["09","Essen und Restaurant","Bestellen, Vorlieben, Beschwerden","gern/lieber/am liebsten · Nebensätze","🍽️"],
["10","Unterwegs und Reisen","Bahn, Hotel, Orientierung","Präpositionen · indirekte Fragen","🚆"],
["11","Freizeit und Medien","Hobbys, Fernsehen, Internet","Reflexive Verben · Präpositionen","🎬"],
["12","Familie und Beziehungen","Alltag, Gefühle, Konflikte","Possessivartikel · dass/weil","👨‍👩‍👧"],
["13","Behörden und Alltag","Formulare, Anmeldung, Termine","müssen · dürfen · höfliche Fragen","🏛️"],
["14","Telefonieren und Nachrichten","Anrufen, absagen, verschieben","Konjunktiv II höflich · indirekte Fragen","📞"],
["15","Wetter und Umwelt","Wetter, Natur, Alltag","wenn · deshalb · trotzdem","🌦️"],
["16","Lernen und Sprache","Deutschlernen, Strategien, Fehler","zu + Infinitiv · dass","📚"],
["17","Meinungen ausdrücken","zustimmen, widersprechen, begründen","weil · denn · deshalb","💬"],
["18","Probleme lösen","Beschwerden, Missverständnisse","Konjunktiv II · wenn","🧩"],
["19","Geschichten erzählen","Abläufe, Erlebnisse, Reihenfolge","zuerst/dann/danach · Perfekt","📖"],
["20","A2 Abschluss","Freies Sprechen + Prüfungssimulation","A2 Gesamtwiederholung","🏁"]
];
function lessonCards(){const el=document.querySelector("#lessonGrid");if(!el)return;el.innerHTML=LESSONS.map((l,i)=>`<a class="card" href="a2-lessons/${l[0]}.html" style="text-decoration:none;color:inherit"><span class="tag">Lektion ${i+1}</span><h3>${l[4]} ${l[1]}</h3><p>${l[2]}</p><div class="small">${l[3]}</div><b>Öffnen →</b></a>`).join("")}lessonCards();