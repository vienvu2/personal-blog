<template>
  <div class="search ">
    <br>
    <br>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <h2>Search for: <strong>{{keySearch}}</strong></h2>

          </div>
          <div class="col-md-3">
            <div class="form-controll select">
             <select @change="onChange($event)" v-model="sortKey">
              <option value="name_desc">Sort by name a -> z</option>
              <option value="name_asc">Sort by name z -> a</option>
              <option  value="createdAt_desc">Sort by newest </option>
              <option  value="createdAt_asc">Sort by oldest </option>
            </select>
          </div>
          </div>
        </div>
       
      </div>
      </div>
    <div class="container">
        <Category :data="blogs"/>
        <Pagination :pageIndex="pageIndex" :total="total" :onChangePage="onChangePage"/>
    </div>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from "@/components/Category.vue";
import Pagination from "@/components/Pagination.vue";

import { getSearchPosts } from "@/service.js";

export default {
  name: "search",
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
      sortKey: 'createdAt_desc'
    };
  },
  methods: {
    onChange(event){
      // console.log(event.target.value)
    },
    onChangePage() {},
    doSearch() {
      this.keySearch = this.$route.query.s;
      // document.title = 'Viên Vũ | Search "'+ this.keySearch+'"' ;
      const that = this;
      // console.log("doSearch");
      getSearchPosts(this.pageIndex, this.keySearch).then(data => {
        that.blogs = [];
        const dataArr = data.list;
        // console.log("getSearchPosts >>>>>>>>>>>>>", data);
        that.total = data.total;
        dataArr.map(doc => {
          that.blogs.push({
            id: doc.id,
            ...doc
          });
        });
      });
    }
  },
  watch: {
    "$route.query.s"() {
      this.doSearch();
    }
  },
  created() {
    this.doSearch();
  }
};
</script>
<style lang="scss">
.search {
  h2 {
    color: #999;
    strong {
      color: #444;
    }
  }
  .select {
    select {
      height: 45px;
      padding-left: 15px;
      width: 100%;
    }
  }
}
</style>

