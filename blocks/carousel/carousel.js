export function updateButtons(activeSlide) {
    const block = activeSlide.closest('.block');
    const buttons = block.closest('.carousel-wrapper').querySelector('.carousel-buttons');
  
    const nthSlide = activeSlide.offsetLeft / activeSlide.parentNode.clientWidth;
    const button = block.parentElement.querySelector(`.carousel-buttons > button:nth-child(${nthSlide + 1})`);
    [...buttons.children].forEach((r) => r.classList.remove('selected'));
    button.classList.add('selected');
  }
  
  export default function decorate(block) {
    const buttons = document.createElement('div');
    [...block.children].forEach((row, i) => {
      const classes = ['image', 'text'];
      classes.forEach((e, j) => {
        row.children[j].classList.add(`carousel-${e}`);
      });
      const carouselText = row.querySelector('.carousel-text');
      if (!carouselText.innerText.trim()) carouselText.remove();
      /* buttons */
      const button = document.createElement('button');
      button.title = 'Carousel Nav';
      if (!i) button.classList.add('selected');
      button.addEventListener('click', () => {
        block.scrollTo({ top: 0, left: row.offsetLeft - row.parentNode.offsetLeft, behavior: 'smooth' });
        [...buttons.children].forEach((r) => r.classList.remove('selected'));
        button.classList.add('selected');
      });
      buttons.append(button);
    });
    if (block.nextElementSibling) block.nextElementSibling.replaceWith(buttons);
    else block.parentElement.append(buttons);
  
    block.querySelectorAll(':scope > div').forEach((slide) => slide.classList.add('slide'));
  
    block.addEventListener('scrollend', () => {
      const activeElement = Math.round(block.scrollLeft / block.children[0].clientWidth);
      const slide = block.children[activeElement];
      updateButtons(slide);
    }, { passive: true });
  
  
  var email = localStorage.getItem("email");
  
  if (email && location.href.endsWith("travel-event")) {
      console.log("SALVA::: IS TRAVEL PAGE");
      var imagePath = "";
      var textPersonalized = "";
      email = email.toLowerCase();
      if (email=="a.rijo@barcelo.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/Con-mi-mascota-la-montana-el-amanecer-widescreen.jpeg";
          textPersonalized = "Con mi mascota paseando con alegría por la montaña en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="coloma.crespi@melia.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-familia-la-playa-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "En familia paseando con alegría por la playa en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="ismael.monzon@aireuropa.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-familia-la-playa-el-atardecer-widescreen.jpeg";
          textPersonalized = "En familia paseando con alegría por la playa en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="toni.vicens@aireuropa.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-familia-un-pueblo-pequeno-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "En familia paseando con alegría por un pequeño pueblo en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="t.ferrer@barcelo.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-familia-un-pueblo-pequeno-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "En familia paseando con alegría por un pequeño pueblo en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="virginia.chumillas@nttdata.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-familia-la-playa-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "En familia paseando con alegría por la playa en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="gema.bohorquez@grupoiberostar.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-familia-el-bosque-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "En familia paseando con alegría por el bosque en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="sonia.alegrebernad@nttdata.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-familia-la-playa-el-atardecer-widescreen.jpeg";
          textPersonalized = "En familia paseando con alegría por la playa en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="d.garcia@barcelo.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-familia-la-playa-el-atardecer-widescreen.jpeg";
          textPersonalized = "En familia paseando con alegría por la playa en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="vherrero@aireuropa.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-familia-la-montana-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "En familia paseando con alegría por la montaña en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="proa@adobe.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-familia-la-playa-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "En familia paseando con alegría por la playa en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="manuel.moro@grupoiberostar.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-familia-la-playa-el-atardecer-widescreen.jpeg";
          textPersonalized = "En familia paseando con alegría por la playa en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="slenis@air-europa.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-familia-un-pueblo-pequeno-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "En familia paseando con alegría por un pequeño pueblo en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="javier.figueras@air-europa.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-familia-la-playa-el-atardecer-widescreen.jpeg";
          textPersonalized = "En familia paseando con alegría por la playa en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="irma.papaleo@amadeus.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-pareja-la-playa-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "En pareja paseando con alegría por la playa en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="mramon@grupo-pinero.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-pareja-la-playa-el-atardecer-widescreen.jpeg";
          textPersonalized = "En pareja paseando con alegría por la playa en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="bpascual@aireuropa.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-pareja-la-montana-el-atardecer-widescreen.jpeg";
          textPersonalized = "En pareja paseando con alegría por la montaña en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="fbernalm@emeal.nttdata.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-pareja-el-bosque-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "En pareja paseando con alegría por el bosque en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="a.garcias@barcelo.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-pareja-un-pueblo-pequeno-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "En pareja paseando con alegría por un pequeño pueblo en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="virginia.saez@iberostar.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-pareja-un-pueblo-pequeno-el-atardecer-widescreen.jpeg";
          textPersonalized = "En pareja paseando con alegría por un pequeño pueblo en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="xavier.oliva@grupoiberostar.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-pareja-la-montana-un-dia-nublado-widescreen.jpeg";
          textPersonalized = "En pareja paseando con alegría por la montaña en un día nublado. Encuentra tu viaje soñado.";
      } else if (email=="t.hebrero@barcelo.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-pareja-un-pueblo-pequeno-el-atardecer-widescreen.jpeg";
          textPersonalized = "En pareja paseando con alegría por un pequeño pueblo en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="eko@the-cocktail.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-pareja-el-bosque-el-atardecer-widescreen.jpeg";
          textPersonalized = "En pareja paseando con alegría por el bosque en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="marina.arrieta.azanza@gmail.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-pareja-la-montana-el-amanecer-widescreen.jpeg";
          textPersonalized = "En pareja paseando con alegría por la montaña en el amanecer. Encuentra tu viaje soñado.";
      } else if (email=="joan_m_orta@live.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/En-pareja-la-montana-el-atardecer-widescreen.jpeg";
          textPersonalized = "En pareja paseando con alegría por la montaña en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="javier.perez.diaz@melia.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/Solo-un-pueblo-pequeno-el-atardecer-widescreen.jpeg";
          textPersonalized = "Solo paseando con alegría por un pequeño pueblo en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="alejandro.antelo@melia.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/Solo-un-pueblo-pequeno-el-atardecer-widescreen.jpeg";
          textPersonalized = "Solo paseando con alegría por un pequeño pueblo en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="oscar.riolobos@aireuropa.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/Solo-la-playa-el-atardecer-widescreen.jpeg";
          textPersonalized = "Solo paseando con alegría por la playa en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="ja.montalvo@barcelo.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/Solo-un-pueblo-pequeno-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "Solo paseando con alegría por un pequeño pueblo en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="Javier.oliete@jakala.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/Solo-la-playa-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "Solo paseando con alegría por la playa en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="cristina.salmeron@fergusgroup.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/Solo-la-playa-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "Solo paseando con alegría por la playa en un día soleado. Encuentra tu viaje soñado.";
      } else if (email=="josep.romagosa@gmail.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/Solo-un-pueblo-pequeno-el-atardecer-widescreen.jpeg";
          textPersonalized = "Solo paseando con alegría por un pequeño pueblo en el atardecer. Encuentra tu viaje soñado.";
      } else if (email=="sfiol@aireuropa.com") {
          imagePath = "https://publish-p109404-e1067141.adobeaemcloud.com/content/dam/Adobe-Iberica-SC/Travel/Solo-la-playa-un-dia-soleado-widescreen.jpeg";
          textPersonalized = "Solo paseando con alegría por la playa en un día soleado. Encuentra tu viaje soñado.";
      } else {
          imagePath = "./media_15ba2b455e29aca38c1ca653d24c40acaec8a008f.jpeg?width=1200&format=webply&optimize=medium";
          textPersonalized = "Encuentra los mejores viajes para ti ;)";
      }
      var personalizedHTML =`<div class="carousel-image">
              <picture>
              <source type="image/webp" srcset="${imagePath}" media="(min-width: 600px)">
              <source type="image/webp" srcset="${imagePath}">
              <source type="image/jpeg" srcset="${imagePath}" media="(min-width: 600px)">
              <img loading="eager" alt="" src="${imagePath}" width="1600" height="900">
              </picture>
          </div>
          <div class="carousel-text">
              <h2 id="encuentra-los-mejores-viajes-para-ti"><a href="/adventures" title="WKND Adventures">${textPersonalized}</a></h2>
              <p>Explore nuestra lista de experiencias seleccionadas para tí.</p>
              <p class="button-container"><a href="/adventures" title="Book your trip now! 50% off" class="button primary">Reserve ahora con un 10% de descuento!</a></p>
          </div>`;
      console.log("SALVA::: personalizedHTML: " + personalizedHTML);
      if (document.querySelector('.slide')) {
        document.querySelector('.slide').innerHTML = personalizedHTML;
      } else {
        console.log("SALVA::: TOO FAST.");
      }
      
  } else {
    console.log("SALVA::: IS TRAVEL PAGE NO LOGGED.");
  }
    
  document.body.getElementsByTagName('main')[0].style.visibility = 'visible';
  
  }
