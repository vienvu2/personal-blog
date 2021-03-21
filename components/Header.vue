<template>
  <div class="fixed w-screen">
    <div class="container mx-auto ">
      <div class="flex align-items-start ">
        <router-link to="/">
          <img src="/logo.png" />
        </router-link>
        <router-link
          class="p-3 inline-block cursor-pointer hover:text-green-500 border-b-2 border-transparent hover:border-green-500 "
          to="/"
        >
          Trang chủ
        </router-link>
        <router-link
          class="p-3 inline-block cursor-pointer hover:text-green-500 border-b-2 border-transparent hover:border-green-500 "
          to="/showroom"
        >
          Tác phẩm
        </router-link>
        <div class="flex flex-col group relative">
          <router-link
            class="p-3 inline-block cursor-pointer hover:text-green-500 border-b-2 border-transparent hover:border-green-500 "
            to="/hobby"
          >
            Sở thích
            <i class="fa fa-chevron-down" />
          </router-link>
          <div class="absolute top-0 left-0 flex-col hidden group-hover:flex">
            <router-link class="p-2 block" to="/hobby/programming">
              Lập trình
            </router-link>
            <router-link class="p-2" to="/hobby/travel"> Du lịch </router-link>
            <router-link class="p-2" to="/hobby/movie">
              Đánh giá phim
            </router-link>
            <router-link class="p-2" to="/hobby/book">
              Đánh giá sách
            </router-link>
            <router-link class="p-2" to="/hobby/game">
              Đánh giá game
            </router-link>
          </div>
        </div>
        <router-link
          class="p-2 text-bold inline-block cursor-pointer hover:text-green-500 border-b-2 border-transparent hover:border-green-500 "
          to="/whoiam"
        >
          Tôi là ai?
        </router-link>
        <div class="flex-1" />
        <div class="p-2 border-xl h-3" :class="{ active: keySearch }">
          <i class="fa fa-search" />
          <input
            @keyup.enter="search"
            v-model="$route.query.s"
            placeholder="Nhập từ tìm kiếm"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    search: function() {
      this.$router.push({ name: "search", query: { s: this.$route.query.s } });
    },
  },
};
</script>
