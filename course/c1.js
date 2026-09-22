const LESSONS=[
["01","Auf C1 ankommen","präzise, flexibel und spontan sprechen","Register · Nuancen · komplexe Satzverknüpfung","🚀"],
["02","Arbeit, Verantwortung und Führung","Entscheidungen, Prioritäten, Feedback","Nominalstil · Passiv · Relativsätze","💼"],
["03","Karriere und berufliche Entwicklung","Kompetenzen, Ziele, Verhandlungen","Partizipialattribute · Konjunktiv II","📈"],
["04","Professionelle Kommunikation im Hotel","Eskalationen, Beschwerden, Lösungen","Register · indirekte Rede · Konjunktiv II","🏨"],
["05","Wohnen, Verträge und Konflikte","Mietfragen, Rechte, Verhandlungen","Nominalisierung · Passiv · Präpositionen","🏠"],
["06","Gesundheit und Entscheidungen","Risiken, Prävention, Abwägungen","sofern · zumal · dadurch dass","🩺"],
["07","Reisen, Mobilität und Organisation","komplexe Planung, Störungen, Rechte","indirekte Rede · Partizipien","🚆"],
["08","Konsum, Ansprüche und Argumentation","Reklamation, Recht, Verhandlung","Nominalstil · je…desto · Passiv","🛍️"],
["09","Ernährung, Gastronomie und Trends","Qualität, Gewohnheiten, Debatten","wobei · wodurch · insofern","🍽️"],
["10","Kultur und Gesellschaft","Positionen, Deutung, gesellschaftliche Themen","Partizipialattribute · Relativsätze","🎭"],
["11","Medien, Sprache und Manipulation","Quellen, Framing, Glaubwürdigkeit","indirekte Rede · Passiv · Modalität","📰"],
["12","Beziehungen und soziale Dynamik","Grenzen, Erwartungen, Konflikte","indem · sodass · wohingegen","👥"],
["13","Behörden, Recht und Formalitäten","Verfahren, Schreiben, Begründungen","Nominalstil · Passiv · Register","🏛️"],
["14","Professionell telefonieren und schreiben","präzise, diplomatisch, adressatengerecht","Modalpartikeln · Konjunktiv II · Register","📞"],
["15","Umwelt, Wirtschaft und Nachhaltigkeit","Folgen, Maßnahmen, Zielkonflikte","insofern · zumal · dadurch dass","🌍"],
["16","Lernen, Wissen und Weiterbildung","Strategien, Metakognition, Transfer","Nominalisierung · Infinitivkonstruktionen","📚"],
["17","Meinungen, Debatten und Rhetorik","abwägen, einordnen, widersprechen","Konzession · Einschränkung · Gewichtung","💬"],
["18","Verhandlungen und Konfliktlösung","Interessen, Spielräume, Kompromisse","Bedingungssätze · Konjunktiv II","🤝"],
["19","Komplex erzählen und analysieren","Perspektive, Rückblick, Interpretation","Plusquamperfekt · Tempuswechsel · Konnektoren","📖"],
["20","C1 Abschluss","freie, präzise und differenzierte Kommunikation","C1 Gesamtwiederholung","🏁"]
];
function lessonCards(){const el=document.querySelector("#lessonGrid");if(!el)return;el.innerHTML=LESSONS.map((l,i)=>`<a class="card" href="c1-lessons/${l[0]}.html" style="text-decoration:none;color:inherit"><span class="tag">Lektion ${i+1}</span><h3>${l[4]} ${l[1]}</h3><p>${l[2]}</p><div class="small">${l[3]}</div><b>Öffnen →</b></a>`).join("")}lessonCards();