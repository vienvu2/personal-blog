<template>
  <div class="post">
    <div class="cover" :style="{'background-image': `url(`+ data.background+`)`}">
      <div class="content">
        <div class="container">
          <p class="hashtag">
            <router-link
              v-for="tag of data.tags"
              :key="tag"
              :to="{path: '/search', query: {s: tag}}"
            >#{{tag}}</router-link>
          </p>
          <h2>
            <strong>{{data.name}}</strong>
            <b-button v-if="editMode" class="pull-right" @click="openModal()">
              <i class="fa fa-pencil"/>
            </b-button>
          </h2>
          <p
            class="time"
            v-if="data.createdAt"
          >Đăng lúc {{data.createdAt | formatDate}} bởi {{data.author}}</p>
          <a
            class="pointer text-white"
            :href="`https://www.facebook.com/sharer/sharer.php?u=`+ currentUrl"
            target="_blank"
          >
            <i class="fa fa-facebook" style="font-size: 28px"/>
          </a>

          <a
            class="pointer text-white"
            :href="`https://twitter.com/share?u=`+currentUrl"
            target="_blank"
          >
            <i class="fa fa-twitter" style="font-size: 28px"/>
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <br>
      <br>
      <div class="row">
        <div class="main-content col-md-9">
          <VueMarkdown :source="data.content"></VueMarkdown>
        </div>
        <div class=" col-md-3 d-none d-md-block">
          <div class="toc-content">
            <VueMarkdown :source="data.content" :toc="true" :toc-first-level="3" :toc-last-level="6"></VueMarkdown>
          </div>
        </div>
      </div>
      <br>
      <br>
    </div>
    <b-modal size="slg" id="modal1" title="Edit post" hide-footer>
      <div class="row">
        <div class="col-md-6">
          <textarea style="width: 100%; height: 900px" v-model="data.content"></textarea>
        </div>
        <div class="col-md-6">
          <div class="main-content" style=" height: 900px; overflow: auto">
            <VueMarkdown :source="data.content"></VueMarkdown>
          </div>
        </div>
      </div>
      <hr>
      <div class="text-right">
        <b-button class="mt-3" variant="outline-basic" @click="close()" >Close</b-button>
        &nbsp;
        &nbsp;
        <b-button class="mt-3 " variant="success"  @click="save()">Save</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import { getPost, savePost } from "@/service.js";
import VueMarkdown from "vue-markdown";
 
export default {
  name: "home",
  components: {
    VueMarkdown
  },
  data() {
    return {
      data: {},
      currentUrl: "",
      editMode: false,
      interval: null
    };
  },
  methods: {
    
    edit() {},
    save() {
      savePost(this.data).then(()=>{
        this.$root.$emit('bv::hide::modal', 'modal1', '#btnShow')
      })
    },
    openModal(){
      this.$root.$emit('bv::show::modal', 'modal1', '#btnShow');
      this.interval = setInterval(()=>savePost(this.data).then(()=>{}), 30000);
    },
    close() {
      this.$root.$emit('bv::hide::modal', 'modal1', '#btnShow');
      if(this.interval){
        clearInterval(this.interval)
      }
    },
    getData: function() {
      const that = this;
      const id = this.$route.params.id;
      this.editMode = this.$route.query.edit === 'vienvuthanh';
      // this.editMode = true;
      getPost(id).then(function(data) {
        if (data.tags) {
          data.tags = data.tags.split(",");
        } else {
          data.tags = [];
        }
        that.data = data;
        // document.title = 'Viên Vũ | '+data.name;
        document.description = data.name;
      });
    }
  },
  watch: {
    '$route.query.edit'(){
      this.editMode = this.$route.query.edit === 'vienvuthanh';
    }
  },
  mounted: function() {
    this.currentUrl = window.location.href;
    this.getData();
    
  }
};
</script>
<style lang="scss">
.modal-slg {
  width: 90%;
  max-width: 90%;
}
.toc-content{
  background: #f4f4f4;
  padding-top: 40px;
  h1,h2,h3, h4,h5,h6{
    padding: 4px;
    transition: all .3s linear;
    &:hover{
      background: #ccc;
    }
  }
  h1,h2,h3, h4{
    font-size: 16px;
    font-weight: bold;
  }
  p,li,h4,h5,h6{
    font-size: 14px;
    padding-left: 15px;
  }
  p, a, li, blockquote, code, img{
    display: none;
  }
}
.main-content {
  blockquote {
    border-left: 3px solid #c93659;
    padding: 25px;
    padding-left: 30px;
    padding-bottom: 5px;
    background: #f4f4f4;
  }
  p,
  li {
    font-size: 15px;
  }
  p {
    text-align: justify;
  }
  h1,
  h2,
  h4,
  h3 {
    font-weight: bold;
    color: #c93659;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  h5 {
    font-weight: bold;
    color: #555;
  }
  h1{
    font-size: 28px;
  }
  h2{
    font-size: 24px;
  }
  h3{
    font-size: 22px;
  }
  h4{
    font-size: 20px;
  }
  h5{
    font-size: 18px;
  }
  h6{
    font-size: 16px;
  }
  pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #c93659;
    border-radius: 4px;
  }
  img {
    display: block;
    margin: 20px auto;
    max-width: 80%;

  }
}
.cover {
  background-repeat: no-repeat;
  min-height: 500px;
  padding-top: 100px;

  background-size: cover;
  .content {
    padding-top: 190px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    min-height: 400px;
    .hashtag {
      a {
        color: white;
        font-weight: bold;
        margin-right: 5px;
      }
    }
    .time,
    .hashtag,
    h2 {
      color: white;
    }
  }
}
</style>

