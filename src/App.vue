<template>
  <router-view />
</template>

<style>
/* media */
@media screen and (max-width: 600px) {
  .top-nav .container {
    flex-direction: column;
  }
  .medias {
    padding-bottom: 1rem;
  }
  .logo-img {
    height: 3rem;
  }
  .medias i {
    font-size: 1rem;
  }
  nav {
    justify-content: center;
  }
  nav .nav-item {
    margin: 0 !important;
  }
  ul {
    text-align: center;
  }
  .desc p {
    line-height: 1.6;
  }
  .desc h5 {
    font-size: 1.1rem;
  }
  footer ul,
  .footer-logo-img,
  .imgs-footer {
    margin-bottom: 2rem;
  }
  footer .logo {
    display: none;
  }
  .c-center {
    justify-content: center !important;
  }
  footer .nav-link {
    margin-bottom: 1rem !important;
  }
  .assa-titre h1 {
    font-size: 1.9rem !important;
  }
  .dir p {
    font-size: 0.7rem;
  }
  .dir a {
    font-size: 0.6rem;
  }
  .form-contact {
    width:90% !important;
  }
}
</style>
