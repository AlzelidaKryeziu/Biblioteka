<template>
  <div class="home">
    <h4>Online Library</h4>
    <a>This website serves as an online library where users can view the different available books.</a>
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img class="foto1" thumbnail fluid src="https://i.pinimg.com/originals/94/d8/09/94d80913693192df5f2c79b0febb85d0.jpg"></b-img>
          <b-dd-text class="teksti">Ana Karenina</b-dd-text>
        </b-col>
        <b-col>
          <b-img class="foto2" thumbnail fluid src="https://images.booksense.com/images/007/315/9780062315007.jpg"></b-img>
          <b-dd-text class="teksti">Alkemisti</b-dd-text>
        </b-col>
        <b-col>
          <b-img class="foto3" thumbnail fluid src="https://m.media-amazon.com/images/I/41cQTFV5hPL.jpg"></b-img>
          <b-dd-text class="teksti">Krim dhe Ndeshkim</b-dd-text>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style>
.foto1{
  width: 42%;
}
.foto2{
  width: 40%;
}
.foto3{
  width: 38%;
}
.teksti{
  color: white;
}
</style>