(function() {
  const widgetContainer = document.createElement('div');
  widgetContainer.id = "ec-contact-widget";
  widgetContainer.innerHTML = `
    <div style="max-width:400px;margin:50px auto;background-color:rgb(0,5,71);color:white;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.3);padding:20px;font-family:Arial,sans-serif;">
      <h2 style="color:rgb(128,97,0);text-align:center;margin-bottom:20px;">Kontakt</h2>
      <form id="ec-contact-form" action="https://formspree.io/f/xwpapwal" method="POST">
        <label for="ec-name" style="display:block;margin-bottom:5px;font-weight:bold;">Name</label>
        <input type="text" id="ec-name" name="name" required style="width:100%;padding:10px;margin-bottom:15px;border:1px solid rgb(128,97,0);border-radius:6px;background-color:white;color:black;font-size:14px;">

        <label for="ec-email" style="display:block;margin-bottom:5px;font-weight:bold;">E-Mail</label>
        <input type="email" id="ec-email" name="email" required style="width:100%;padding:10px;margin-bottom:15px;border:1px solid rgb(128,97,0);border-radius:6px;background-color:white;color:black;font-size:14px;">

        <label for="ec-message" style="display:block;margin-bottom:5px;font-weight:bold;">Nachricht</label>
        <textarea id="ec-message" name="message" rows="5" required style="width:100%;padding:10px;margin-bottom:15px;border:1px solid rgb(128,97,0);border-radius:6px;background-color:white;color:black;font-size:14px;"></textarea>

        <button type="submit" style="width:100%;padding:12px;border:none;border-radius:6px;background-color:rgb(128,97,0);color:white;font-size:16px;cursor:pointer;transition:background-color 0.3s ease;">Absenden</button>
      </form>
      <div id="ec-success-message" style="display:none;text-align:center;margin-top:15px;color:rgb(128,97,0);font-weight:bold;">Danke für Ihre Nachricht!</div>
    </div>
  `;

  document.body.appendChild(widgetContainer);

  const form = document.getElementById('ec-contact-form');
  const successMessage = document.getElementById('ec-success-message');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {'Accept':'application/json'}
    }).then(function(response){
      if(response.ok){
        form.reset();
        successMessage.style.display = 'block';
        setTimeout(()=>{ successMessage.style.display='none'; },5000);
      } else {
        alert("Es gab ein Problem beim Absenden. Bitte versuchen Sie es erneut.");
      }
    }).catch(function(error){
      alert("Es gab ein Problem beim Absenden. Bitte versuchen Sie es erneut.");
      console.error(error);
    });
  });
})();
