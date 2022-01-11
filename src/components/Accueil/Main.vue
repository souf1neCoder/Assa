<template>
  <main class="my-5">
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-6 col-md-12 mb-5"  data-aos="fade-right">
          <div class="box_image">
            <img src="@/assets/images/assa/slide1.jpeg" alt="">
          </div>
          <hr>
        </div>
        <div class="col-lg-6 col-md-12 mb-5"  data-aos="fade-left">
          <div class="desc">
            <h5>Caravane rurale sportive et humanitaire : un parmi les projets les plus marquant réalisés par l’association sport et sociales actions « ASSA ».</h5>
            <p>L’association ASSA a organisé une caravane pendant quatre jours du 10 au 13 février 2020, considérée comme la première de ce genre dans l’histoire de l’association, sous le slogan « le sport pour tous » au profit des garçons et filles des écoles primaires d’ Ouled-ghanem à la province d’Eljadida : Al-Gharbawiyin, Almarkazia et Regagda. Ces derniers ont été témoins de plusieurs activités récréatives, sportives et culturelles clôturées par la remise des diplômes et des médailles en guise d’encouragement et de motivation à ces enfants. Finalement, les membres de l’association ont également distribué des vêtements aux dizaines de familles nécessiteuses.</p>
          </div>
          <hr>
        </div>
        <div class="col-lg-6 col-md-12 mb-5"  data-aos="fade-right">
          <div class="desc">
            <h5>- Basket 3x3</h5>
            <p>À travers 55 tournois, ASSA a fait une initiation et découverte du basket 3x3 dont on a hissé haut le drapeau marocain pour faire passer le Maroc de la 126 à la 48ème place au classement mondial. En plus de ça, on a organisé le 1er camp international en basket 3x3 en Afrique qui a connu la présence du Joueur numéro 1 en France et parmi les tops 30 au monde ; ‘Kevin CORRE’ et la formatrice ‘Diana GANDEGA.</p>
          </div>
          <hr>
        </div>
        <div class="col-lg-6 col-md-12 mb-5"  data-aos="fade-left">
          <div class="box_image">
            <img src="@/assets/images/assa/slide2.jpeg" alt="">
          </div>
          <hr>
        </div>
        <div class="col-lg-6 col-md-12 mb-5"  data-aos="fade-right">
          <div class="box_image">
            <img src="@/assets/images/assa/slide3.jpeg" alt="">
          </div>
          <hr>
        </div>
        <div class="col-lg-6 col-md-12 mb-5"  data-aos="fade-left">
          <div class="desc">
            <h5>Orphelinat « Dar El Moubdioune »</h5>
            <p>À Temara, plus précisément à l’orphelinat de « Dar El Moubdioune » , notre première et nouvelle expérience se déclenchent , un moment exceptionnel avec ses enfants et ses adultes qui ne connaissent pas peut-être le goût de vivre en famille, vivre en tendresse et en amour, notre association a eu le plaisir de partager avec ces dernières une journée pleine de surprises, de joie, de bonheur et de tendresse même sans oublier le sentiment d’amitié qu’on avait gravé dans leurs esprits ainsi que le sens de coopération.</p>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
}
</script>

<style>
.desc p{
  color:var(--main-color);
  line-height:1.7;
}
.desc h5{
  color:var(--darks);
  line-height: 1.6;
  font-weight:600;
  font-size:1.2rem;
}
.box_image img{
  transition:var(--transition);
}
.box_image img:hover{
  transform :scale(1.2);
}
.box_image{
  overflow: hidden;
}
</style>