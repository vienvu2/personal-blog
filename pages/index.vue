<template>
  <div class="home">
    <Intro />
    <Blog :data="blogs" />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import Blog from "@/components/Blog.vue";

import { getPosts } from "@/service.js";

export default {
  name: "home",
  components: {
    Intro,
    Blog
  },
  data() {
    return {
      pageIndex: 1,
      blogs: [],
      total: 0
    };
  },
  head: {
    title: 'Viên Vũ | Home',
  },
  methods: {
    onChangePage: function(params) {
      this.pageIndex = params;
    },
    getData: function() {
      getPosts(this.pageIndex).then(data => {
        this.blogs = [];
        this.total = Math.floor(data.total / 20);
        const dataArr = data.list;
        dataArr.map(doc => {
          this.blogs.push({
            id: doc.id,
            ...doc
          });
        });
      });
    }
  },
  created: function() {
    this.getData();
  }
};
</script>
