function translateResearchPapers() {
    const languageSelect = document.getElementById("language-select");
    const selectedLanguage = languageSelect.value;
    
    const researchPapersList = document.getElementById("research-papers-list");
    const researchPapers = researchPapersList.getElementsByTagName("li");
    
    // Iterate over each research paper and translate its content
    for (let i = 0; i < researchPapers.length; i++) {
      const researchPaper = researchPapers[i];
      const paperLink = researchPaper.getElementsByTagName("a")[0];
      const originalText = paperLink.innerText;
      
      // Translate the text using the Google Translate API
      const translatedText = translateText(originalText, selectedLanguage);
      
      // Update the link text with the translated text
      paperLink.innerText = translatedText;
    }
  }
  
  function translateText(text, targetLanguage) {
    // Use the Google Translate API or any other translation service/library
    // to translate the text to the target language
    // Replace this implementation with the actual translation logic
    
    // Example: Using the Google Translate API
    const translation = google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: targetLanguage, layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
    
    return translation;
  }
  