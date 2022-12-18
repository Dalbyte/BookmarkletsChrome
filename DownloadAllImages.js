(function() {


    console.log('renameAndSaveImages() called');
  
      // Finde alle Bilder im Dokument
      const images = document.querySelectorAll('img');
      
      // Iteriere über jedes Bild und benenne es um
      Array.from(images).forEach((img, i) => {
        // Erstelle einen neuen Link-Element
        const a = document.createElement('a');
        // Setze das Bild als Link-Ziel
        a.href = img.src;
        // Setze das "download"-Attribut, um das Bild zu speichern, anstatt es im Browser anzuzeigen
        a.download = `img_${i + 1}.png`;
        // Füge den Link zum Dokument hinzu
        document.body.appendChild(a);
        // Simuliere einen Klick auf den Link
        a.click();
        // Entferne den Link wieder vom Dokument
        document.body.removeChild(a);
      });
  
  })();