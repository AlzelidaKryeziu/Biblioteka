<template>
    <div class="book">
        <h1>Ketu mund te regjistroni liber</h1>
        <form>
            ID:<br>
            <input type="number" id="id" name="id"><br><br>
            Autori:<br>
            <input type="text" id="autori" name="autori"><br><br>
            Titulli:<br>
            <input type="text" id="titulli" name="titulli"><br><br>
            Viti:<br>
            <input type="date" id="viti" name="viti"><br><br>
        </form>
    </div>
</template>
<script>/*
export default {
    el:'#book',
    data:{
        libri:{
            id:'',
            autori:'',
            titulli:'',
            viti:''
        }
    }
}*/
</script>


<style scoped>
form{
    text-align: left;
    font-size: 18px;
}
</style>