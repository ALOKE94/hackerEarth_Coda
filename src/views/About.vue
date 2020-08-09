<template>
  <div class="about pa-5">
    <div class="topright">
      <img src="../assets/images/Illustration2.png" width="180px" height="150px" />
    </div>
    <div class="bottomleft">
      <img src="../assets/images/Illustration1.png" width="180px" height="150px" />
    </div>

    <div class="bottomright">
      <img src="../assets/images/Illustration4.png" width="180px" height="150px" />
    </div>

    <div class="rightmiddle">
      <img src="../assets/images/Illustration5.png" width="50px" height="50px" />
    </div>
    <v-row no-gutters align="center" style="padding-top:50px;margin-bottom:50px">
      <img src="../assets/Icons/Icon feather-search.png" width="20px" height="20px" />Search your recepie here
    </v-row>
    <v-btn>
      <v-icon>mdi-arrow_back</v-icon>
    </v-btn>
    <v-row>
      <v-col cols="6">
        <div>
          <img :src="$route.query.image" width="350px" height="250px" />
        </div>
        <div>
          <div class="py-3">
            <strong>Ingredients :</strong>
          </div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus dolorem veritatis ab nihil officiis quam quidem, quis ipsam repellat placeat recusandae, blanditiis minus, ea ex neque cupiditate tempora nemo?</div>
        </div>
        <div>
          <div class="py-3">
            <strong>How to prepare :</strong>
          </div>
          <div
            class="py-3"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus eius minima aspernatur molestiae quibusdam, saepe, sapiente velit impedit eum officiis qui illum doloribus soluta fuga ipsa. Harum, cumque suscipit!</div>
          <div
            class="pb-3"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, corrupti quod, fuga eveniet possimus ab quasi, facere mollitia est magni eos quo corporis? In accusamus labore adipisci, reiciendis temporibus natus.</div>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum deserunt quam officiis, voluptate laboriosam molestiae et ipsum, suscipit debitis enim, dolorem eius porro? Dicta sunt dolorem necessitatibus aperiam, natus iste.</div>
        </div>
      </v-col>
      <v-col cols="6" style="text-align:end">
        <div style="font-size:10px">RECEPIE</div>
        <div style="font-size:40px" class="py-2">
          <strong>{{$route.query.name}}</strong>
        </div>
        <v-row style="align:end" class="py-2">
          <v-spacer></v-spacer>
          <div
            style="height:20px;width:30px;background:#000000;text-align:center;margin-right:110px"
          >
            <span style="color:#ffffff;font-size:15px">
              4/5
              <span class="rating">
                <span class="starChecked mx-1">☆</span>
                <span class="starChecked mx-1">☆</span>
                <span class="starChecked mx-1">☆</span>
                <span class="starChecked mx-1">☆</span>
                <span class="starChecked mx-1">☆</span>
              </span>
            </span>
          </div>
        </v-row>

        <div>
          description
          <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem culpa vero porro sint delectus, voluptatem a nobis assumenda iusto suscipit laboriosam repellat alias autem. Quibusdam quam possimus harum itaque consequuntur!</div>
        </div>
        <div>
          <v-row>
            <v-avatar x-large class="px-2" color="#000000">
              <div style="color:#ffffff;fint-size:15px">8</div>
              <div style="color:#ffffff">Ingredients</div>
            </v-avatar>
            <v-avatar large class="px-2" color="#000000"></v-avatar>
            <v-avatar large class="px-2" color="#000000"></v-avatar>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-textarea filled auto-grow label="Comment" rows="4" row-height="30" shaped></v-textarea>
  </div>
</template>







<script>
export default {};
</script>

<style scoped>
.topright {
  position: fixed;
  top: -50px;
  right: -30px;
}
.rating {
  position: absolute;
}
.starChecked {
  color: black;
}
.bottomleft {
  position: fixed;
  bottom: -50px;
  left: -30px;
}

.middle {
  position: fixed;
  bottom: 100px;
  left: 100px;
}
.rightmiddle {
  position: fixed;
  bottom: 100px;
  right: 100px;
}
.bottomright {
  position: fixed;
  bottom: -40px;
  right: -25px;
}
</style>
