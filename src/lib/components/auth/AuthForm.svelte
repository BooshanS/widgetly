<script lang="ts">
  export let redirectTo: string = '/';
</script>

<form method="POST" action="?/login">
  <label>
    Email
    <input name="email" type="email" />
  </label>
  <label>
    Password
    <input name="password" type="password" />
  </label>
  <input type="hidden" name="redirectTo" value={redirectTo} />
  <button>Login</button>
  <button formaction="?/signup">Sign up</button>
</form> 