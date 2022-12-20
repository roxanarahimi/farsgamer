<template>
  <div class="bg-light p-4 pb-5 rounded mb-3">
    <div @dragenter.prevent="toggleActive"
         @dragleave.prevent="toggleActive"
         @dragover.prevent
         @drop.prevent="drop($event)"
         :class="{'active-dropzone' : active}"
         class="drop-zone">
      <span class="mt-5 pt-5 text-primary"><i class="bi bi-cloud-upload"></i></span><br>
      <p class="text-primary text-center">آپلود عکس آگهی</p>
      <small>حد اکثر حجم تصویر آگهی <b>3 مگابایت</b> است</small><br>
      <label class="mt-3 rounded px-3" for="dzFile">بارگذاری</label><br>
      <input type="file" id="dzFile" @change="selectedFile($event)" class="dzFile">
      <input type="hidden" id="dzCode" :value="image_code">
    </div>
  </div>
  <div class="text-center">
    <img class=" rounded rounded-4" v-if="image" :src="image_code" style="width: 100%; height: auto;"/>
    <div v-if="image" @click.prevent="deleteMainImage" class="text-center mt-2 mb-3"><button class="btn btn-danger btn-sm py-1 px-3 ">حذف</button></div>

  </div>
</template>

<script>
import {useDropzone} from 'vue3-dropzone'
import {ref} from "vue";
import BtnPrimaryShadow from "@/components/BtnPrimaryShadow";
import CreateAd from "@/views/CreateAd";
export default {
  name: 'dropZone',
  components: {BtnPrimaryShadow, CreateAd},
  props:['img'],
  setup(_,props) {

    const image = ref();
    const image_code = ref('');
    const images = ref([]);
    const dropzoneFile = ref('');
    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };
    const drop = (e) => {
      toggleActive();
      var file = e.dataTransfer.files[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        image_code.value = reader.result;
        image.value = file;
        CreateAd.data().img = image.value;

      }
      reader.readAsDataURL(file);
    }


    const selectedFile = (e) => {
      // dropzoneFile.value = document.querySelector('.dzFile').files[0]

      var file = document.querySelector('.dzFile').files[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        // images.value.push(reader.result);
        image_code.value = reader.result;
        image.value = file;
      CreateAd.data().img = image.value


      }
      reader.readAsDataURL(file);
    }
    const deleteMainImage = ()=> {
      image.value = null;
    }
    return {
      active, toggleActive, dropzoneFile, drop, selectedFile, images, image, image_code, deleteMainImage
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