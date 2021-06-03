<template>
  <div class="footer ">
    <div class="container">
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
              <router-link to="/home">
                Trang chủ
              </router-link>
            </li>
             <li>
              <router-link to="/programming">
                Lập trình
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
    <hr>
  <p class="text-center">Thiết kế và phát triển bởi <router-link  to="/whoiam">Vienvu</router-link></p>
  </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  padding: 20px 0 20px 0;
  background: #444;
  .menu{
     padding: 30px 0;
    list-style: none;
    li{
      display: block;
    }
    a{
      color: white;
      font-weight: bold;
    }
  }
  .logo{
    padding: 40px 0;
  img{
    height: 80px;
  }
  }
  p {
    color: white;
    a{
      color: white;
      font-weight: bold;
    }
  }
  hr{
    border-color: #fff5;
  }
}
</style>
