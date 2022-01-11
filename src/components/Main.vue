<template>
  <main class="hero">
      <div class="hero-content">
        <div class="assa-dir">
          <div class="container">
            <div class="dir">
              <p><router-link  to="/accueil"
                  >accueil</router-link
                > - association sports et social aciotns</p>
            </div>
          </div>
        </div>
        <div class="assa">
          <div class="assa-flag">
            <div class="container">
              <div class="assa-titre" data-aos="fade-down">
                <h1>Association sports and social actions</h1>
              </div>
              <div class="assa-who py-5">
                <div class="row">
                  <div class="col-lg-4 text-center col-sm-12"   data-aos="fade-right"  data-aos-delay="500">
                    <div class="logo-box">
                      <img src="../assets/images/llogo.png" alt="">
                    </div>
                    <div class="assa-contact d-flex flex-column">
                      <hr>

                      <div class="address cnt">
                        <h4><i class="fas fa-map-marker-alt"></i> ADRESSE</h4>
                        <p>Anfa Casablanca</p>
                      </div>
                      <hr>
                      <div class="tel cnt">
                        <h4><i class="fas fa-phone-alt"></i> tel</h4>
                        <p>(+212) 634-849688</p>
                      </div>
                      <hr>

                      <div class="email cnt">
                        <h4><i class="fas fa-envelope"></i> e-mail</h4>
                        <p>Sports.socialsactions@gmail.com</p>
                      </div>
                      <hr>

                    </div>
                  </div>
                  <div class="col-lg-8 col-sm-12"  data-aos="fade-left"  data-aos-delay="500">
                    <h4 class="info-title mb-3">informations</h4>
                    <p class="p-assa">
                      <b>ASSA</b> - Association sports et social actions, une organisation qui a pour objectif le développement socio-éducatif à travers le sport. Notre organisation vise à créer des projets qui ont un fort impact sur les jeunes en utilisant la force du sport.
                      <br>
                      <br>
                      <b>Fondée en 2019</b>, A.S.S.A est une organisation Marocaine qui vise l’intégration et l'éducation des jeunes à travers le sport. Elle croit à la force du sport pour offrir aux jeunes, aux femmes, aux enfants, et aux personnes défavorisées : des bienfaits sur le moral, la santé, le corps et l’esprit, des communautés soudées, une confiance en soi et donc une identité plus forte. 
                      <br>
                      <br>
                      <b>Notre Vision</b>est d’être la référence africaine du développement social à travers le sport à l’horizon 2035.
                      <br>
                      <br>
                      <b>Nos réalisations</b> : 300 Bénévoles ont travaillé avec l’organisation A.S.S.A, réalisations des actions sociales à 11 Villes Marocaines, encouragement et contribution au maintien scolaire de 2000 jeunes aux zones rurales, Contribution à la découverte d’une nouvelle discipline olympique et les nouvelles orientations des amateurs du sport (le Basket 3x3) un sport urbain qui a fait passer le Maroc de la 126éme place à la 50éme place Classement Mondiale FIBA et parmi les TOP 3 en Afrique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
  </main>
</template>

<script>
export default {};
</script>

<style>

.hero{
  height:auto;
  width:100%;
}
.assa-dir{
 padding:1rem 0;
 background-color: var(--eee);
}
.dir a{
  color:var(--darks);
  font-size: .8rem;
  opacity:var(--opacity);
}
.dir p{
  text-transform: uppercase;
  font-weight: 500;
  font-size:.9rem;
  }
  .assa-titre h1{
    text-transform: uppercase;
    color:#fff;
    font-size: 2.5rem;
  }
  .assa-titre{
    padding:2.5rem 0;
    text-align: center;
    background-image: linear-gradient(to right top, rgba(255, 128, 0, 0.8), rgba(255, 145, 8, 0.9), rgba(255, 162, 22, 0.9), rgba(255, 178, 37, 0.9));
  }
.info-title{
  text-transform:uppercase;
  letter-spacing:1px;
  font-size:2rem;
}

.p-assa{
  font-size:1.1rem;
  opacity:var(--opacity);
  line-height:1.6;
}
b{
  font-weight:bold;
}
.cnt{
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1rem;
  margin:1.5rem 0;
}
.cnt h4{
  font-weight: bold;
  transition: var(--transition);
  margin-bottom: 1rem;
}
.cnt p{
  text-transform: lowercase;
}
.cnt:hover >  h4{
  color: var(--orange);
}
</style>