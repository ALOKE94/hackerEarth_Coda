<template>
  <v-card
    max-width="200"
   
    raised
    class="ma-2 pa-0 container"
    style="border-radius: 16px;"
  >


  
    <v-img class="" :src="resultData.image"></v-img>
    <div class="top-right rectangle" style="background-color:#000000">
      <div style="color:#ffffff">{{resultData.category}}</div>
    </div>

    <v-col
      style="background-image: linear-gradient( rgba(255,0,0,0) 0%, #000000 30%);"
      class="pa-3 cardContent"
    >
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
    </v-col>
  </v-card>
</template>

<script>
export default {
  name: "FoodCard",

  props: {
    resultData: {},
  },
};
</script>
<style scoped>
.top-right {
  position: absolute;
  top: 0px;
  right: 0px;
}

.rectangle {
  height: 30px;
  width: 150px;
  border-radius: 0px 10px 0px 10px;
  text-align: center;
}
.cardContent{
position: relative;
}
.container {
  position: relative;
}
.container:hover {
}
.whiteBackground {
  background-color: #ffffff;
}
.blackBackground {
  background-color: #ffffff;
}
</style>