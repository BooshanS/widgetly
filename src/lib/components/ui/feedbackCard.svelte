<script>
    export let userName;
    export let userCompany;
    export let feedback;
</script>
<div class="feedbackCardContainer">
    <div class="feedbackCard">
        <div class="userInfoContainer">
            <svg width="53" height="50" viewBox="0 0 53 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#D9D9D9"/>
                <rect x="30" y="27" width="22" height="22" rx="9" fill="#D9D9D9" stroke="#11121F" stroke-width="2"/>
              </svg>
            <div class="userInfo">
                <p class="userName">{userName}</p>
                <p class="userCompany">{userCompany}</p>
            </div>
        </div>
        <p class="feedback">{feedback}</p>
    </div>
</div>

<style>
    .feedbackCardContainer {
        display: flex;
padding: 24px;
flex-direction: column;
align-items: flex-start;
gap: 8px;
align-self: stretch;
border-radius: 32px;
background: #11121F;}

    .feedbackCard {
        display: flex;
flex-direction: column;
align-items: flex-start;
gap: 29px;
align-self: stretch;}

    .userInfoContainer {
        display: flex;
align-items: center;
gap: 11px;
align-self: stretch;
    }

    .userInfo{
        display: flex;
flex-direction: column;
align-items: flex-start;}

    .userName {color: #FFF;
font-family: Satoshi;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;}

    .userCompany {
        color: #A7ACBE;
font-family: Satoshi;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;}

    .feedback {align-self: stretch;
        color: #A7ACBE;
font-family: Satoshi;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 175%; /* 28px */}
</style>

