<template>
  <div class="container mx-auto">
    <div class="row">
      <div class="col-md-3 logo text-center">
        <router-link to="/">
          <img src="/logo-white.png" />
        </router-link>
      </div>
      <div class="col-md-6" />
      <div class="col-md-3 text-center">
        <ul class="menu">
          <li>
            <router-link to="/">
              Trang chủ
            </router-link>
          </li>
          <li>
            <router-link to="/hobby">
              Sở thích
            </router-link>
          </li>
          <li>
            <router-link to="/whoiam">
              Tôi là ai?
            </router-link>
          </li>
          <!-- <li>
              <router-link to="/contact">
                Contact
              </router-link>
            </li> -->
        </ul>
      </div>
    </div>
    <hr />
    <p class="text-center">
      Thiết kế và phát triển bởi
      <router-link to="/whoiam">Vienvu</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>
