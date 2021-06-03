<template>
<div >
    <div class="mobile-menu" :class="{show: menuOpen}" >
      <ul @click="toggleMenu" >
        <li>
          <router-link to="/"  >
          Trang chủ
          </router-link>
          </li>
        <li> <router-link to="/programming" >
          Lập trình
          </router-link></li>
           <li> <router-link to="/hobby"  >
          Sở thích
          </router-link></li>
           <li> <router-link to="/whoiam"  >
          Tôi là ai?
          </router-link></li>
           <!-- <li> <router-link to="/contact">
          Contact
          </router-link></li> -->
       
      </ul>
      <div class="close" @click="toggleMenu"/> 
    </div>

  <div class="header container" >
  
    <div class="icon-menu" @click="toggleMenu">
      <i class="fa fa-bars" />
    </div>
    <div class="logo">
       <router-link to="/">
        <img src="/logo.png">
      </router-link>
    </div>
    <div class="menu">
      <ul>
        <li>
          <div class="menu-item">
          <router-link to="/home">
              Trang chủ
          </router-link>
          </div>
        </li>
        <li>
          <div class="menu-item">
          <router-link to="/programming">
             Lập trình
          </router-link>
          </div>
        </li>
        <li>
          <div class="menu-item">
            <router-link to="/hobby">
              Sở thích
              <i class="fa fa-chevron-down"/>
            </router-link>
            <div class="sub-menu">
              <ul>
                <li>
                  <router-link to="/hobby/travel">Du lịch</router-link>
                </li>
                <li>
                  <router-link to="/hobby/film">Đánh giá phim</router-link>
                </li>
                <li>
                  <router-link to="/hobby/book">Đánh giá sách</router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="menu-item">
                  <router-link to="/whoiam">Tôi là ai?</router-link>
          </div>
        </li>
        <!-- <li>
          <div class="menu-item">
                  <router-link to="/contact">Contact</router-link>
          </div>
        </li> -->
      </ul>
    </div>
    <div class="search" :class="{active: keySearch}">
      <i class="fa fa-search"/>
      <input @keyup.enter="search" v-model="keySearch" placeholder="Nhập từ tìm kiếm" />
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  data() {
    return {
      menuOpen: false,
      keySearch: ""
    };
  },
  methods: {
    toggleMenu: function() {
      this.menuOpen = !this.menuOpen;
    },
    search: function() {
      this.$router.push({ name: 'search', query: { s: this.keySearch } })
    },
    doSearch(){
      this.keySearch = this.$route.query.s;
    }
  },
  watch: {
    "$route.query.s"() {
      this.doSearch();
    }
  },created() {
    this.doSearch();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media only screen and (max-width: 992px) {
  .icon-menu {
    display: block !important;
  }
  .logo {
    flex: auto;
  }
  .menu {
    display: none !important;
  }
}
.mobile-menu {
  position: fixed;
  opacity: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  top: 0;
  background: #0000006b;
  left: 0;
  z-index: -1;
  .close {
    top: 0;
    right: 0;
    display: block;
    position: fixed;
    width: 20%;
    height: 100%;
  }
  &.show {
    z-index: 5;
    opacity: 1;
    pointer-events: initial;
    ul {
      left: 0;
    }
  }

  ul {
    transition: left ease 0.3s;
    padding: calc(50vh - 92px) 35px;
    left: -100%;
    background: white;
    margin: 0;
    list-style: none;
    display: block;
    position: fixed;
    width: 80%;
    height: 100%;
    line-height: 37px;
    li {
      a {
        font-size: 18px;
        font-weight: bold;
        color: #444;
        &.router-link-exact-active {
          color: #ca3a5c;
        }
      }
    }
  }
}
.header {
  padding-top: 15px;
  display: flex;
  border-bottom: 1px solid #ccc;
  .icon-menu {
    display: none;
    font-size: 25px;
    padding-top: 7px;
    cursor: pointer;
  }
  .logo {
    padding: 5px;
    img {
      height: 40px;
    }
  }
  & > div {
    display: flex;
  }
  .menu {
    flex: auto;
    margin-left: 25px;
    & > ul {
      margin: 0;
      list-style: none;
      & > li {
        display: inline-block;
        a {
          color: #888;
          font-weight: bold;
          i {
            font-size: 10px;
          }
        }
        .menu-item {
          position: relative;
          margin: 13px 0;
          & > a {
            padding: 15px 25px;
            cursor: pointer;
            &.router-link-active,
            &:hover {
              background: #f4f4f4;
              color: #ca3a5c;
              text-decoration: underline;
            }
          }
          &:hover {
            .sub-menu {
              display: block;
            }
            & > a {
              background: #f4f4f4;
              color: #ca3a5c;
              text-decoration: underline;
            }
          }
        }
        .sub-menu {
          z-index: 3;
          display: none;
          position: absolute;
          background: white;
          // padding: 15px 25px;
          border: 1px solid #ccc;
          top: 37px;
          left: 0px;
          min-width: 250px;
          ul {
            margin: 0;
            list-style: none;
            padding: 0px;
            li {
              a {
                display: block;
                &.router-link-exact-active,
                &:hover {
                  background: #f4f4f4;
                  text-decoration: underline;
                  color: #ca3a5c;
                }
                padding: 10px 25px;
              }
            }
          }
        }
      }
    }
  }
  .search {
    padding: 15px;
    cursor: pointer;
    height: 45px;
    min-width: 45px;
    border-radius: 25px;
    background: #f4f4f4;
    input {
      width: 0;
      font-weight: bold;
      border: 0;
      padding-left: 0px;
      margin-top: -15px;
      transition: width ease 0.3s;
      background: transparent;
      height: 45px;
      &::placeholder {
        color: #999;
      }
    }
     &.active ,
    &:hover {
      background: #ca3a5c;
      color: white;
      input {
        width: 180px;
        padding-left: 15px;
        color: white;
        &::placeholder {
        color: #fff6;
      }
      }
    }
  }
}
</style>
