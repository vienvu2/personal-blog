<template>
  <div class="intro container">
      <div class="text-center mobile-avatar">
      <router-link to="/whoiam">
        <div class="avatar">
          <img src="avatar.jpg">
        </div>
        </router-link>
    </div>
    <div class="row">
      <div class="col-md-7 offset-1">
        <h1>
          Chào! Tôi là
          <span>{{title}}</span>|
        </h1>
        <h4>Tôi là một Frontend developer, tôi thích thú với việc tạo ra những sản phẩm mới. Tôi cũng rất có nhiều thứ để viết, viết về du lịch, phượt, review sách, review phim và nhiều nữa...</h4>
        <!-- <h4>I'm a front end developer, I love develop something new. Otherwise I have some hobby: discover strange landing, read interesting book, enjoy movie on cinema, TV</h4> -->
        <p>
          <router-link  v-for="item in tags" :key="item"  :to="{ path: '/search', query: { s: item } }">#{{item}}</router-link>
        </p>
        <p class="social">
          <a href="https://www.facebook.com/thangkubom742" target="_blank">
            <i class="fa fa-facebook"/>
          </a>
          <a href="https://www.instagram.com/vuthanhvien742/" target="_blank">
            <i class="fa fa-instagram"/>
          </a>
          <a href="https://www.youtube.com/channel/UCDqLCfHn9VMHk7bYG-xlvhw" target="_blank">
            <i class="fa fa-youtube"/>
          </a>
          <a href="https://www.behance.net/thangkubom" target="_blank">
            <i class="fa fa-behance"/>
          </a>
          <a href="https://dribbble.com/vuthanhvien742" target="_blank">
            <i class="fa fa-dribbble"/>
          </a>
        </p>
      </div>
      <div class="col-md-3 text-right pc-avatar">
        <router-link to="/whoiam">
        <div class="avatar">
          <img src="avatar.jpg">
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  data() {
    return {
      tags: ["programming", "travel", "book", "film"],
      titles: ["Viên Vũ", "Frontend developer", "UX/UI designer"],
      title: ""
    };
  },
  methods: {
    search: function(key) {
      this.$router.push({ name: "search", query: { s: key } });
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async change() {
      const strings = this.titles;
      while(strings) {
        for (let j = 0; j < strings.length; j++) {
          const string = strings[j];
          for (let i = 0; i < string.length; i++) {
            await this.sleep(150);
            this.title = this.title + string[i];
          }
          await this.sleep(3000);

          for (let i = string.length; i > 0; i--) {
            await this.sleep(80);
            this.title = this.title.slice(0, -1);
          }
        }
      }
    }
  },
  created() {
    const strings = this.titles;
    let total = 0;
    for (let j = 0; j < strings.length; j++) {
      total = total + strings[j].length;
    }
    this.change();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media only screen and (max-width: 992px) {
  .mobile-avatar {
    display: block !important;
  }
  .pc-avatar {
    display: none !important;
  }
  .social {
    text-align: center;
  }
}
.mobile-avatar {
  display: none;
  margin-top: -105px;
  padding-bottom: 50px;
}
.intro {
  padding-top: 150px;
  padding-bottom: 120px;
  h1 {
    text-align: left;
    font-size: 42px;
    color: #909090;
    font-weight: 200;
    span {
      font-size: 42px;
      font-weight: bold;
      color: #ca3a5c;
    }
  }
  h3 {
    color: #444;
  }
  a {
    font-weight: 300;
    padding-right: 5px;
    font-size: 13px;
    cursor: pointer;
    display: inline-block;
    color: #444;
    &:hover {
      font-weight: 400;
      color: #ca3a5c !important;
    }
  }
  .social {
    a {
      opacity: 0.8;
      color: #444;
      font-size: 24px;
      margin-right: 10px;
    }
  }
  .avatar {
    display: inline-block;
    width: 170px;
    height: 170px;
    transform: rotate(45deg);
    overflow: hidden;

    border-top: 3px solid #ca3a5c;
    border-right: 3px solid #ca3a5c;
    border-radius: 5px;
    margin-top: 25px;
    transition: all linear 0.3s;
    &:after {
      content: "";
      background: white;
      // border: 3px solid #ca3a5c;
      border-radius: 5px;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 4px;
      left: 4px;
      z-index: -1;
    }
    img {
      width: 140%;
      transform: rotate(-45deg);
      margin-top: -27px;
      margin-left: -27px;
    }
    &:hover {
      transition: all linear 0.3s;

      width: 190px;
      height: 190px;
      margin-top: 15px;
      margin-bottom: -10px;
      margin-left: -10px;
    }
  }
}
</style>
