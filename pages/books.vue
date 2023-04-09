<script setup lang="ts">
const config = useRuntimeConfig();

const { data: books } = await useFetch<{
  books: { id: number; title: string; author: string }[];
}>("/api/books", {
  baseURL: config.public.baseUrl,
});
</script>

<template>
  <main>
    <h1>Books</h1>
    <ul>
      <li v-for="{ id, title, author } of books?.books" :key="id">
        {{ title }} ({{ author }})
      </li>
    </ul>
  </main>
</template>
