<template>
  <div class="bg-light p-4 pb-5 rounded mb-3">
    <div @dragenter.prevent="toggleActive"
         @dragleave.prevent="toggleActive"
         @dragover.prevent
         @drop.prevent="drop($event)"
         :class="{'active-dropzone' : active}"
         class="drop-zone">
      <span class="mt-5 pt-5 text-primary"><i class="bi bi-cloud-upload"></i></span><br>
      <p class="text-primary text-center">آپلود عکس های بیشتر</p>
      <small>حد اکثر حجم تصویر آگهی <b>3 مگابایت</b> است</small><br>
      <label class="mt-3 rounded px-3" for="dzFileMulti">بارگذاری</label><br>
      <input type="file" id="dzFileMulti" @change="selectedFile($event)" class="dzFileMulti">
    </div>

  </div>
  <div class="">

    <div class=" row justify-content-between text-center ">
      <div class="text-center col-4 mb-3" style="width: 140px; height: 140px" v-for="(code, index) in codes" v-if="images" :key="index" :data-index="index">
        <img  :src="code" class="img-fluid rounded rounded-4" />
        <input type="hidden" name="gallery" :value="code">

        <div class="text-center "><button @click.prevent="deleteImage(index)" class="btn btn-danger btn-sm py-1 px-3 ">حذف</button></div>
      </div>
    </div>

  </div>
</template>

<script>
import {ref} from "vue";
import BtnPrimaryShadow from "@/components/BtnPrimaryShadow";
import CreateAd from "@/views/CreateAd";
export default {
  name: 'dropZone',
  components: {BtnPrimaryShadow, CreateAd},
  props:['img'],
  setup(_,props) {
    const images = ref([]);
    const codes = ref([]);
    const dropzoneFile = ref('');
    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };
    const drop = (e) => {
      toggleActive();
      dropzoneFile.value = e.dataTransfer;

      Object.values(dropzoneFile.value.files).forEach((el)=>{
        images.value.push(el);
      })
      Object.values(e.dataTransfer.files).forEach((filee)=>{
        var reader2 = new FileReader()
        return new Promise(function (resolve, reject) {
          reader2.onload = function (event) {
            resolve(event.target.result)
            codes.value.push(reader2.result);
          }
          reader2.readAsDataURL(filee)
        })
      })
      CreateAd.data().imgs = images.value;

      localStorage.setItem('images',JSON.stringify(images.value))
      }


    const selectedFile = (e) => {

      var file = document.querySelector('.dzFileMulti').files[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        codes.value.push(reader.result);
        images.value.push(file);
        CreateAd.data().imgs = images.value
        localStorage.setItem('images',JSON.stringify(images.value))


      }
      reader.readAsDataURL(file);
    }
    const deleteImage = (i) => {
      images.value.splice(i, 1)
      codes.value.splice(i, 1)
    }
    return {
      active, toggleActive, dropzoneFile, drop, selectedFile, images, codes, deleteImage
    }
  }
}
</script>
<style scoped>
.drop-zone {
  width: 100%;
  height: 250px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0px auto;
  /*row-gap: 16px;*/
  /*border: 2px dashed #41b883;*/
  /*border: 2px dashed #7007FA;*/
  background-color: #fff;
  transition: .3s ease all;

  padding-top: 25px;
}

label {
  padding: 8px 12px;
  color: #fff;
  background-image: conic-gradient(from 30deg, #7007FA 10%, #9d56ff 120%, #7007FA 100%);
  transition: .3s ease all;
  cursor: pointer;
  margin-top: 95px !important;

}

.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: rgba(112, 7, 250, 0.7);
}

.active-dropzone label {
  background-image: conic-gradient(from 30deg, #9d56ff 10%, #7007FA 120%, #9d56ff 100%);

}

input {
  display: none;
}

.bi {
  font-size: 35px;
}
</style>