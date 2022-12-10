<template>
  <div class="d-flex justify-content-between">
    <h3 class=" fw-bold mb-0" style="line-height: 50px">حسابداری</h3>
  </div>
  <hr class="text-muted mb-5 mt-2">

  <div class="row flex-row-reverse px-3">
    <div class=" col-xxl-3 p-0 m-0 px-xxl-3 mb-3">
      <div v-if="detail" class="card h-100">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-12 mb-3">
              <div class="credit-card mx-auto text-light">

                <p class="small p-2">
                  موجودی کیف پول
                </p>
                <h3 class="text-center mt-4">
                  {{ detail.total_inventory }} تومان
                </h3>
              </div>

            </div>
            <div class="col-lg-12 mb-3">
              <p>قابل برداشت</p>
              <div class=" mx-auto rounded " style="overflow: hidden; background-color: #eeeeee; ">
                <div class="d-flex w-100 h-100 py-3 px-3 " style="border-left:8px solid #00da34;  ">
                  <p class="mb-0 w-100 text-center fw-lighter"><span class="fw-bold h3">{{
                      detail.removable_inventory
                    }}</span> تومان</p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mb-3">
              <p>در حال معامله</p>
              <div class=" mx-auto rounded " style="overflow: hidden; background-color: #eeeeee;  ">
                <div class="d-flex w-100 h-100 py-3 px-3 " style="border-left:8px solid #ffbf00;  ">
                  <p class="mb-0 w-100 text-center fw-lighter"><span
                      class="fw-bold h3">{{ detail.inventory_being_traded }}</span> تومان</p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mb-3">
              <btn-primary-shadow @click="withrawRequest" class="w-100 d-none d-lg-block" data-bs-toggle="modal"
                                  data-bs-target="#exampleModal">
                برداشت وجه
              </btn-primary-shadow>
            </div>

            <div class="col-lg-12 mb-3 d-flex">
              <input type="text" class="rounded-0 rounded-end px-2" style="width: calc(100% - 120px)"
                     id="chargeAmount" placeholder="مبلغ به تومان">
              <btn-primary-shadow @click="chargeWallet" class="h-100"
                                  style="width: 135px !important; margin-right: -5px; font-size: 14px">
                شارژ کیف پول
              </btn-primary-shadow>
            </div>


          </div>
        </div>
      </div>
    </div>

    <div class=" col-xxl-9 p-0 m-0 border rounded  mb-3 d-none d-lg-block" style="min-height: 600px" v-if="true">
      <table class="table mb-0 rounded-top text-muted">
        <thead class="bg-light rounded-top">
        <tr class=" rounded-top">
          <th scope="col" class=" rounded-top">تاریخ</th>
          <th scope="col">وضعیت</th>
          <th scope="col">کد پیگیری</th>
          <th class=" rounded-top" scope="col">مبلغ</th>
        </tr>
        </thead>
        <tbody class="rounded-top">
        <tr v-for="item in acc">
          <td>{{ item.date }}</td>
          <td class="text-primary">{{ item.status_label }}</td>
          <td>{{ item.ticket_id }}</td>
          <td>{{ item.price }} تومان</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="col-lg-9 p-0 m-0 border-lg rounded  mb-3 d-lg-none" style="min-height: 600px" v-if="true">
      <div v-for="item in 3" :key="item" class="card mb-3 ">
        <div class="card-header">

          <div class="d-flex justify-content-between py-2">
            <small>تاریخ: 03-02-1401</small>
            <small>ش پیگیری: 12345678</small>

          </div>
        </div>
        <div class="card-body px-0">
          <div class="d-flex justify-content-between px-3">
            <small>وضعیت</small>
            <small class="text-primary">برداشت وجه</small>
          </div>
          <hr>
          <div class="d-flex justify-content-between px-3">
            <p class="h5">مبلغ</p>
            <p class="text-primary h5">100,000 تومان</p>
          </div>
        </div>

      </div>
    </div>
  </div>


  <div class="modal fade me-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header d-flex">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

          <p class="modal-title text-center w-100">درخواست برداشت وجه </p>

        </div>
        <div class="modal-body">
          <div class=" mx-auto rounded d-flex justify-content-between" style="overflow: hidden; background-color: #eeeeee; ">
            <small class="w-25 my-3 me-2 mt-4">قابل برداشت</small>
            <div class="d-flex w-100 h-100 py-3 px-3 w-75" style="border-left:8px solid #00da34;  ">
              <p class="mb-0 w-100 text-start fw-lighter">
                <span class="fw-bold h3">{{ detail.removable_inventory }}</span> تومان</p>
            </div>

          </div>
          <div class="mt-2">
            <label for="amount">مبلغ مورد نظر را وارد کنید</label>
            <input type="number" style="background-color: whitesmoke" @keyup="checkAmount" class="form-control border-0 py-3" name="" id="amount">
          </div>
          <div class="d-flex mt-2">
            <input type="checkbox" @click="checkAmount" class="form-check ms-2" name="" id="allAmount">
            <label for="allAmount"  >برداشت کل مبلغ قابل برداشت</label>
          </div>

          <div class="d-flex justify-content-between rounded fw-lighter text-black-50 my-2 py-3 px-2" style="background-color: whitesmoke">
            <p class="mb-0">شماره حساب</p>
            <p class="mb-0">123456789123456789</p>
          </div>


        </div>

        <div class="modal-footer border-0 justify-content-center">
          <button disabled id="submitBtn" type="button" class="btn btn-primary btn-lg px-5" data-bs-dismiss="modal">ثبت</button>
          <button type="button" class="btn btn-light btn-lg px-5" data-bs-dismiss="modal">انصراف</button>
          <!--                <button type="button" class="btn btn-primary">Save changes</button>-->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import BtnPrimaryShadow from "@/components/BtnPrimaryShadow";

