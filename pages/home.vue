<template>
  <div class="home">
    <Intro/>
    <Blog :data="blogs"/>
    <!-- <Pagination :pageIndex="pageIndex" :total="total" :onChangePage="onChangePage"/>
     -->
     <br>

     <div class="text-center">
     <!-- <b-button class="see-more" size="sm">&nbsp; See more <i class="fa fa-chevron-down" /> &nbsp;</b-button> -->
     </div>
     <br>

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
    Blog,
  },
  data() {
    return {
      pageIndex: 1,
      blogs: [],
      total: 0
    };
  },
  methods: {
    onChangePage: function(params) {
      this.pageIndex = params;
    },
    getData: function () {
      // document.title = 'Viên Vũ | Home';
      const that = this;
      getPosts(this.pageIndex).then((data) => {
      that.blogs = [];
      that.total = Math.floor(data.total / 20);
      const dataArr = data.list;
      dataArr.map((doc)=> {
        // console.log(doc);
        that.blogs.push({
          id: doc.id,
          ...doc
        })
      });
      // console.log(that.blogs);
    });
    }
  },
  created: function() {
    this.getData();
  }
};
</script>
<style lang="scss">
  .see-more{
    background: #ca3a5c;
    border: 0;
    &:hover{
    background: #a50e32;

    }
  }
  
</style>

