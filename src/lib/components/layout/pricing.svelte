<script>
    import PricingCard from '../ui/pricingCard.svelte';
    const pricingPlans = [
      {
        title: 'Free',
        subtitle: 'Get a taste of what you will get. Completely Free. No card details. No BS.',
        price: '0',
        bullets: ['Limited access to 100+ widgets','Save upto 5 widgets'],
        buttonText: 'Join for free',
        originalPrice: '0',
        showOriginalPrice: false,
        showPerMonth: false
      },
      {
        title: 'Subscription',
        subtitle: 'Small monthly price. Cancel anytime',
        price: '12',
        bullets: ['Limited access to 100+ widgets','Save upto 10 widgets'],
        buttonText: 'Get Subscription',
        originalPrice: '$15',
      },
      {
        title: 'Lifetime Access',
        subtitle: 'One time payment. Use forever.',
        price: '24',
        bullets: ['Limited access to 100+ widgets','Save upto 20 widgets'],
        buttonText: 'Get lifetime access',
        originalPrice: '$79',
        showPerMonth: false,
        cardButtonStyle: 'border-radius: 640.434px;background: linear-gradient(105deg, #F29842 1.28%, #FF0F66 34.55%, #9100FF 93.65%);box-shadow: 0px 0.817px 1.2px 0px rgba(255, 255, 255, 0.65) inset;',
        buttonStyle:'color: #FFF;'
        
      }
    ]
</script>

