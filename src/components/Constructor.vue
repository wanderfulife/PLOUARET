<template>
  <SurveyTemplate
    :survey-questions="currentSurveyQuestions"
    :firebase-collection-name="props.firebaseCollectionOverride"
    :poste-travail-question-id="posteTravailQuestionId"
    :welcome-message="customWelcomeMessage"
    logo-src="../assets/YOUR_LOGO.webp"
    :streets-list="allStreets"
    :streets-map="streetsMap"
  />
</template>
<script setup>
import { onMounted, ref } from 'vue';
import SurveyTemplate from './SurveyTemplate.vue';

// 🎯 STEP 1: Import your survey questions
// Replace 'exampleSurveyQuestions' with your own survey questions file
import { templateSurveyQuestions } from './surveyQuestions.js';

// Props from App.vue (don't modify this)
const props = defineProps({
  firebaseCollectionOverride: {
    type: String,
    required: true
  }
});

// 🎯 STEP 2: Customize your survey configuration
const pageTitle = ref('PLOUARET'); // Browser tab title
// Ensure posteTravailQuestionId is defined for the template
const posteTravailQuestionId = 'POSTE'; // 🎯 Change this if your work station question has a different ID
const customWelcomeMessage = ref(`Bonjour,<br><br> pour mieux connaître les usagers de la gare de Plouaret-Trégor, Lannion-Trégor Communauté,<br><br> la Région Bretagne et la SNCF souhaiteraient en savoir plus sur votre déplacement en cours.<br><br> Auriez-vous quelques secondes à nous accorder ? `); // HTML welcome message

// 🎯 STEP 3: Set your survey questions
// Replace 'exampleSurveyQuestions' with your imported questions
const currentSurveyQuestions = ref(templateSurveyQuestions);

// 🎯 STEP 4: Add Street Data (New Step)
const allStreets = ref([]); // Holds the street data (fallback)
const streetsMap = ref({}); // Per-commune street data

onMounted(async () => {
  document.title = pageTitle.value;

  // Fetch per-commune street data
  const communeFiles = ['plouaret.json', 'vieux.json'];
  const map = {};
  await Promise.all(communeFiles.map(async (file) => {
    try {
      const response = await fetch(`/${file}`);
      if (response.ok) {
        map[file] = await response.json();
      } else {
        console.error(`Error loading ${file}:`, response.status);
        map[file] = [];
      }
    } catch (error) {
      console.error(`Error fetching ${file}:`, error);
      map[file] = [];
    }
  }));
  streetsMap.value = map;
});
</script>

<style scoped>
/* Add any survey-specific styles here if needed */
</style>

<!-- 
🚀 HOW TO USE THIS TEMPLATE:

1. 📝 Create your survey questions file (e.g., mySurveyQuestions.js)
2. 🔧 Replace the import at the top with your questions file
3. 🎨 Customize the titles and welcome message
4. 🏢 Set posteTravailQuestionId if you have a work station question
5. 🖼️ Replace logo path with your own logo
6. 💾 Save this file as Constructor.vue (replacing the old one)

EXAMPLE CONFIGURATION:

For a customer satisfaction survey:
- pageTitle: 'Customer Satisfaction Survey'
- posteTravailQuestionId: 'STORE_LOCATION' (if asking about store location)
- logo-src: '../assets/acme-logo.png'

For an event feedback survey:
- pageTitle: 'Event Feedback'
- posteTravailQuestionId: null (if no work station question)
- logo-src: '../assets/festival-logo.png'

🎯 QUICK CHECKLIST:
- [ ] Created your survey questions file
- [ ] Updated the import statement
- [ ] Customized pageTitle, customWelcomeMessage
- [ ] Set posteTravailQuestionId to match your work station question ID
- [ ] Updated logo path
- [ ] Renamed file to Constructor.vue

📋 WORK STATION QUESTION:
The posteTravailQuestionId should match the "id" field of your work station question in your survey questions file.
This ensures the Excel export shows "POSTE" instead of duplicating the question ID.
--> 
