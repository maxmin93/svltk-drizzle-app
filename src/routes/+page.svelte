<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="prose">
  <div class="md:w-[80vw] prose-h1:md:text-5xl">
    <h1>
      Welcome to SvelteKit + <span class="text-warning">Drizzle ORM</span>
    </h1>
    <blockquote>
      <h4>This Data Comes from Database :</h4>
    </blockquote>
    <div class="px-10">
      <ul class="list-disc ml-4 mt-4">
        {#each data.users as user (user.id)}
          <li>{user.fullName} ({user.phone})</li>
        {/each}
      </ul>
    </div>
  </div>
</div>
<button class="btn btn-primary mt-4">Button</button>

<!--
<article class="prose">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread
    with cheese to their children, with the food earning such an iconic status
    in our culture that kids will often dress up as warm, cheesy loaf for
    Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a
    series of rabies cases springing up around the country.
  </p>
</article>
-->
