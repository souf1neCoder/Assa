<template>
  <footer>
    <div class="footer-main py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <ul class="d-flex text-center flex-column">
              <li class="nav-item">
                <router-link class="nav-link" to="/accueil"
                  >accueil</router-link
                >
              </li>
              
             
            </ul>
          </div>
          <div class="col-lg-3 text-center mb-3  col-sm-12">
            <div class="footer-logo-img">
              <img src="../assets/images/llogo.png" alt="assa" />
            </div>
          </div>
          <div class="col-lg-5  col-sm-12">
            <div class="imgs-footer">
              <img
                class="img-footer lb lr"
                src="../assets/images/assa/slide1.jpeg"
                alt=""
              />
              <img
                class="img-footer lb lr"
                src="../assets/images/assa/slide2.jpeg"
                alt=""
              />
              <img
                class="img-footer lb"
                src="../assets/images/assa/slide3.jpeg"
                alt=""
              />
              <img
                class="img-footer lb lr"
                src="../assets/images/assa/aaa.jpg"
                alt=""
              />
              <img
                class="img-footer lb lr"
                src="../assets/images/assa/aa.jpg"
                alt=""
              />
              <img
                class="img-footer lb"
                src="../assets/images/assa/aaaa.jpg"
                alt=""
              />
              <img
                class="img-footer lr"
                src="../assets/images/assa/aaaaa.jpg"
                alt=""
              />
              <img
                class="img-footer lr"
                src="../assets/images/assa/aaaaaa.jpg"
                alt=""
              />
              <img
                class="img-footer"
                src="../assets/images/assa/a.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr />
        <div class="row pt-3 text-center justify-content-between align-items-center c-center">
          <div class="logo">
            <a href="#"
              ><img src="../assets/images/logo.png" alt="" class="logo-img"
            /></a>
          </div>
          <p class="p-footer">&copy; Copyright   2022, ASSA MAROC</p>
          <div></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.assa-footer {
  padding: 1rem 0;
}
.footer-main {
  background-color: var(--eee);
}
footer .nav-link {
  margin-bottom: 2.5rem;
}
.footer-logo-img img {
  height: 12rem;
}
.imgs-footer {
  height: 300px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  flex-direction: row;
  border: 1px solid var(--orangs);
  border-radius: 5px;
}
.img-footer {
  width: calc(100% / 3);
  height: calc(296px / 3);
}
.lb {
  border-bottom: 1px solid var(--orangs);
}

.lr {
  border-right: 1px solid var(--orangs);
}
footer .logo-img{
    height: 3rem;
}
.p-footer{
    opacity: var(--opacity);
}
</style>
