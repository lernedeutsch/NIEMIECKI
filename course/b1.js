const LESSONS=[
["01","Auf B1 ankommen","flüssiger erzählen und reagieren","Perfekt · Präteritum · Satzverknüpfung","🚀"],
["02","Alltag und Gewohnheiten","Routinen, Veränderungen, Prioritäten","während · bevor · nachdem","🗓️"],
["03","Arbeit und Karriere","Aufgaben, Verantwortung, Bewerbung","Relativsätze · weil/dass","💼"],
["04","Im Hotel sicher kommunizieren","Gäste, Reklamationen, Lösungen","Konjunktiv II · höfliche Sprache","🏨"],
["05","Wohnen und Nachbarschaft","Miete, Konflikte, Umzug","Wechselpräpositionen · Relativsätze","🏠"],
["06","Gesundheit und Wohlbefinden","Beschwerden, Arzt, Gewohnheiten","wenn/falls · sollten","🩺"],
["07","Reisen und Mobilität","Verspätungen, Planung, Erfahrungen","indirekte Fragen · Präpositionen","🚆"],
["08","Einkaufen und Konsum","Reklamation, Vergleich, Entscheidung","Adjektivdeklination · Komparativ","🛍️"],
["09","Essen, Ernährung und Restaurant","Vorlieben, Qualität, Beschwerden","obwohl · trotzdem · weil","🍽️"],
["10","Freizeit und Kultur","Filme, Veranstaltungen, Empfehlungen","Relativsätze · Präpositionen","🎭"],
["11","Medien und Internet","Nachrichten, soziale Medien, Meinung","Passiv Präsens · dass","📱"],
["12","Familie und Beziehungen","Konflikte, Gefühle, Unterstützung","obwohl · während · Pronomen","👨‍👩‍👧"],
["13","Behörden und Organisation","Anträge, Termine, Formalitäten","Passiv · indirekte Fragen","🏛️"],
["14","Telefonieren und Schreiben","E-Mails, Nachrichten, formell/informell","Konjunktiv II · Konnektoren","📞"],
["15","Umwelt und Nachhaltigkeit","Klima, Energie, Alltag","deshalb · dadurch · um…zu","🌱"],
["16","Lernen und Weiterbildung","Strategien, Ziele, Fortschritt","zu + Infinitiv · damit","📚"],
["17","Meinungen und Diskussionen","argumentieren, zustimmen, widersprechen","einerseits/andererseits · obwohl","💬"],
["18","Probleme und Konflikte lösen","Missverständnisse, Vorschläge, Kompromisse","Konjunktiv II · falls","🧩"],
["19","Erlebnisse und Geschichten","detailliert erzählen, Spannung aufbauen","Präteritum · Plusquamperfekt-Basis","📖"],
["20","B1 Abschluss","freies Sprechen + Prüfungssimulation","B1 Gesamtwiederholung","🏁"]
];
function lessonCards(){const el=document.querySelector("#lessonGrid");if(!el)return;el.innerHTML=LESSONS.map((l,i)=>`<a class="card" href="b1-lessons/${l[0]}.html" style="text-decoration:none;color:inherit"><span class="tag">Lektion ${i+1}</span><h3>${l[4]} ${l[1]}</h3><p>${l[2]}</p><div class="small">${l[3]}</div><b>Öffnen →</b></a>`).join("")}lessonCards();