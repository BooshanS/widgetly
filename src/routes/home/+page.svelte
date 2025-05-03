<script lang="ts">
    import AuthForm from '$lib/components/auth/AuthForm.svelte';
    import { FeedbackSection } from '$lib/components/layout';
    import Pricing from '$lib/components/layout/pricing.svelte';
</script>

<div class="landing-page">
    <header class="hero">
        <h1>Welcome to Our Platform</h1>
        <p>Discover amazing widgets and tools for your business</p>
    </header>

    <main>
        <section class="auth-section">
            <AuthForm showSignup={true} />
        </section>

        <section class="features">
            <h2>Key Features</h2>
            <!-- Add your features content here -->
        </section>

        <Pricing />
        <FeedbackSection />
    </main>
</div>

<style>
    .landing-page {
        min-height: 100vh;
        background: var(--dark-200, #11121F);
        color: #ffffff;
    }

    .hero {
        text-align: center;
        padding: 4rem 2rem;
        background: linear-gradient(105deg, #F29842 1.28%, #FF0F66 34.55%, #9100FF 93.65%);
    }

    .hero h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .hero p {
        font-size: 1.5rem;
        opacity: 0.9;
    }

    main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .auth-section {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
    }

    .features {
        text-align: center;
        margin: 4rem 0;
    }

    .features h2 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
</style>
