<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-lg-12 text-center">
        <h4 class="title-h4 py-4">Contactez-nous Maintenant</h4>
      </div>
      <div class="col-lg-12 d-flex justify-content-center">
        <form
          action="https://formsubmit.co/sports.socialsactions@gmail.com"
          method="POST"
          class="form-contact py-2"
        >
          <input type="hidden" name="_subject" value="message assa maroc" />

          <input
            type="text"
            name="name"
            required
            class="input-contact"
            placeholder="Nom et Prénom"
          />
          <input
            type="email"
            name="email"
            required
            class="input-contact"
            placeholder="Email"
          />
          <textarea
            name="message"
            required
            class="input-contact"
            rows="6"
            placeholder="Ecrivez votre message ici"
          ></textarea>
          <button type="submit" class="btn-contact">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form-contact {
  display: flex;
  width: 50%;
  flex-direction: column;
}
.input-contact {
  background: var(--fff);
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 10px;
  border-radius: 25px;
}
.input-contact:focus,
.input-contact:focus-visible {
  border: 1px solid var(--orange);
  outline: none;
}
.btn-contact {
  padding: 0.9rem;
  border: none;
  background: var(--linear-color);
  color: #fff;
  transition: var(--transition);
  border-radius: 20px;
  font-weight: 500;
}
.btn-contact:active {
  transform: scale(0.98);
}
</style>