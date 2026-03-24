// 🚚 ENQUÊTE TRANSPORT DE MARCHANDISES
// Based on the French freight transport questionnaire - Version vB1

export const templateSurveyQuestions = [
    {
        id: "Q1",
        text: "Quelle est la raison de votre présence en gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je vais prendre le train", next: "Q2" },
            { id: 2, text: "Je viens de descendre du train", next: "end" },
            { id: 3, text: "J'accompagne des voyageurs qui partent / J'attends des voyageurs qui arrivent", next: "Q10" },
            { id: 4, text: "Autre raison (achat billet, commerces en gare...)", next: "Q10" }
        ]
    },

    // === MONTANTS (Q1 = 1) ===

    // 📍 Q2 - Origine du déplacement
    {
        id: "Q2",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Plouaret", next: "Q2a_Plouaret" },
            { id: 2, text: "Le Vieux-Marché", next: "Q2a_VieuxMarche" },
            { id: 3, text: "Autre commune", next: "Q2_Autre" }
        ]
    },

    // 🏙️ Q2 - Autre commune
    {
        id: "Q2_Autre",
        text: "Préciser le nom de la commune :",
        type: 'commune',
        next: "Q3"
    },

    // 🏘️ Q2a - Nom de rue - Plouaret
    {
        id: "Q2a_Plouaret",
        text: "De quelle rue venez-vous ?",
        type: 'street',
        streetFile: "plouaret.json",
        next: "Q3"
    },

    // 🏘️ Q2a - Nom de rue - Le Vieux-Marché
    {
        id: "Q2a_VieuxMarche",
        text: "De quelle rue venez-vous ?",
        type: 'street',
        streetFile: "vieux.json",
        next: "Q3"
    },

    // 🚗 Q3 - Mode de transport utilisé pour se rendre à la gare
    {
        id: "Q3",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q4" },
            { id: 2, text: "En voiture - en tant que conducteur", next: "Q3a" },
            { id: 3, text: "En voiture - en tant que passager", next: "Q4" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q4" },
            { id: 5, text: "En bus/car", next: "Q3c" },
            { id: 6, text: "À vélo", next: "Q3d" },
            { id: 7, text: "En trottinette", next: "Q3d" },
            { id: 8, text: "En Taxi/VTC", next: "Q4" },
            { id: 9, text: "En 2 roues motorisé (Moto, scooter...)", next: "Q3a" },
            { id: 10, text: "En train - je fais une correspondance", next: "Q4" },
            { id: 11, text: "Autre", next: "Q3_Autre" }
        ]
    },

    // 📝 Q3 - Autre mode de transport
    {
        id: "Q3_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le mode de transport...",
        next: "Q4"
    },

    // 🅿️ Q3a - Lieu de stationnement (si Q3 = 2 ou 9)
    {
        id: "Q3a",
        text: "Où avez-vous stationné votre véhicule ?",
        type: 'singleChoice',
        image: "plan.png",
        options: [
            { id: 1, text: "Dans le parking côté ouest", next: "Q3a2" },
            { id: 2, text: "Dans le parking côté est", next: "Q3a2" },
            { id: 3, text: "Sur le parvis", next: "Q3a2" },
            { id: 4, text: "Sur une autre place en voirie ou parking", next: "Q3a_Autre" },
            { id: 5, text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q3a2" },
            { id: 6, text: "Sur un arceau vélo (pour les 2 roues motorisés uniquement)", next: "Q3a2" }
        ]
    },

    // 📝 Q3a - Autre stationnement
    {
        id: "Q3a_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le lieu de stationnement...",
        next: "Q3a2"
    },

    // ⏱️ Q3a2 - Durée de stationnement
    {
        id: "Q3a2",
        text: "Combien de temps allez-vous laisser votre voiture stationnée ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 2 heures", next: "Q4" },
            { id: 2, text: "Une demi-journée (entre 2 et 4 heures)", next: "Q4" },
            { id: 3, text: "Une journée entière (entre 4h et 12h)", next: "Q4" },
            { id: 4, text: "2 à 3 jours", next: "Q4" },
            { id: 5, text: "3 à 6 jours", next: "Q4" },
            { id: 6, text: "1 semaine ou plus", next: "Q4" }
        ]
    },

    // 🚌 Q3c - Ligne de bus/car (si Q3 = 5)
    {
        id: "Q3c",
        text: "Quelle ligne de bus/car avez-vous emprunté ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Car scolaire", next: "Q4" },
            { id: 2, text: "Transport à la demande", next: "Q4" },
            { id: 3, text: "Autre", next: "Q3c_Autre" }
        ]
    },

    // 📝 Q3c - Autre ligne de bus
    {
        id: "Q3c_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser la ligne de bus/car...",
        next: "Q4"
    },

    // 🚲 Q3d - Lieu de stationnement vélo/trottinette (si Q3 = 6 ou 7)
    {
        id: "Q3d",
        text: "Où avez-vous stationné votre vélo/trottinette ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Dans un box vélo dans le parking ouest", next: "Q3d1" },
            { id: 2, text: "Sur un arceau sur le parvis de la gare", next: "Q3d1" },
            { id: 3, text: "Je le transporte avec moi dans le train", next: "Q3d1" },
            { id: 4, text: "Autre", next: "Q3d_Autre" }
        ]
    },

    // 📝 Q3d - Autre stationnement vélo
    {
        id: "Q3d_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le lieu de stationnement...",
        next: "Q3d1"
    },

    // 🚲 Q3d1 - Type de vélo
    {
        id: "Q3d1",
        text: "Quel type de vélo utilisez-vous ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Mon vélo personnel", next: "Q4" },
            { id: 2, text: "Un vélo loué via le dispositif Vélek'tro", next: "Q4" },
            { id: 3, text: "Un vélo de location/prêt autre", next: "Q4" }
        ]
    },

    // 🎫 Q4 - Abonnement de transport
    {
        id: "Q4",
        text: "Possédez-vous un abonnement de transport ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Oui, un abonnement TER", next: "Q5" },
            { id: 2, text: "Oui, un abonnement TiLT", next: "Q5" },
            { id: 3, text: "Oui, un abonnement TER et un abonnement TiLT", next: "Q5" },
            { id: 4, text: "Non", next: "Q5" }
        ]
    },

    // 🚉 Q5 - Gare de destination finale
    {
        id: "Q5",
        text: "Quelle sera votre gare de destination finale ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Rennes", next: "Q6" },
            { id: 2, text: "Lannion", next: "Q6" },
            { id: 3, text: "Brest", next: "Q6" },
            { id: 4, text: "Morlaix", next: "Q6" },
            { id: 5, text: "Guingamp", next: "Q6" },
            { id: 6, text: "Saint-Brieuc", next: "Q6" },
            { id: 7, text: "Paris Montparnasse", next: "Q6" },
            { id: 8, text: "Autre", next: "Q5_Autre" }
        ]
    },

    // 🚄 Q5 - Autre gare de destination
    {
        id: "Q5_Autre",
        text: "Préciser :",
        type: 'gare',
        next: "Q6"
    },

    // 🎯 Q6 - Motif du déplacement en train
    {
        id: "Q6",
        text: "Quel est le motif de votre déplacement en train ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je me rends sur mon lieu de travail", next: "Q7" },
            { id: 2, text: "Je me rends sur mon lieu d'études", next: "Q7" },
            { id: 3, text: "Je rentre à mon domicile principal", next: "Q6a" },
            { id: 4, text: "Déplacement professionnel", next: "Q7" },
            { id: 5, text: "Loisirs, tourisme", next: "Q7" },
            { id: 6, text: "Autres", next: "Q6_Autre" }
        ]
    },

    // 📝 Q6 - Autre motif
    {
        id: "Q6_Autre",
        text: "Préciser (Achats, démarches administratives, RDV médical...) :",
        type: 'freeText',
        freeTextPlaceholder: "Décrire le motif de votre déplacement...",
        next: "Q7"
    },

    // 🏠 Q6a - Raison du déplacement (si Q6 = 3)
    {
        id: "Q6a",
        text: "Quel était la raison de votre déplacement ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Travail", next: "Q7" },
            { id: 2, text: "Études", next: "Q7" },
            { id: 3, text: "Déplacement professionnel", next: "Q7" },
            { id: 4, text: "Loisirs, tourisme", next: "Q7" },
            { id: 5, text: "Autres (Achats, démarches administratives, RDV médical, visite...)", next: "Q7" }
        ]
    },

    // 🔁 Q7 - Fréquence d'utilisation
    {
        id: "Q7",
        text: "À quelle fréquence prenez-vous un train dans cette gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Tous les jours", next: "Q8" },
            { id: 2, text: "Au moins 3 jours par semaine", next: "Q8" },
            { id: 3, text: "Au moins une fois par semaine", next: "Q8" },
            { id: 4, text: "Au moins une fois par mois", next: "Q8" },
            { id: 5, text: "Exceptionnellement", next: "Q8" }
        ]
    },

    // 👤 Q8 - Tranche d'âge
    {
        id: "Q8",
        text: "Quelle est votre tranche d'âge ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 18 ans", next: "Q9" },
            { id: 2, text: "18 à 25 ans", next: "Q9" },
            { id: 3, text: "25 à 40 ans", next: "Q9" },
            { id: 4, text: "40 à 60 ans", next: "Q9" },
            { id: 5, text: "Plus de 60 ans", next: "Q9" }
        ]
    },

    // 💡 Q9 - Suggestions d'amélioration
    {
        id: "Q9",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Noter seulement les mots clés",
        next: "end"
    },

    // === NON-VOYAGEURS (Q1 = 3 ou 4) ===

    // 📍 Q10 - Origine (Non-voyageurs)
    {
        id: "Q10",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Plouaret", next: "Q10a_Plouaret" },
            { id: 2, text: "Le Vieux-Marché", next: "Q11" },
            { id: 3, text: "Autre commune", next: "Q10_Autre" }
        ]
    },

    // 🏙️ Q10 - Autre commune (non-voyageurs)
    {
        id: "Q10_Autre",
        text: "Préciser le nom de la commune :",
        type: 'commune',
        next: "Q11"
    },

    // 🏘️ Q10a (Non-voyageurs) - Nom de rue - Plouaret
    {
        id: "Q10a_Plouaret",
        text: "De quelle rue venez-vous ?",
        type: 'street',
        streetFile: "plouaret.json",
        next: "Q11"
    },

    // 🚗 Q11 (Non-voyageurs) - Mode de transport
    {
        id: "Q11",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q12" },
            { id: 2, text: "En voiture - en tant que conducteur", next: "Q11a" },
            { id: 3, text: "En voiture - en tant que passager", next: "Q12" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q12" },
            { id: 5, text: "En bus/car", next: "Q12" },
            { id: 6, text: "À vélo", next: "Q12" },
            { id: 7, text: "En trottinette", next: "Q12" },
            { id: 8, text: "En Taxi/VTC", next: "Q12" },
            { id: 9, text: "En 2 roues motorisé (Moto, scooter...)", next: "Q11a" },
            { id: 10, text: "En train - je fais une correspondance", next: "Q12" },
            { id: 11, text: "Autre", next: "Q11_Autre" }
        ]
    },

    // 📝 Q11 - Autre mode de transport (non-voyageurs)
    {
        id: "Q11_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le mode de transport...",
        next: "Q12"
    },

    // 🅿️ Q11a (Non-voyageurs) - Lieu de stationnement
    {
        id: "Q11a",
        text: "Où avez-vous stationné votre véhicule ?",
        type: 'singleChoice',
        image: "plan.png",
        options: [
            { id: 1, text: "Dans le parking côté ouest", next: "Q12" },
            { id: 2, text: "Dans le parking côté est", next: "Q12" },
            { id: 3, text: "Sur le parvis", next: "Q12" },
            { id: 4, text: "Sur une autre place en voirie ou parking", next: "Q11a_Autre" },
            { id: 5, text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q12" },
            { id: 6, text: "Sur un arceau vélo (pour les 2 roues motorisés uniquement)", next: "Q12" }
        ]
    },

    // 📝 Q11a - Autre stationnement (non-voyageurs)
    {
        id: "Q11a_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le lieu de stationnement...",
        next: "Q12"
    },

    // 💡 Q12 (Non-voyageurs) - Suggestions d'amélioration
    {
        id: "Q12",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Noter seulement les mots clés",
        next: "end"
    }
];
