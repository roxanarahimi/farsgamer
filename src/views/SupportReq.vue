<template>
  <div class="d-flex justify-content-between">
    <h3 class=" fw-bold mb-0" style="line-height: 50px">درخواست پشتیبانی</h3>

  </div>
  <hr class="text-muted mb-5 mt-2">

  <div class="row px-3">
    <div class="col-12 p-0 m-0" v-if="true">

      <div>
        <form action="" class="mx-auto" style="max-width: 500px">
          <div class="row">
            <div class="col-lg-12 mb-3">
              <label class="mb-2" for="name">موضوع پیام خود را انتخاب کنید</label>

              <select class="form-select">
                <option>salam</option>
              </select>
            </div>
            <div class="col-lg-12 mb-3">
              <label class="mb-2" for="lastName">عنوان پیام خود را وارد کنید</label>
              <input type="text" class="form-control" id="lastName"  value=""/>
            </div>
            <div class="col-12 mb-3">
              <label class="mb-2" for="bio">درخواست پشتیبانی خود را بنویسید</label>

              <textarea class="form-control" rows="8" id="bio" placeholder="پیام خود را وارد نمایید"></textarea>
            </div>

            <div class="col-lg-12 mb-3">
              <input type="submit" class="btn btn-outline-primary" value="ارسال پیام"/>
            </div>

            <div class="col-12 mb-3" >
              <div class=" bg-light border border-primary rounded">
                <p class="mb-2 p-3">قبل از ارسال درخواست به نکات زیر توجه کنید</p>

                <ul style="list-style: decimal" class=" px-5">

                  <li>نکته</li>
                  <li>نکته</li>
                  <li>نکته</li>
                  <li>نکته</li>
                  <li>نکته</li>

                </ul>
              </div>



            </div>

          </div>
        </form>
        <div class="modal fade me-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <!--                <button type="button" class="btn btn-primary">Save changes</button>-->
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Support"
}
</script>

<style scoped>

</style>