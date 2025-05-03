<script lang="ts">
    import type { Widget } from '$lib/types';

    export let widget: Widget & { imageUrl: string };
</script>

<div class="widget_card">
    <div class="image_card" style="background-image: url({widget.imageUrl}); background-size: cover;">
    </div>
    <div class="text_card">
        <div class="profile_div">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#D9D9D9"/>
            </svg>
            <div class="profile_content">
                <p class="company_name">{widget.company_name}</p>
                <p class="widget_name">{widget.widget_name}</p>
            </div>
        </div>
        <div class="heart_icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001Z" fill="#444752"/>
        </svg>
        </div>
    </div>
</div>

<style>
    .widget_card {display: flex;
min-width: 282px;
max-width: 438px;
flex-direction: column;
align-items: flex-start;
gap: 14px;
flex: 1 0 0;}

.image_card {height: 249px;
align-self: stretch;
border-radius: 24px;
border: 1px solid rgba(255, 255, 255, 0.04);
background: #030611;
box-shadow: 0px 4px 9px 0px rgba(255, 255, 255, 0.02) inset;}

.text_card {display: flex;
justify-content: space-between;
align-items: center;
align-self: stretch;}

.profile_div {display: flex;
align-items: center;
gap: 12px;
flex: 1 0 0;}

.profile_div svg {
width: 40px;
height: 40px;
fill: #D9D9D9;}

/* .heart_icon {visibility: hidden;}

.heart_icon:hover {visibility: visible;} */

.profile_content {display: flex;
flex-direction: column;
align-items: flex-start;}

.company_name {color: #FFF;
    margin: 0;
font-family: Satoshi;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;}

.widget_name {color: #A7ACBE;
    margin:0;
font-family: Satoshi;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;}
</style>
