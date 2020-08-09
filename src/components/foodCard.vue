<template>
  <v-card raised max-width="240" class="ma-2 pa-0 foodCard">
    <div class="foodContent">
      <img class="foodCardImg" :src="resultData.image" />
      <v-col class="pa-3 foodDetails" style="background: #000000">
        <v-row no-gutters align="center">
          <v-col class="ma-0 pa-0">
            <v-card-title class="ma-0 pa-0">
              <div style="color:#ffffff">{{resultData.name}}</div>
            </v-card-title>

            <v-icon class="pr-2" color="#ffffff">mdi-clock</v-icon>

            <span style="color:#ffffff">24 mins</span>
          </v-col>

          <v-icon color="red">mdi-heart</v-icon>
        </v-row>
        <v-card-text class="ma-0 pa-0 pt-2">
          <v-row align="center" class="mx-0"></v-row>

          <div style="color:#ffffff">{{resultData.description}}</div>
        </v-card-text>

        <div class="gradient" style="background: linear-gradient(rgba(255,0,0,0) 0%, #000000 85%);"></div>
      </v-col>
    </div>
    <div class="top-right rectangle" style="background-color:#000000">
      <div style="color: #ffffff">{{resultData.category}}</div>
    </div>
    <div class="foodOverlay" style="background: #000000">
      <v-btn rounded outlined @click="goToDetail" dark>View More</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "FoodCard",

  props: {
    resultData: {},
  },
  methods:{
    goToDetail(){
      this.$router.push({
        path:`/${this.resultData.id}/about`,
        query:{...this.resultData}
      })
    }
  }
};
</script>
<style scoped>
.foodCard {
  overflow: hidden;
  position: relative;
  border-radius: 12px !important;
}
.foodCard:hover .foodOverlay {
  visibility: visible;
}
.foodOverlay {
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  color: #ffffff;
  position: absolute;
  visibility: hidden;
  align-items: center;
  justify-content: center;
}
.foodDetails {
  position: relative;
}
.foodCardImg {
  width: 240px;
  overflow: hidden;
  min-height: 100px;
}
.gradient {
  left: -12px;
  top: -36px;
  height: 36px;
  position: absolute;
  width: calc(100% + 12px);
}

.top-right {
  top: 0px;
  right: 0px;
  position: absolute;
}

.rectangle {
  font-size: 13px;
  padding: 4px 18px;
  text-align: center;
  border-radius: 0px 12px 0px 10px;
}
.whiteBackground {
  background-color: #ffffff;
}
.blackBackground {
  background-color: #ffffff;
}
</style>