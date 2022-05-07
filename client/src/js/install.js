const butInstall = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
  });

butInstall.addEventListener('click', async () => {
 // console.log('flag 1 butInstall click')
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    //console.log('flag 1.1 butInstall click')
   return;
  }
  //console.log('flag 2 butInstall click')
  // Show prompt
  promptEvent.prompt();
  //console.log('flag 3 butInstall click')
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
  //console.log('flag 4 butInstall click')
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  console.log('inside appinstalled')
  butInstall.style.display = "none";
  window.deferredPrompt = null;  
  
}); 


if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('display-mode is standalone');
  }

  window.onappinstalled = function() {
    console.log('Thank you for installing our app!');
  };

