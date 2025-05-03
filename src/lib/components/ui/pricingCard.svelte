<script>
    export let title
    export let subtitle
    export let price
    export let bullets
    export let buttonText
    export let originalPrice = '0'
    export let showOriginalPrice = true
    export let showPerMonth = true
    export let cardButtonStyle = ''
    export let buttonStyle = ''
</script>
<div class="card_container">
    <div class="card_content_container">
        <div class="card_content">
            <div class="card_description">
                <div class="card_title">
                    <p class="title_text">{title}</p>
                    <p class="subtitle_text">{subtitle}</p>
                </div>
                <div class="card_price">
                    {#if showOriginalPrice}
                        <p class="original_price">{originalPrice}</p>
                    {/if}
                    <p class="price_text">${price}</p>
                    {#if showPerMonth}
                        <p class ="per_month">/month</p>
                    {/if}
                </div>
            </div>
            <div class="card_bullets">
                {#each bullets as bullet}
                    <div class="bullet">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#5A5C7C"/>
                            <path d="M9 12.69L10.61 14.3L14.91 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="bullet_text">{bullet}</p>
                    </div>  
                {/each}
            </div>
        </div>
        <a href="/" class="card_button" style={cardButtonStyle}>
            <p style={buttonStyle}>{buttonText}</p>
        </a>
    </div>
</div>

<style>
    .card_container {display: flex;
padding: 36px 24px 28px 24px;
flex-direction: column;
align-items: flex-start;
gap: 8px;
flex: 1 0 0;
align-self: stretch;
border-radius: 32px;
background: #1B1C2C;}

    .card_content_container {display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
flex: 1 0 0;
align-self: stretch;}

    .card_content {display: flex;
flex-direction: column;
align-items: flex-start;
gap: 56px;
align-self: stretch;}

    .card_description {display: flex;
flex-direction: column;
align-items: flex-start;
gap: 32px;
align-self: stretch;}

    .card_title{
        display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
align-self: stretch;
height: 106px;
    }
    .title_text{
        color: #FFF;
font-family: Satoshi;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
    }
    .subtitle_text{
        align-self: stretch;
        color: #A7ACBE;
font-family: Satoshi;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
    }
    .card_price {
        display: flex;
justify-content: center;
align-items: flex-end;
gap: 12px;
align-self: stretch;}

    .price_text {
        width: 63px;
height: 56px;
color: #FFF;
margin: 0;
font-family: Satoshi;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;}

    .card_bullets{
        display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
align-self: stretch;
    }
    .bullet{
        display: flex;
align-items: center;
gap: 12px;
align-self: stretch;
    }
    .bullet_text{flex: 1 0 0;
        color: #A7ACBE;
font-family: Satoshi;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;}
    .card_button{
        display: flex;
        text-decoration: none;
padding: 11px 40px 13px 39px;
justify-content: center;
align-items: center;
align-self: stretch;
border-radius: 55px;
background: #FFF;
    }
    .card_button p{
        text-decoration: none;
        text-decoration: none;
        color: #0C1212;
text-align: center;
font-family: Satoshi;
margin:0;
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.4px;}
.original_price{
width: 38px;
height: 30px;
margin:0;
color: #A7ACBE;
font-family: Satoshi;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration:line-through;}
    .per_month{
        color: #A7ACBE;
font-family: Satoshi;
margin: 0;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;}
</style>

