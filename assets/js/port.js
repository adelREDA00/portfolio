/**
 * skills toggle
 */

const PortfolioList = document.querySelector(".portfolio-list");
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }

  });
}


//web and desgin projects

let web = [
  `
  <li>
  <div class="portfolio-card">

    <div class="card-banner img-holder" style="--width: 800; --height: 540;">
      <img src="./assets/images/shopdz.png" width="800" height="540" loading="lazy"
        alt="shopdz" class="img-cover">

      <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
        <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
      </a>
    </div>

    <div class="card-content">

      <span class="chip label-md">Front-End</span>

      <h3 class="title-md">SHOPTRENDz </h3>

      <p class="card-text">
        Le site e-commerce SHOPTRENDz est une boutique en ligne qui propose une large gamme de produits, y compris des vêtements, des accessoires, des articles pour la maison, et plus encore. Le site a un design épuré et moderne qui est à la fois esthétique et convivial.
        Le site comprend également des fonctionnalités utiles telles qu'une barre de recherche, une liste de souhaits et une section de produits connexes. De plus, le site est optimisé pour les appareils mobiles, garantissant ainsi que les visiteurs peuvent faire leurs achats confortablement depuis leur smartphone ou leur tablette.
      </p>

      <a href="https://eshopdz.netlify.app/" target="_blank" class="btn btn-primary">View Project</a>

    </div>

  </div>
</li>

<li>
              <div class="portfolio-card">

                <div class="card-banner img-holder" style="--width: 920; --height: 540;">
                  <img src="./assets/images/bloom.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">

                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>

                <div class="card-content">

                  <span class="chip label-md">Django/React.js/Rest-API</span>

                  <h3 class="title-md">Bloom:clone de IG</h3>

                  <p class="card-text">
                  (Ce projet est  en cours de développement)->Je suis en train de développer un clone de réseau social en utilisant Django. Ce projet permettra aux utilisateurs de publier du contenu, de partager des publications, d'envoyer des messages et de publier des stories, tout comme Instagram. J'ai construit divers composants tels que l'authentification des utilisateurs, la création de contenu, le partage de fonctionnalités, un système de messagerie et une fonctionnalité de partage de stories
                    <br>
                   <small>->for more info about the project <a class="blink" target="_blank" href="http://redaa.pythonanywhere.com/article/14">Click here</a> </small>
                  </p>

                  <a href="http://redaa.pythonanywhere.com/" class="btn btn-primary" target="_blank">View Project</a>

                </div>

              </div>
            </li>

            <li>
              <div class="portfolio-card">

                <div class="card-banner img-holder" style="--width: 950; --height: 540;">
                  <img src="./assets/images/Green Gradient Application Showcase Presentation.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">

                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>

                <div class="card-content">

                  <span class="chip label-md">Javascript/Node.js</span>

                  <h3 class="title-md">Marx</h3>

                  <p class="card-text">
                    Marx est une application web passionnante qui utilise des algorithmes d'apprentissage automatique pour prédire la nationalité d'une personne en se basant sur son nom. Il vous suffit de saisir votre nom et l'application vous fournira une prédiction de votre nationalité. Avec une base de données de noms de plus de 100 pays, Marx utilise les dernières techniques de traitement du langage naturel pour fournir des prédictions précises. Découvrez votre véritable héritage et explorez la richesse culturelle de différents pays avec Marx 
                  </p>

                  <a href="https://good-potent-result.glitch.me/" class="btn btn-primary" target="_blank">View Project</a>

                </div>

              </div>
            </li>

            
            <li>
              <div class="portfolio-card">

                <div class="card-banner img-holder" style="--width: 900; --height: 540;">
                  <img src="./assets/images/oikos.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">

                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>

                <div class="card-content">

                  <span class="chip label-md">Front-End</span>

                  <h3 class="title-md">OIKOS</h3>

                  <p class="card-text">
                    Avec OIKOS, vous pouvez facilement chercher parmi des milliers de propriétés en utilisant des filtres pour trouver exactement ce dont vous avez besoin. Vous pouvez également afficher des photos, des descriptions détaillées et des évaluations de chaque propriété pour vous aider à prendre une décision éclairée.
                  </p>

                  <a href="https://oiks.netlify.app/" class="btn btn-primary" target="_blank">View Project</a>

                </div>

              </div>
            </li>




            <li>
              <div class="portfolio-card">

                <div class="card-banner img-holder" style="--width: 950; --height: 540;">
                  <img src="./assets/images/REACT.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">

                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>

                <div class="card-content">

                  <span class="chip label-md">Django/React.js/Rest-API</span>

                  <h3 class="title-md">Dossier patient avec Django React.js </h3>

                  <p class="card-text">
                    Introducing RDATA, une base de données de suivi de fichiers de patients construite à l'aide de React. RDATA est une solution complète pour stocker, afficher et modifier les fichiers de patients en temps réel.
                  </p>

                  <a href="https://reactdatabase.vercel.app" class="btn btn-primary" target="_blank">View Project</a>

                </div>

              </div>
            </li>

            <li>
            <div class="portfolio-card">

              <div class="card-banner img-holder" style="--width: 930; --height: 540;">
                <img src="./assets/images/exce.png" width="800" height="540" loading="lazy"
                  alt="Website Design for Marketing Agency Startup" class="img-cover">

                <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                  <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                </a>
              </div>

              <div class="card-content">

                <span class="chip label-md">Front-End</span>

                <h3 class="title-md">Excellence Club  </h3>

                <p class="card-text">
                  J'ai créé un site web pour un club universitaire avec un design attractif et une section d'équipe où les membres peuvent être filtrés par rôles. Le site web comprend également une page d'événements ainsi que d'autres fonctionnalités telles qu'une section de contact. Ce projet a permis de mettre en valeur les activités et événements du club, tout en attirant de nouveaux membres.
                </p>

                <a href="https://exclub.netlify.app/" target="_blank" class="btn btn-primary">View Project</a>

              </div>

            </div>
          </li>


            <li>
              <div class="portfolio-card">

                <div class="card-banner img-holder" style="--width: 900; --height: 540;">
                  <img src="./assets/images/labs.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">

                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>

                <div class="card-content">

                  <span class="chip label-md">FUll-stack</span>

                  <h3 class="title-md">DOCLAB</h3>

                  <p class="card-text">
                    DOCLAB est un laboratoire basé à Annaba, Algérie, qui se consacre à fournir des services de diagnostic de haute qualité à notre communauté locale. Notre équipe de professionnels de la santé passionnés travaille pour améliorer la santé et le bien-être de nos patients grâce à des services innovants
                  </p>

                  <a href="https://laab.netlify.app/" class="btn btn-primary" target="_blank">View Project</a>

                </div>

              </div>
            </li>

            
            

            <li>
              <div class="portfolio-card">

                <div class="card-banner img-holder" style="--width: 800; --height: 540;">
                  <img src="./assets/images/esmbl.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">

                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>

                <div class="card-content">

                  <span class="chip label-md">single page javascript app</span>

                  <h3 class="title-md">application web conçue pour faciliter l'apprentissage en ligne </h3>

                  <p class="card-text">
                    BLOOM une application web conçue pour faciliter l'apprentissage en ligne à l'ecole de management pendant la pandémie de COVID-19. Avec le passage aux cours en ligne sur Zoom,  <strong> les étudiants à l'ecole supérieure de management</strong> ont dû faire face au défi de trouver les liens de leur cours, enterrés dans la page Facebook de l'ecole  C'est là que Bloom entre en jeu.

                    Cette application sur une seule page, construite à l'aide de JavaScript et de React, fournit un horaire dynamique et rapide de liens Zoom pour chaque cours, 
                  </p>

                  <a href="https://esmtl.netlify.app/" target="_blank" class="btn btn-primary">View Project</a>

                </div>

              </div>
            </li>



            
 <li>
              <div class="portfolio-card">
            
                <div class="card-banner img-holder" style="--width: 800; --height: 540;">
                  <img src="./assets/images/admin.png" width="800" height="540" loading="lazy"
                    alt="shopdz" class="img-cover">
            
                  <a href="#" class="btn-icon" aria-label="adminpage">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>
            
                <div class="card-content">
            
                  <span class="chip label-md">Front-End</span>
            
                  <h3 class="title-md">Page d'administration </h3>
            
                  <p class="card-text">
                    Une page d'administration qui permet aux administrateurs de gérer et de surveiller les activités d'un site web ou d'une application. Elle peut inclure des fonctionnalités telles que la gestion des utilisateurs, la création et la modification de contenu, la gestion des commandes, la gestion des stocks et des ventes, ainsi que des rapports statistiques sur les performances du site ou de l'application. La page d'administration peut également offrir des fonctionnalités de sécurité, telles que la gestion des autorisations et des accès, pour garantir que seules les personnes autorisées peuvent accéder aux données sensibles. En somme, une page d'administration est un outil essentiel pour les administrateurs pour gérer efficacement et en toute sécurité les opérations d'un site web ou d'une application.
                  </p>
            
                  <a href="https://redaadmin.netlify.app/" target="_blank" class="btn btn-primary">View Project</a>
            
                </div>
            
              </div>
            </li>




            <li>
              <div class="portfolio-card">

                <div class="card-banner img-holder" style="--width: 950; --height: 540;">
                  <img src="./assets/images/ws.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">

                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>

                <div class="card-content">

                  <span class="chip label-md">Front-End</span>

                  <h3 class="title-md">WS eCommerce </h3>

                  <p class="card-text">
                    site web de montres de eCommerce propose une large gamme de montres de qualité supérieure provenant de marques de premier plan, avec un système de navigation simple et intuitif pour un shopping facile. Nous offrons un excellent service client, une livraison rapide et fiable et une politique de retour sans tracas. Trouvez votre montre parfaite dès aujourd'hui.
                  </p>

                  <a href="https://wstoree.netlify.app/" class="btn btn-primary" target="_blank">View Project</a>

                </div>

              </div>
            </li>


            <li>
              <div class="portfolio-card">

                <div class="card-banner img-holder" style="--width: 950; --height: 540;">
                  <img src="./assets/images/wather.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">

                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>

                <div class="card-content">

                  <span class="chip label-md">Javascript/ Node.js</span>

                  <h3 class="title-md">simple MyWeather</h3>

                  <p class="card-text">
                    MyWeather--application météo est un outil simple mais puissant qui fournit des informations météorologiques en temps réel pour votre emplacement en utilisant une API météo. Avec une interface intuitive et des paramètres personnalisables
                  </p>

                  <a href="https://cubic-highfalutin-peanut.glitch.me/" class="btn btn-primary" target="_blank">View Project</a>

                </div>

              </div>
            </li>

            
            <li>
              <div class="portfolio-card">

                <div class="card-banner img-holder" style="--width: 950; --height: 540;">
                  <img src="./assets/images/rand.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">

                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>

                <div class="card-content">

                  <span class="chip label-md">Javascript / Node.js</span>

                  <h3 class="title-md">Random Activities</h3>

                  <p class="card-text">
                    "Random Activities" est une application Web légère et rapide qui utilise uniquement JavaScript pour aider les utilisateurs à découvrir des activités amusantes à faire avec des amis ou en famille. Les utilisateurs peuvent entrer leur type d'activité préféré et le nombre de participants, et recevoir une liste aléatoire d'activités qui correspondent à leurs critères. 
                  </p>

                  <a href="https://butter-nebula-goose.glitch.me/" class="btn btn-primary" target="_blank">View Project</a>

                </div>

              </div>
            </li>

            <li>
              <div class="portfolio-card">

                <div class="card-banner img-holder" style="--width: 950; --height: 540;">
                  <img src="./assets/images/quizz.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">

                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>

                <div class="card-content">

                  <span class="chip label-md">Javascript / Node.js</span>

                  <h3 class="title-md">Quick Quiz</h3>

                  <p class="card-text">
                    L'application de Quick Quiz en ligne est une façon amusante et attrayante pour les utilisateurs de tester leurs connaissances sur divers sujets. L'application utilise des APIs pour générer une gamme de questions, couvrant différents domaines tels que l'histoire, la science, la géographie, et bien plus encore. 
                  </p>

                  <a href="https://pleasant-heavenly-fireman.glitch.me/" class="btn btn-primary" target="_blank">View Project</a>

                </div>

              </div>
            </li>
  `
]