<div class="pricing_container">
    <div class="pricing_title">
        <div class="title">
            <p class="top_text">PRICING</p>
            <p class="bottom_text">Access the entire collection of 4000+ widgets</p>
        </div>
        <div class="offers">
            <svg width="63" height="64" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 1000002053">
                <g id="vuesax/bold/gift">
                <g id="vuesax/bold/gift_2">
                <path id="Vector" d="M39.5 32V38C39.5 40.21 37.71 42 35.5 42H27.5C25.29 42 23.5 40.21 23.5 38V32C23.5 31.45 23.95 31 24.5 31H26.47C27.02 31 27.47 31.45 27.47 32V35.14C27.47 35.88 27.88 36.56 28.53 36.91C28.82 37.07 29.14 37.15 29.47 37.15C29.85 37.15 30.23 37.04 30.56 36.82L31.51 36.2L32.39 36.79C33 37.2 33.78 37.25 34.43 36.9C35.09 36.55 35.5 35.88 35.5 35.13V32C35.5 31.45 35.95 31 36.5 31H38.5C39.05 31 39.5 31.45 39.5 32Z" fill="#F49D3C"/>
                <path id="Vector_2" d="M41 27V28C41 29.1 40.47 30 39 30H24C22.47 30 22 29.1 22 28V27C22 25.9 22.47 25 24 25H39C40.47 25 41 25.9 41 27Z" fill="#F49D3C"/>
                <path id="Vector_3" d="M31.1398 24.9995H25.6198C25.2798 24.6295 25.2898 24.0595 25.6498 23.6995L27.0698 22.2795C27.4398 21.9095 28.0498 21.9095 28.4198 22.2795L31.1398 24.9995Z" fill="#F49D3C"/>
                <path id="Vector_4" d="M37.3701 24.9995H31.8501L34.5701 22.2795C34.9401 21.9095 35.5501 21.9095 35.9201 22.2795L37.3401 23.6995C37.7001 24.0595 37.7101 24.6295 37.3701 24.9995Z" fill="#F49D3C"/>
                <path id="Vector_5" d="M33.4699 31C34.0199 31 34.4699 31.45 34.4699 32V35.13C34.4699 35.93 33.5799 36.41 32.9199 35.96L32.0199 35.36C31.6899 35.14 31.2599 35.14 30.9199 35.36L29.9799 35.98C29.3199 36.42 28.4399 35.94 28.4399 35.15V32C28.4399 31.45 28.8899 31 29.4399 31H33.4699Z" fill="#F49D3C"/>
                </g>
                </g>
                <g id="vuesax/bold/gift_3" filter="url(#filter0_f_135_1797)">
                <g id="vuesax/bold/gift_4">
                <path id="Vector_6" d="M39.5 32V38C39.5 40.21 37.71 42 35.5 42H27.5C25.29 42 23.5 40.21 23.5 38V32C23.5 31.45 23.95 31 24.5 31H26.47C27.02 31 27.47 31.45 27.47 32V35.14C27.47 35.88 27.88 36.56 28.53 36.91C28.82 37.07 29.14 37.15 29.47 37.15C29.85 37.15 30.23 37.04 30.56 36.82L31.51 36.2L32.39 36.79C33 37.2 33.78 37.25 34.43 36.9C35.09 36.55 35.5 35.88 35.5 35.13V32C35.5 31.45 35.95 31 36.5 31H38.5C39.05 31 39.5 31.45 39.5 32Z" fill="#F49D3C"/>
                <path id="Vector_7" d="M41 27V28C41 29.1 40.47 30 39 30H24C22.47 30 22 29.1 22 28V27C22 25.9 22.47 25 24 25H39C40.47 25 41 25.9 41 27Z" fill="#F49D3C"/>
                <path id="Vector_8" d="M31.1398 24.9995H25.6198C25.2798 24.6295 25.2898 24.0595 25.6498 23.6995L27.0698 22.2795C27.4398 21.9095 28.0498 21.9095 28.4198 22.2795L31.1398 24.9995Z" fill="#F49D3C"/>
                <path id="Vector_9" d="M37.3701 24.9995H31.8501L34.5701 22.2795C34.9401 21.9095 35.5501 21.9095 35.9201 22.2795L37.3401 23.6995C37.7001 24.0595 37.7101 24.6295 37.3701 24.9995Z" fill="#F49D3C"/>
                <path id="Vector_10" d="M33.4699 31C34.0199 31 34.4699 31.45 34.4699 32V35.13C34.4699 35.93 33.5799 36.41 32.9199 35.96L32.0199 35.36C31.6899 35.14 31.2599 35.14 30.9199 35.36L29.9799 35.98C29.3199 36.42 28.4399 35.94 28.4399 35.15V32C28.4399 31.45 28.8899 31 29.4399 31H33.4699Z" fill="#F49D3C"/>
                </g>
                </g>
                </g>
                <defs>
                <filter id="filter0_f_135_1797" x="-2.4" y="-1.9" width="67.8" height="67.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="10.95" result="effect1_foregroundBlur_135_1797"/>
                </filter>
                </defs>
                </svg>
                <p>30% off for the first 200 customers (7 left)</p>
        </div>
    </div>
    <div class="pricing_cards">
      {#each pricingPlans as plan}
        <PricingCard
          title = {plan.title}
          subtitle = {plan.subtitle}
          price = {plan.price}
          bullets = {plan.bullets}
          buttonText = {plan.buttonText}
          originalPrice = {plan.originalPrice}
          showOriginalPrice = {plan.showOriginalPrice}
          showPerMonth = {plan.showPerMonth}
          cardButtonStyle = {plan.cardButtonStyle}
          buttonStyle = {plan.buttonStyle}
        />
      {/each}
    </div>
    <div class="trusted_company">
        <h4>Trusted by teams from</h4>
        <div class="trusted_company_items">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.5996 25.354C46.5996 23.7553 46.4561 22.218 46.1896 20.7422H24.9546V29.4637H37.0889C36.5662 32.2821 34.9777 34.67 32.5898 36.2688L35.9213 38.8627L39.8765 41.926C44.1399 38.0008 46.5996 32.2206 46.5996 25.354Z" fill="#47495D"/>
                <path d="M24.9539 47.388C31.0415 47.388 36.1453 45.369 39.8758 41.9255L32.5891 36.2683C30.5701 37.6211 27.9875 38.4205 24.9539 38.4205C19.0814 38.4205 14.1109 34.4543 12.3379 29.125H4.80518V34.9667C8.51516 42.3354 16.1401 47.388 24.9539 47.388Z" fill="#47495D"/>
                <path d="M12.3386 29.1243C11.8877 27.7715 11.6314 26.3265 11.6314 24.8404C11.6314 23.3544 11.8877 21.9093 12.3386 20.5565V14.7148H4.80588C3.2276 17.8568 2.40632 21.3244 2.40772 24.8404C2.40772 28.4787 3.27885 31.9222 4.80588 34.966L12.3386 29.1243Z" fill="#47495D"/>
                <path d="M24.9549 11.2624C28.2651 11.2624 31.2372 12.4 33.5739 14.6342L40.0408 8.16736C36.1361 4.52911 31.0323 2.29492 24.9549 2.29492C16.1411 2.29492 8.51614 7.34747 4.80615 14.7162L12.3389 20.5579C14.1119 15.2286 19.0824 11.2624 24.9549 11.2624Z" fill="#47495D"/>
              </svg>
              <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M53.7726 15.3242V30.0824H39.0145L24.2563 15.3242H53.7726ZM24.2563 30.0824H39.0145L53.7726 44.8405H39.0145V59.5986L24.2563 44.8405V30.0824Z" fill="#47495D"/>
              </svg>
              <svg width="65" height="40" viewBox="0 0 65 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_95_6853)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M64.4829 0.919922L43.9311 39.7069H24.6669L33.2343 23.6175H32.8381C25.8059 32.5241 15.2081 38.3661 0.15332 39.7069V23.8569C0.15332 23.8569 9.81018 23.3301 15.4557 17.5361H0.15332V0.919922H17.3376V14.6151H17.7338L24.7659 0.919922H37.7903V14.5193H38.1865L45.4168 0.919922H64.4829Z" fill="#47495D"/>
                </g>
                <defs>
                  <clipPath id="clip0_95_6853">
                    <rect width="64.3295" height="38.7869" fill="white" transform="translate(0.15332 0.919922)"/>
                  </clipPath>
                </defs>
              </svg>
              <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.2457 28.7806C53.84 30.8841 51.7365 34.4902 51.7365 38.4969C51.7365 43.0044 54.441 47.1112 58.5479 48.8141C57.7465 51.4184 56.5445 53.8224 55.042 56.0261C52.8383 59.1313 50.5345 62.3366 47.1288 62.3366C43.7231 62.3366 42.7215 60.3333 38.7148 60.3333C34.8083 60.3333 33.4059 62.4368 30.2006 62.4368C26.9952 62.4368 24.7916 59.5319 22.2874 55.9259C18.9819 50.9176 17.0787 45.1079 16.9785 38.9977C16.9785 29.0811 23.3892 23.7723 29.7999 23.7723C33.2056 23.7723 36.0103 25.976 38.1138 25.976C40.1171 25.976 43.3225 23.6721 47.1288 23.6721C51.1355 23.572 54.9418 25.4751 57.2457 28.7806ZM45.3258 19.4651C47.0286 17.4618 47.9302 14.9576 48.0303 12.3532C48.0303 12.0527 48.0303 11.6521 47.9302 11.3516C45.0253 11.6521 42.3208 13.0544 40.4176 15.2581C38.7148 17.1613 37.7131 19.5653 37.6129 22.1696C37.6129 22.4701 37.6129 22.7706 37.7131 23.0711C37.9134 23.0711 38.2139 23.1713 38.4143 23.1713C41.1188 22.9709 43.623 21.5686 45.3258 19.4651Z" fill="#47495D"/>
              </svg>
              <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.8921 15.1367H13.1387V59.9862L31.8921 15.1367Z" fill="#47495D"/>
                <path d="M45.0869 15.1367H63.8159V59.9862L45.0869 15.1367Z" fill="#47495D"/>
                <path d="M38.4898 31.668L50.426 59.9875H42.5947L39.0273 50.9712H30.292L38.4898 31.668Z" fill="#47495D"/>
              </svg>
              <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M73.3665 26.4883L22.1661 47.4956C17.9034 49.2578 14.3113 50.1389 11.4375 50.1389C8.18063 50.1389 5.83375 49.0259 4.34898 46.7999C2.48106 43.9248 3.29528 39.3338 6.50429 34.4646C8.42011 31.6358 10.8628 29.0388 13.2576 26.5347C12.6828 27.4158 7.74957 35.392 13.1618 39.1483C14.2155 39.8903 15.7481 40.2613 17.6161 40.2613C19.1008 40.2613 20.8251 40.0294 22.7409 39.5657L73.3665 26.4883Z" fill="#47495D"/>
              </svg>
              <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.0829 56.5833C54.5749 56.1898 54.9684 55.7962 55.3619 55.3043C65.0038 45.6624 65.0038 30.1174 55.3619 20.4755C45.7201 10.8337 30.175 10.8337 20.5332 20.4755C20.1396 20.9675 19.7461 21.361 19.3525 21.8529L54.0829 56.5833Z" fill="#47495D"/>
                <path d="M51.1312 58.748L17.1879 24.8047C16.4992 25.8869 15.9089 26.9692 15.417 28.1498L47.7861 60.5189C48.9667 60.027 50.049 59.4367 51.1312 58.748Z" fill="#47495D"/>
                <path d="M44.0474 61.7981L14.1379 31.8887C13.7444 33.3645 13.5476 34.8403 13.4492 36.3161L39.62 62.4868C41.0958 62.3884 42.5716 62.1917 44.0474 61.7981Z" fill="#47495D"/>
                <path d="M34.2083 62.2893L13.6455 41.7266C14.4326 46.7443 16.6955 51.4668 20.5326 55.4023C24.468 59.1409 29.2889 61.5022 34.2083 62.2893Z" fill="#47495D"/>
              </svg>
            
        </div>
    </div>
</div>

<style>
    .pricing_container {
      display: flex;
      width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 56px;
background: #030611;}

    .pricing_title {display: flex;
width: 612px;
flex-direction: column;
align-items: center;
gap: 24px;}

    .pricing_cards {display: flex;
height: 568px;
min-width: 838px;
max-width: 1232px;
align-items: flex-start;
gap: 12px;
align-self: stretch;}

    .title {display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
align-self: stretch;}

    .top_text {align-self: stretch;
        color: rgba(210, 230, 230, 0.50);
text-align: center;
font-family: Satoshi;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
letter-spacing: 6.4px;}

    .bottom_text {align-self: stretch;
        color: #FFF;
text-align: center;
font-family: Satoshi;
font-size: 48px;
font-style: normal;
font-weight: 700;
margin: 0;
line-height: 122.805%; /* 58.946px */}

    .offers {display: flex;
justify-content: center;
align-items: center;
gap: 8px;
align-self: stretch;}



    .offers p {color: #A7ACBE;
text-align: center;
font-family: Satoshi;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;}

    .trusted_company {display: flex;
flex-direction: column;
align-items: center;
gap: 12px;}

    .trusted_company h4 {color: #A7ACBE;
font-family: Satoshi;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;}

</style>