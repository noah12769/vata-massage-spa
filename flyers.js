// ─── FLYERS ────────────────────────────────────────────────────────────────
// Pour ajouter un nouveau flyer :
//   1. Copier l'image dans flyers/
//   2. Copier un bloc ci-dessous et remplir les champs
//   3. git add . && git commit -m "Ajout flyer ..." && git push
// ──────────────────────────────────────────────────────────────────────────

const FLYERS = [
  {
    id:        'fete-des-meres-2026',
    title:     'Fête des Mères',
    image:     'flyers/fete-des-meres.jpg',
    startDate: '2026-05-16',
    endDate:   '2026-06-07',
    message:   'Bonjour, je suis intéressé(e) par votre offre spéciale Fête des Mères 🌸. Pourriez-vous me contacter pour plus d\'informations ?'
  },
  {
    id:        'fete-des-peres-2026',
    title:     'Fête des Pères',
    image:     'flyers/fete-des-peres.png',
    startDate: '2026-06-01',
    endDate:   '2026-06-21',
    message:   'Bonjour, je suis intéressé(e) par votre offre spéciale Fête des Pères 🎁. Pourriez-vous me contacter pour plus d\'informations ?'
  },
  { id: 'soon-1', type: 'soon' },
  { id: 'soon-2', type: 'soon' },
];
