<script lang="ts">
    import type {PageData} from './$types'
    export let data:PageData
</script>
<h1>All Widgets</h1>
<h1>{data.user}</h1>
<ul>
  {#each data.widgets as widget}
    <li>
      <strong>{widget.name}</strong> from {widget.company_name} <br>
      Tag: {widget.tag} <br>
      Created at: {widget.created_at}
      <!-- Add more fields as needed -->
    </li>
  {/each}
</ul>
<pre>{JSON.stringify(data.user, null, 2)}</pre>