<template>
  <div class="blog">
    <div v-for="post of data" :key="post.id">
      <hr>
      <div class="row">
         <div class="col-md-3 vs">
          <div class="img">
            <router-link class="pointer" :to="'/post/'+post.id">
              <img :src="post.background">
            </router-link>
          </div>
        </div>
        <div class="col-md-9">
          <div class="content">
            <router-link class="pointer" :to="'/post/'+post.id">
              <h5>{{post.name}}</h5>
            </router-link>
            <p style="font-size: 12px">{{post.content && post.content.slice(0, 250)}}...</p>

            <p class="hashtag">
              <router-link
                class="pointer"
                v-for="tag of post.tags"
                :key="tag"
                :to="{path: '/search', query: {s: tag}}"
              >#{{tag}}</router-link>
            </p>
            <p class="author">{{post.author}}</p>
            <p class="time" v-if="post.createdAt">Đăng lúc {{post.createdAt | formatDate}}</p>
          </div>
        </div>
        <!-- <div class="col-md-3">
          <div class="img">
            <router-link class="pointer" :to="'/post/'+post.id">
              <img :src="post.background">
            </router-link>
          </div>
        </div> -->
      </div>
    </div>
    <hr>
    <div class="no-result" v-if="!data.length">
      <h4>Không kết quả</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    data: Array
  },
  data() {
    return {
      paging: {
        index: 1,
        total: 15,
        limit: 20
      }
    };
  },
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.no-result{
  padding: 150px 0 69px 0;
    text-align: center;
    background: white;
    border-radius: 15px;
}
.blog {
  h5 {
    font-weight: bold;
    color: #ca3a5c;
  }
  .content {
    padding: 15px 0;
  }
  .author,
  .time {
    font-size: 12px;
    margin-bottom: 2px;
  }
  .img {
    padding: 10px;
    text-align: center;
  }
  img {
    // width: 100px;
    width: 100%;
    // height: 100px;
  }
}
</style>
