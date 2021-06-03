<template>
    <div class="pagination justify-content-center">
        <div @click="changePage(pageIndex  - 1)" class="page-item"><a  class="page-link"><i class="fa fa-chevron-left" /></a></div>
        <div @click="changePage(item)" v-for="item of items" :key="item"  class="page-item" :class="{active: item == pageIndex }">
          <a class="page-link" >{{item}}</a>
        </div>
        <div @click="changePage(pageIndex + 1)" class="page-item"><a class="page-link"><i class="fa fa-chevron-right" /></a></div>
    </div>
</template>

<script>
export default {
    name: "pagination",
    props: {
        pageIndex: Number,
        total: Number,
        onChangePage: Function
    },
    data() {
        return {
            items : [1]
        }
    },
    methods: {
        changePage: function(item){
            if(item >= 1 && item <= Math.ceil(this.total / 5)){
            // this.pageIndex = item;
            // this.updatePage();
            this.onChangePage(item)
            }
        },
        updatePage: function(){
            const items = [];
            for(let i = 1; i <= Math.ceil(this.total / 5); i++){
                if(i > this.pageIndex - 3 && i < this.pageIndex + 3 ){
                    items.push(i)
                }
            }
            this.items = items;
        }
    },
    watch: {
        'pageIndex'() {
            this.updatePage();
        },
        'total'() {
            this.updatePage();
        }
    },
    created() {
        this.updatePage();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> 
.pagination {
    margin: 0 auto;
    text-align:center;
    padding: 20px;
    .page-item.active{
        .page-link{
            background: #ca3a5c;
            color: white;
            font-weight: bold;
            border: 1px solid #ccc;
        }
    }
    .page-link{
        display: inline-block;
        padding: 8px 15px;
        margin: 0 3px;
        cursor: pointer;
        &:hover{
            background: #ca3a5c;
            color: white;
            font-weight: bold;
        }
    
    }
}
</style>