let cont = [
  `
  <li>
              <div class="portfolio-card">
            
                <div class="card-banner img-holder" style="--width: 890; --height: 540;">
                  <img src="./assets/images/reels/4.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">
            
                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>
            
                <div class="card-content">
            
                  <span class="chip label-md">instagram </span>
            
                  <h3 class="title-md">instagram Reel </h3>

                  <p class="card-text">
                    Petit résumé des spécialités d'ESM <br> - Ecogreen
                  </p>
            
            
                  <a href="https://www.instagram.com/reel/CgSSbt8JpQ6/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-primary">Watch</a>
            
                </div>
            
              </div>

              
            </li>

            <li>
              <div class="portfolio-card">
            
                <div class="card-banner img-holder" style="--width: 890; --height: 540;">
                  <img src="./assets/images/reels/10.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">
            
                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>
            
                <div class="card-content">
            
                  <span class="chip label-md">Formation </span>
            
                  <h3 class="title-md">Formation développement Web </h3>
            
                  <p class="card-text">

                Formation développement Web avec le groupe Excellence
                  </p>
            
                  <a href="https://www.instagram.com/reel/Cbx7uAzApQ-/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-primary">Watch</a>
            
                </div>
            
              </div>

              
            </li>

            <li>
              <div class="portfolio-card">
            
                <div class="card-banner img-holder" style="--width: 890; --height: 540;">
                  <img src="./assets/images/reels/1.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">
            
                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>
            
                <div class="card-content">
            
                  <span class="chip label-md">instagram </span>
            
                  <h3 class="title-md">instagram Teaser Reel </h3>
            
                  <p class="card-text">
                    Try not to BLINK  
                  </p>
            
                  <a href="https://www.instagram.com/reel/CmugoLera5P/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-primary">Watch</a>
            
                </div>
            
              </div>

              
            </li>

            <li>
              <div class="portfolio-card">
            
                <div class="card-banner img-holder" style="--width: 890; --height: 540;">
                  <img src="./assets/images/reels/2.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">
            
                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>
            
                <div class="card-content">
            
                  <span class="chip label-md">instagram </span>
            
                  <h3 class="title-md">instagram  Reel </h3>
            
                  <p class="card-text">
                    Vous ne trouvez pas qu'il fait beaucoup trop chaud pour un mois d'octobre? 🥵

                    Mais OUI ! 😩 Et cette hausse de température est expliquée par un phénomène appelé “plume de chaleur”
                    Et qu'est ce que c'est? 🤨⁉️
                  </p>
            
                  <a href="https://www.instagram.com/reel/CkTvVUQMg1g/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-primary">Watch</a>
            
                </div>
            
              </div>

              
            </li>

            <li>
              <div class="portfolio-card">
            
                <div class="card-banner img-holder" style="--width: 890; --height: 540;">
                  <img src="./assets/images/reels/3.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">
            
                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>
            
                <div class="card-content">
            
                  <span class="chip label-md">instagram </span>
            
                  <h3 class="title-md">instagram  Reel </h3>
            
                  <p class="card-text">
                    Petit résumé des spécialités d'ESM Partie-2 <br> - Ecogreen
                  </p>
            
                  <a href="https://www.instagram.com/reel/ChSrcQoPeyE/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-primary">Watch</a>
            
                </div>
            
              </div>

              
            </li>

            <li>
              <div class="portfolio-card">
            
                <div class="card-banner img-holder" style="--width: 890; --height: 540;">
                  <img src="./assets/images/reels/5.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">
            
                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>
            
                <div class="card-content">
            
                  <span class="chip label-md">instagram </span>
            
                  <h3 class="title-md">instagram  Reel </h3>
            
                  <p class="card-text">
                    Nous avons le plaisir de vous présenter EcoGreen 💚
                  </p>
            
                  <a href="https://www.instagram.com/reel/CjIqcqmPfo_/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-primary">Watch</a>
            
                </div>
            
              </div>

              
            </li>

            <li>
              <div class="portfolio-card">
            
                <div class="card-banner img-holder" style="--width: 890; --height: 540;">
                  <img src="./assets/images/reels/6.png" width="800" height="540" loading="lazy"
                    alt="Website Design for Marketing Agency Startup" class="img-cover">
            
                  <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </a>
                </div>
            
                <div class="card-content">
            
                  <span class="chip label-md">instagram </span>
            
                  <h3 class="title-md">instagram  Reel </h3>
            
                  <p class="card-text">
                    video explicative d'une startup👀✨ seriez vous prêts à vous lancer?! 💪
                  </p>
            
                  <a href="https://www.instagram.com/reel/Cci7kjbF_0X/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-primary">Watch</a>
            
                </div>
            
              </div>

              
            </li>

          </li>

          <li>
            <div class="portfolio-card">
          
              <div class="card-banner img-holder" style="--width: 890; --height: 540;">
                <img src="./assets/images/reels/7.png" width="800" height="540" loading="lazy"
                  alt="Website Design for Marketing Agency Startup" class="img-cover">
          
                <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                  <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                </a>
              </div>
          
              <div class="card-content">
          
                <span class="chip label-md">instagram </span>
          
                <h3 class="title-md">instagram  Reel </h3>
          
                <p class="card-text">
                  Les étapes Clés pour lancer un projet 💪
                </p>
          
                <a href="https://www.instagram.com/reel/CX_3llGlOEK/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-primary">Watch</a>
          
              </div>
          
            </div>

            
          </li>

          <li>
            <div class="portfolio-card">
          
              <div class="card-banner img-holder" style="--width: 890; --height: 540;">
                <img src="./assets/images/reels/8.png" width="800" height="540" loading="lazy"
                  alt="Website Design for Marketing Agency Startup" class="img-cover">
          
                <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                  <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                </a>
              </div>
          
              <div class="card-content">
          
                <span class="chip label-md">instagram </span>
          
                <h3 class="title-md">instagram  Reel </h3>
          
                <p class="card-text">
                  website launch <a class="blink" href="https://exclub.netlify.app/" target="_blank">Excellence</a> 
                </p>
          
                <a href="https://www.instagram.com/reel/CXrbdsul1pa/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-primary">Watch</a>
          
              </div>
          
            </div>

            
          </li>

          
          <li>
            <div class="portfolio-card">
          
              <div class="card-banner img-holder" style="--width: 890; --height: 540;">
                <img src="./assets/images/reels/9.png" width="800" height="540" loading="lazy"
                  alt="Website Design for Marketing Agency Startup" class="img-cover">
          
                <a href="#" class="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
                  <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                </a>
              </div>
          
              <div class="card-content">
          
                <span class="chip label-md">instagram </span>
          
                <h3 class="title-md">instagram  Reel </h3>
          
                <p class="card-text">
                  entrepreneurship 💪 reel 
                </p>
          
                <a href="https://www.instagram.com/reel/CX1k6QGF7lX/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-primary">Watch</a>
          
              </div>
          
            </div>

            
          </li>



  `
]

let track = "web";


function generate (num){
  if(num==="web"){
    PortfolioList.innerHTML =web[0];
  }else if(num==="cont") {
    PortfolioList.innerHTML =cont[0];
  }

}


toggleBtnBox.addEventListener("click",()=>{

  PortfolioList.innerHTML = "";


  if(toggleBtnBox.classList.contains("active")){

    track = "cont"
  }else{
    track = "web"

  }

  generate(track)

})

generate(track)
