<script>
    import FeedbackCard from "../ui/feedbackCard.svelte";
    const feedbackCardContentOne = [
        {
            userName: "John Doe",
            userCompany: "Company A",
            feedback: "I love this product!"
        },
        {
            userName: "Jane Doe",
            userCompany: "Company B",
            feedback: "I'm not a fan of this product."
        },
        {
            userName: "John Doe",
            userCompany: "Company C",
            feedback: "I'm not a fan of this product."
        }
    ]
</script>
<div class="feedbackSectionContainer">
    <div class="feedbackSection">
        <div class="feedbackSectionTitle">
            <p class="testimonialTitle">Testimonials</p>
            <p class="testimonialSubtitle">What our users say</p>
        </div>
        <div class="feedbackContent">
            <div class="feedbackCardContainer">
                {#each feedbackCardContentOne as feedbackCard}
                    <FeedbackCard {...feedbackCard}/>
                {/each}
                
            </div>
            <div class="feedbackCardContainer">
                {#each feedbackCardContentOne as feedbackCard}
                    <FeedbackCard {...feedbackCard}/>
                {/each}
            </div>
            <div class="feedbackCardContainer">
                {#each feedbackCardContentOne as feedbackCard}
                    <FeedbackCard {...feedbackCard}/>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .feedbackSectionContainer {
        display: flex;
padding: 83px 0px;
align-items: flex-start;
gap: 8px;
background: #030611;}

    .feedbackSection {
        display: flex;
flex-direction: column;
align-items: center;
gap: 56px;
flex: 1 0 0;}

    
    .feedbackSectionTitle {
        display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
align-self: stretch;}

    .testimonialTitle {color: rgba(210, 230, 230, 0.50);
text-align: center;
font-family: Satoshi;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 6.4px;}

    .testimonialSubtitle {color: #FFF;
text-align: center;
font-family: Satoshi;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 122.805%; /* 58.946px */}

    .feedbackContent {
        display: flex;
min-width: 730px;
max-width: 1232px;
align-items: flex-start;
gap: 24px;
align-self: stretch;}

    
    .feedbackCardContainer {
        display: flex;
flex-direction: column;
align-items: flex-start;
gap: 24px;
flex: 1 0 0;}
</style>