export default {
  name: "Accounting",
  components: {BtnPrimaryShadow},
  data() {
    return {
      acc: {},
      detail: {},
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token'),
        }
      })
          .get('https://server.elfiro.com/api/v1/client/accounting')
          .then((response) => {
            this.acc = response.data.data.requests.records;
          }).catch((error) => {
        console.log(error)
      });
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token'),
        }
      })
          .get('https://server.elfiro.com/api/v1/client/accounting/details')
          .then((response) => {
            this.detail = response.data.data.details;
          }).catch((error) => {
        console.log(error)
      });
    },
    withrawRequest() {
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token'),
        }
      })
          .post('https://server.elfiro.com/api/v1/client/accounting', {
            price: 0,
            card: 0
          })
          .then((response) => {
            this.acc = response.data.data.requests.records;
          }).catch((error) => {
        console.log(error)
      });
    },
    chargeWallet() {
      if (document.querySelector('#chargeAmount').value < 10000) {
        alert('مبلغ شارژ باید بیش از 10,000 تومان باشد')
      } else {
        axios.create({
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token'),
          }
        })
            .post('https://server.elfiro.com/api/v1/client/accounting/charge', {
              price: document.querySelector('#chargeAmount').value,
              gateway: 'zarinpal',
              call_back_address: 'https://farsgamer.webagent.ir/accounting'
            })
            .then((res) => {
              window.location = res.data.data.gateway.link;
            })
            .catch((err) => {
              console.log(err)
            })
      }
    },
    checkAmount(){
      ( (document.getElementById('amount').value !== '' && document.getElementById('amount').value > 10000) || document.getElementById('allAmount').checked)
          ?
          document.getElementById('submitBtn').removeAttribute('disabled')
          :
          document.getElementById('submitBtn').setAttribute('disabled', 'disabled');


    }
  }
}
</script>

<style scoped>

.credit-card {
  height: 165px;
  width: 100%;
  border-radius: 8px;
  background-image: conic-gradient(from 30deg, #7007FA 10%, #9d56ff 120%, #7007FA 100%);
}
</style>