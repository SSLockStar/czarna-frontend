<template>
  <div class="czarna-container">
    <div class="grid grid-cols-12">
      <div class="col-start-2 col-span-10">
        <section class="top-section pt-9 pb-40">
          <button class="px-4 py-2 border-2 border-gray-200 rounded-lg font-medium bg-transparent flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="16" class="mr-2">
              <path
                fill="currentColor"
                d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"
              />
            </svg>
            Powrót do listy
          </button>
        </section>
      </div>
    </div>
  </div>
  <div class="czarna-container">
    <div class="grid grid-cols-12">
      <div class="col-start-1 col-span-12 md:col-start-2 md:col-span-10">
        <section class="debt_card">
          <span class="tab rounded-tr-lg rounded-tl-lg bg-white py-4 px-9 font-medium debt_title">
            Karta długu
          </span>
          <div class="pb-10 pt-10 bg-white debt-card-body">
            <div class="grid grid-cols-12 pl-10">
                <div class="col-span-12 md:col-span-7 md:right-divider">
                  <div class="info-descr  text-id">
                    ID:928329
                  </div>
                  <div class="info-value">
                    Jan Marian Kowalski
                  </div>
                  <div class="info-add flex flex-wrap">
                    <div>
                      <span class="info-add-title">Data urodzenia:</span>  
                      <span class="info-add-value pr-2 right-divider mr-2">12.09.1987</span>  
                    </div>
                    <div>
                    <span class="info-add-title">PESEL:</span>  
                    <span class="info-add-value">87091298282</span>  
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-5 md:pl-10 mt-4 md:mt-0">
                  <div class="info-descr">
                    Wartość całkowita długu
                  </div>
                  <div class="info-value">
                    21 928,00 zł
                  </div>
                  <div class="info-add flex items-center">
                    <button class="info-add-btn px-4 py-2 border-2 border-gray-200 rounded-lg font-medium bg-transparent flex items-center text-gray-400">                      
                      Zgłoś sprzeciw
                    </button>
                    <button class="info-help-btn bg-transparent flex items-center text-gray-400 ml-2">                      
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <g id="Info_Square" data-name="Info Square" transform="translate(0.75 0.75)">
                          <path id="Stroke_1" data-name="Stroke 1" d="M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z" fill="none" stroke="#c4c7d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <path id="Stroke_3" data-name="Stroke 3" d="M.5,4V0" transform="translate(8.745 9.25)" fill="none" stroke="#c4c7d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <path id="Stroke_2" data-name="Stroke 2" d="M.5.5H.5" transform="translate(8.745 4.954)" fill="none" stroke="#c4c7d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
            </div>
          </div>
          
        </section>
      </div>
    </div>
    <div class="grid grid-cols-12">
        <div class="col-start-2 col-span-10 md:col-start-3 md:col-span-8">
          <section class="debt_card_detail px-10 md:px-28 py-10 mb-10">
              <div class="detail_title">
                Szczegóły długu
              </div>
              <div>
                <div class="detail_item flex flex-wrap justify-between">
                  <div class="detail-item-title">
                      Miejsce długu:
                  </div>
                  <div class="detail-item-value">
                      Ul. Wojska Polskiego 43/12, 60-00 Poznań
                  </div>
                </div>
                <div class="detail_item flex flex-wrap justify-between">
                  <div class="detail-item-title">
                      Status długu:
                  </div>
                  <div class="detail-item-value">
                      Dług wciąż rośnie
                  </div>
                </div>
                <div class="detail_item flex flex-wrap justify-between">
                  <div class="detail-item-title">
                      Oferta kupna:
                  </div>
                  <div class="detail-item-value">
                      Dla każdego
                  </div>
                </div>
                <div class="detail_item flex flex-wrap justify-between">
                  <div class="detail-item-title">
                      Forma wystawienia:
                  </div>
                  <div class="detail-item-value">
                      Ogłoszenie
                  </div>
                </div>
                <div class="detail_item flex flex-wrap justify-between">
                  <div class="detail-item-title">
                      Wartość całkowita
                  </div>
                  <div class="detail-item-value">
                      21 928,00 zł
                  </div>
                </div>
              </div>
              <div class="detail_footer flex  flex-wrap justify-between items-end py-7">
                <div>
                    <div class="footer-title">
                      Cena sprzedaży
                    </div>
                    <div class="total-value">
                      21 928,00 zł
                    </div>
                </div>
                <div class="flex mt-5 md:mt-0">
                  <button class="footer-action-btn px-4 py-2 border-2 border-gray-200 rounded-lg font-medium bg-transparent flex items-center text-gray-400">                      
                      Negocjuj cenę
                    </button>
                    <button class="footer-action-btn active ml-3 px-4 py-2 border-2 border-gray-200 rounded-lg font-medium bg-transparent flex items-center text-gray-400">                      
                      Kup dług
                    </button>
                </div>
              </div>
          </section>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DebtView'
}
</script>

<style scoped>
  .czarna-container:first-child {
    background: #EFF3F7 0% 0% no-repeat padding-box;
  }

  .debt_card{
    margin-top: -90px;
  }
  .debt_card .debt_title {
    color: #14161F;
    font-size: 1.5rem;
    font-weight: 2.25rem;
    box-shadow: 0 -19px 19px 2px #cacbcd29;
  }

  .debt_card  .debt-card-body{
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    box-shadow: 0px 3px 28px #525F7A29;
  }

  .debt_card .info-descr{
    font: 16px/24px;
    letter-spacing: 0px;
  }

  .debt_card .info-descr.text-id{
    background: #EFF3F7 0% 0% no-repeat padding-box;
    border-radius: 4px;
    padding: 0 7px;
    width: 96px;
  }

  .debt_card .info-value{
    color: #14161F;
    font-size: 40px;
  }

  .debt_card .info-add .info-add-title{
    color: #525F7A;
    font-size: 16px;
  }
  .debt_card .info-add .info-add-value{    
    color: #14161F;
    font-size: 16px;
  }

  .debt_card .info-add .info-add-btn{    
    text-align: left;
    font: 16px/20px Muli;
    letter-spacing: 0px;
    color: #8A8FA8;
    opacity: 1;
  }
  .debt_card .info-add .info-help-btn{    
    width: 19px;
    height: 19px;
  }


  .debt_card_detail{
    background: #EFF3F7 0% 0% no-repeat padding-box;
  }

  .debt_card_detail .detail_title{
    font: normal normal 600 24px/36px Muli;
    letter-spacing: 0px;
    color: #14161F;
  }
  .debt_card_detail .detail_item{
    border-bottom: 1px solid #d4d7e1;
    padding: 10px 0px;
  }

  .debt_card_detail .detail_item .detail-item-title{
    color: #525F7A;
  }

  .debt_card_detail .detail_item .detail-item-value{
    color: #14161F;
  }

  .detail_footer .footer-title{
    font: normal normal normal 16px/36px Muli;
    letter-spacing: 0px;
    color: #525F7A;
  }

  .detail_footer .total-value{
    font: normal normal 600 42px/36px Muli;
    letter-spacing: 0px;
    color: #14161F;
  }

  .detail_footer .footer-action-btn {
    font: normal normal 16px/20px Muli;
    letter-spacing: 0px;
    color: #8A8FA8;
  }

  .detail_footer .footer-action-btn.active{
    background: #E7334B 0% 0% no-repeat padding-box;
    color:white;
  } 

  .right-divider{
    border-right: 1px solid #e7e9ec;
  }
</style>