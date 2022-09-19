<template>
 <div v-if="selectedChat">
   <div class="border-bottom pt-3">
     <div class="d-flex w-100 h-100 py-3 px-3 inner">
       <img :src="selectedChat.user2?.profile_image" style="width: 50px; height: 50px; border-radius: 50%">
       <div>
         <p class="mb-0 px-2 text-muted">{{  selectedChat.user2?.user_name }}</p>
       </div>

     </div>
   </div>
   <div class="chat row p-5 pt-0 m-0 " style="">

     <div v-if="chats.length" class="d-flex justify-content-center">
       <div class="col-4 mt-3 p-3 bg-light border border-primary rounded mb-3" style="background-color: lightgrey !important">
         <p>قوانین چت</p>
         <p>1.</p>
         <p>2.</p>
         <p>3.</p>
         <p>4.</p>
       </div>
     </div>
     <hr v-if="chats.length" class="border-primary my-5">
     <div v-for="item in chats" class="w-100">
       <div v-if="item.sender_id === user1" class="myMsg py-1">
         <p class="m-3 mx-4">{{ item.content }}</p>
       </div>
       <div v-if="item.sender_id === user2" class="theirMsg">
         <p class="m-3 mx-4">{{ item.content }}</p>
       </div>
     </div>
   </div>
   <div class="border-top d-flex " style="background-color: whitesmoke; ">
    <span @click="sendMessage(groupId)" style="width: 50px; font-size: 30px;margin-top: 25px; text-align: left"><i
        class="bi bi-send text-primary"></i></span>
     <input @keyup="messageInput($event)" type="text" id="message" class="form-control bg-white  m-3" style="width: calc(100% - 100px)">
     <span style="width: 50px; font-size: 30px;margin-top: 25px; text-align: right"><i
         class="bi bi-paperclip text-primary"></i></span>
   </div>
 </div>
  <div v-else>

  </div>
</template>

<script>
import BottomBar from "@/components/BottomBar";
export default {
  name: "Chat",
  components: {BottomBar},
  data(){
    return{
      selectedChat: {},
      groupId: localStorage.getItem('chat_g_id'),
      chats: [],
      user1:0,
      user2:0
    }
  },
  mounted() {

    console.log(localStorage.getItem('chat_g_id'));

    if (localStorage.getItem('chat_g_id')){
      this.getMessages(localStorage.getItem('chat_g_id'));

    }
    document.querySelector('#page_content').style.padding = '0'
    document.querySelector('#page_content').style.margin = '0'
    document.querySelector('#page_content').style.width = '100%'
    document.querySelector('#app').style.backgroundColor = 'whitesmoke'
  },
  unmounted() {
    document.querySelector('#app').style.backgroundColor = 'white'
    document.querySelector('#page_content').style.width = 'calc(100% - 300px - 5rem)'

  },
  methods:{
    getMessages(groupId){
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      })
          .get('https://server.elfiro.com/api/v1/client/chat/list/'+groupId)
          .then((response)=>{
            console.log('chats',response.data.data.group.record.chats)
            this.chats = response.data.data.group.record.chats;
            this.user1 = response.data.data.group.record.user1.id;
            this.user2 = response.data.data.group.record.user2.id;
            this.selectedChat = response.data.data.group.record;
          })
          .catch((error)=>{  console.log(error)  });

    },
    messageInput(e){
      if (e.key == 'Enter'){
        this.sendMessage(this.groupId);
      }
    },
    sendMessage(groupId){
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      })
          .post('https://server.elfiro.com/api/v1/client/chat/list/'+groupId,{
            message: document.querySelector('#message').value,
          })
          .then((response)=>{

            document.querySelector('#message').value = '';
            this.getMessages(groupId);
          })
          .catch((error)=>{  console.log(error)  });

    }
  }
}
</script>

<style scoped>
/*#page_content {*/
/*  width: 100% !important;*/
/*}*/
.myMsg {
  background-color: white;
  border-radius: 30px 0 30px 30px;
  max-width: 300px;
  margin-bottom: 10px;
}

.theirMsg {
  background-color: lightgrey;
  border-radius: 0 30px 30px 30px;
  max-width: 300px;
  float: left !important;
  margin-bottom: 10px;

}

.chat {
  background-color: whitesmoke;
  height: calc(100vh - 240px);
  overflow-y: scroll;
  margin-right: 1px;
  margin-left: 1px
}

@media (max-width: 760px) {
  .chat {
    height: calc(100vh - 300px);
  }
}
</style>