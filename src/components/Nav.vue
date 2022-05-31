<template>
  <div class="navs">
    <div class="top-nav">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="logo">
          <router-link class="nav-link" to="/"
                  ><img src="../assets/images/Capture.png" alt="" class="logo-img"
          /></router-link
                >
         
        </div>
        <div class="medias">
          <a href="https://www.facebook.com/Association-sports-et-sociales-actions-102355604503289" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/assa.maroc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>

          
         
          <a href="https://www.youtube.com/channel/UCwwzAWfDr8nh53fQh4tretw" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
    <nav class=" d-flex align-items-center">
      <div class="container">

      <ul>
            <li class="nav-item">
              <router-link class="nav-link" to="/accueil"
                  >accueil</router-link
                >
            </li>
            
          
          </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo-img {
  height: 5rem;
}
.top-nav {
  background-color: #fff;
  padding: 0 5px;
  width: 100vw;
}
.medias i {
  color: var(--orangs);
  margin: 0 0.6rem;
  transition: var(--transition);
  font-size: 1.2rem;
}
.medias i:hover,
.medias i:active {
  color: var(--main-color);
}
/*  */
.nav-link {
  color: var(--darks);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition);
  font-weight: 500;
}
.nav-link:hover,.router-link-exact-active,.router-link-active{
  color:var(--orangs);
}
.nav-item{
  margin:0 30px;
  display:inline-block;
}
nav{
  height:50px;
  width: 100vw;
  background:var(--eee);
}
</style>
