// script.js

// Function to add a new inscription field
function addInscription() {
  const inscriptionsSection = document.getElementById('inscriptionsSection');
  const newInscriptionInput = document.createElement('input');
  newInscriptionInput.type = 'text';
  newInscriptionInput.name = 'inscriptions[]';
  newInscriptionInput.placeholder = 'Inscription Text';
  inscriptionsSection.appendChild(newInscriptionInput);
}

// Function to generate and download the JSON file
function generateJSON() {
  const form = document.getElementById('metadataForm');
  const inscriptions = [...form.querySelectorAll('input[name="inscriptions[]"]')].map(input => input.value);
  
  const jsonData = {
    name: form.name.value,
    slug: form.slug.value,
    supply: form.supply.value,
    description: form.description.value,
    twitter_link: form.twitterLink.value,
    discord_link: form.discordLink.value,
    website_link: form.websiteLink.value,
    inscription_icon: form.inscriptionIcon.value,
    inscriptions: inscriptions
  };
  
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonData, null, 2));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "meta.json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

// Basic validation and JSON formatting
document.getElementById('metadataForm').addEventListener('submit', function(event) {
  event.preventDefault();
  generateJSON();
});
