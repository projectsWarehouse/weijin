<script lang="ts" setup>
//
</script>
<template>
  <div class="news">
    <h3>新闻动态</h3>
    <p class="color_A0A1A3_4">支持全终端+全场景区块链系统应用开发，以服务为核心，为客户持续创造价值</p>
    <div class="news_grids">
      <div class="item1">
        <img src="@/assets/img/news1.png" alt="">
        <div class="content">
          <i>九州通医药集团董事长刘长云和总经理刘义常一行领...</i>
          <span>2021.6.10</span>
        </div>
      </div>
      <div class="item2">
        <img src="@/assets/img/news2.png" alt="">
        <div class="content">
          <i>九州通医药集团董事长刘长云和总经理刘义常一行领...</i>
          <span>2021.6.10</span>
        </div>
      </div>
      <div class="item3">
        <div class="content">
          <i>九州通医药集团董事长刘长云和总经理刘义常一行领...</i>
          <span>2021.6.10</span>
        </div>
        <img src="@/assets/img/news3.png" alt="">
      </div>
      <div class="item4">
        <div class="list">
          <i>九州通医药集团董事长刘长云和总经理刘义常一行领...</i>
          <span>2021.6.10</span>
        </div>
        <div class="list">
          <i>九州通医药集团董事长刘长云和总经理刘义常一行领...</i>
          <span>2021.6.10</span>
        </div>
        <div class="list">
          <i>九州通医药集团董事长刘长云和总经理刘义常一行领...</i>
          <span>2021.6.10</span>
        </div>


        <div>
          <a href="#">更多新闻</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news {
  max-width: 1200px;
  min-height: 651px;
  margin: 4% auto 0;

  p {
    margin: 2.2% 0 3.3%;
  }
}

.news_grids {
  min-height: 380px;
  width: 100%;
  display: grid;
  grid-template-columns: 415px 199px 195px auto;
}

@media (max-width:1200px) {
  .news {
    margin: 4% 10px 0;

    @media (max-width:1100px) {

      h3,
      p {
        margin-left: 5%;
      }

      .news_grids {
        margin-bottom: 5%;
        grid-template-columns: 395px 200px;
        justify-content: center;
        column-gap: 5%;

        .item3 {
          grid-row: 2;
          grid-column: 2;
          display: flex;
          flex-direction: column;
          flex-direction: column-reverse;
        }

        .item4 {
          grid-row: 2;
          grid-column: 1;
          padding: 30px 0 0 4.5%;
        }
      }

      @media (max-width:700px) {
        h3 {
          font-size: 20px;
        }

        h3,
        p {
          margin-bottom: 10px;
          margin-left: 0;
          margin-top: 0;

        }

        .news_grids {
          display: flex;
          flex-direction: column;
          grid-template-columns: 1fr;
          gap: 15px;
          justify-content: center;

          >div {
            display: flex;
            flex-direction: column;
          }

          .item1,
          .item2,
          .item3 {
            i {
              font-size: 18px;
              line-height: 18px;
              margin-bottom: 0;
              min-height: 30px;
            }
          }

          .item2 {
            grid-row: 2;
            grid-column: 1;

          }

          .item3 {
            grid-row: 3;
            grid-column: 1;
            flex-direction: column-reverse;
          }

          .item4 {
            grid-row: 4;
            grid-column: 1;
            padding: 10px 5px 0 4.5%;
          }
        }
      }
    }
  }
}

span,
a {
  font-size: 14px;
  line-height: 14px;
  color: #A0A1A3;
  display: inline-block;

}

i {
  font-size: 16px;
  line-height: 20px;
  width: 95%;
  display: inline-block;

}

.content {
  width: 100%;
  padding-left: 17px;

}

.item1 {
  img {
    max-width: 100%;
  }

  i {
    margin-top: 20px;
    font-size: 20px;
    line-height: 30px;
    min-height: 74px;
    margin-bottom: 38px;
  }
}

.item2,
.item3 {
  img {
    max-width: 100%;
  }

  i {
    min-height: 68px;
    margin-bottom: 56px;
    margin-top: 23px;
  }
}

span {
  margin-bottom: 23px;
}

.item4 {
  padding: 30px 0 0 9.5%;

  span {
    margin-bottom: 16px;
  }

  .list {
    border-bottom: 1px solid #DFDFDF;
    margin-bottom: 18px;
  }

  a {
    display: inline-block;
    margin-top: 15px;
    color: #0B59DD;
  }

}
</style>