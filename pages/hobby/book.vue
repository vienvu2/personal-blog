<template>
  <div class="container">
    <br />
    <div class="row">
      <div class="col-md-10">
        <div>
          <div>
            <img :src="first.background" style="width: 100%" />
          </div>
          <br />
          <router-link class="pointer" :to="'/post/' + first.id">
            <h3>{{ first.name }}</h3>
          </router-link>
          <p>{{ first.content && first.content.slice(0, 250) }}...</p>
          <router-link
            v-for="tag of first.tags"
            :key="tag"
            :to="{ path: '/search', query: { s: tag } }"
            class="pointer"
          >
            &nbsp;#{{ tag }}&nbsp;
          </router-link>
          <p class="time" v-if="first.createdAt">
            Đăng lúc {{ first.createdAt | formatDate }} bởi {{ first.author }}
          </p>
        </div>
        <br />
        <br />
        <h5>GẦN NHẤT</h5>
        <Category :data="blogs" />
        <Pagination
          :pageIndex="pageIndex"
          :total="total"
          :onChangePage="onChangePage"
        />
      </div>
      <div class="col-md-2">
        <h5>Book review</h5>
        <p style="text-align: justify">
          Boring, angry, stress, bad can gone when you read a favorite book
        </p>
        <br />
        <h5>Tags</h5>
        <ul>
          <li v-for="tag of tags" :key="tag">
            <router-link
              :to="{ path: '/search', query: { s: tag } }"
              class="pointer"
              >#{{ tag }}</router-link
            >
          </li>
        </ul>
        <br />
        <h5>Authors</h5>
        <ul>
          <li v-for="author of authors" :key="author">
            <router-link
              :to="{ path: '/search', query: { s: author } }"
              class="pointer"
              >#{{ author }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from "@/components/Category.vue";
import Pagination from "@/components/Pagination.vue";
import { getSearchPosts } from "@/service.js";

export default {
  components: {
    Category,
    Pagination
  },
  data() {
    return {
      keySearch: "",
      blogs: [],
      pageIndex: 1,
      total: 0,
      first: {},
      tags: ["review", "book", "hobby"],
      authors: ["Viên Vũ"]
    };
  },
  methods: {
    onChangePage() {},
    doSearch() {
      // document.title = 'Viên Vũ | Book';
      this.keySearch = "book";
      const that = this;
      getSearchPosts(this.pageIndex, this.keySearch).then(data => {
        that.blogs = [];
        const dataArr = data.list;
        if (dataArr && dataArr.length) {
          that.first = JSON.parse(JSON.stringify(data.list[0]));
        }
        // console.log("getSearchPosts >>>>>>>>>>>>>", data);
        that.total = data.total / 20;
        dataArr.map(doc => {
          that.blogs.push({
            id: doc.id,
            ...doc
          });
        });
        that.blogs.shift();
      });
    }
  },
  created() {
    this.doSearch();
  }
};
</script>
<style lang="scss" scoped>
h3 {
  font-weight: bold;
  color: #ca3a5c;
}
</style>
