const LESSONS=[
["01","Auf B2 ankommen","präziser sprechen und Nuancen ausdrücken","Nebensätze · Register · Wortstellung","🚀"],
["02","Arbeit und Verantwortung","Aufgaben, Führung, Konflikte","Passiv · Relativsätze · Konjunktiv II","💼"],
["03","Bewerbung und Karriere","Kompetenzen, Ziele, Entwicklung","Nominalstil · weil/da · um…zu","📈"],
["04","Im Hotel professionell handeln","Beschwerden, Eskalation, Lösungen","höfliche Distanz · Konjunktiv II","🏨"],
["05","Wohnen und Mietrecht im Alltag","Mängel, Vertrag, Nachbarschaft","Passiv · Relativsätze · Präpositionen","🏠"],
["06","Gesundheit und Lebensstil","Symptome, Prävention, Entscheidungen","Konjunktiv II · falls · sofern","🩺"],
["07","Reisen und Mobilität","Planung, Störungen, Alternativen","indirekte Rede · Partizipien","🚆"],
["08","Konsum und Reklamation","Ansprüche, Vergleich, Argumentation","Adjektivdeklination · je…desto","🛍️"],
["09","Ernährung und Gastronomie","Qualität, Service, Gewohnheiten","obwohl · während · wodurch","🍽️"],
["10","Kultur und Gesellschaft","Veranstaltungen, Trends, Perspektiven","Relativsätze · Partizipialattribute","🎭"],
["11","Medien und Information","Quellen, Meinung, Manipulation","Passiv · indirekte Rede","📰"],
["12","Familie und Beziehungen","Erwartungen, Grenzen, Konflikte","obwohl · indem · sodass","👨‍👩‍👧"],
["13","Behörden und Formalitäten","Anträge, Schreiben, Prozesse","Nominalstil · Passiv · indirekte Fragen","🏛️"],
["14","Telefonieren und professionelle Kommunikation","E-Mails, Rückfragen, Vereinbarungen","Register · Konjunktiv II · Partikeln","📞"],
["15","Umwelt und Nachhaltigkeit","Maßnahmen, Folgen, Positionen","dadurch · indem · sodass","🌱"],
["16","Lernen und Weiterbildung","Strategien, Feedback, Selbststeuerung","Infinitivkonstruktionen · Nominalisierung","📚"],
["17","Meinungen und Debatten","abwägen, argumentieren, differenzieren","einerseits/andererseits · zwar/aber","💬"],
["18","Probleme und Verhandlungen","Interessen, Kompromisse, Lösungen","Konjunktiv II · falls · vorausgesetzt","🤝"],
["19","Erlebnisse und komplexe Geschichten","Hintergründe, Perspektiven, Spannung","Plusquamperfekt · Konnektoren","📖"],
["20","B2 Abschluss","freies Sprechen + Prüfungssimulation","B2 Gesamtwiederholung","🏁"]
];
function lessonCards(){const el=document.querySelector("#lessonGrid");if(!el)return;el.innerHTML=LESSONS.map((l,i)=>`<a class="card" href="b2-lessons/${l[0]}.html" style="text-decoration:none;color:inherit"><span class="tag">Lektion ${i+1}</span><h3>${l[4]} ${l[1]}</h3><p>${l[2]}</p><div class="small">${l[3]}</div><b>Öffnen →</b></a>`).join("")}lessonCards();