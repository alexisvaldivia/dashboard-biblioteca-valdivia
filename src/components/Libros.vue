<script setup lang="ts">
import { useBibliotecaStore } from '../store/bibliotecta.store';
import { RouterView } from 'vue-router';
import { computed, ref } from 'vue'

const store = useBibliotecaStore();

const ordenarPor = ref<String>('titulo');

const libros = computed(() => {
    switch (ordenarPor.value) {
        case 'titulo':
            return store.ordenarPorTitulo;
        case 'autor':
            return store.ordenarPorAutor;
        case 'paginas':
            return store.orderPorPaginas
    }

})

const librosPorTitulo = () => {
    console.log('ordenar por autor');

    ordenarPor.value = 'titulo';
}

const librosPorAutor = () => {
    console.log('ordenar por autor');

    ordenarPor.value = 'autor';
}

const librosPorPaginas = () => {
    console.log('ordenar por paginas');
    ordenarPor.value = 'paginas'
}
</script>

<template>
    <section id="libros">
        <div class="bg-amber-100">
            <button @click="librosPorAutor">Listar por Autor</button>
            <button @click="librosPorPaginas">Listar por Paginas</button>
            <button @click="librosPorTitulo">Listar por Titulo</button>
        </div>
        <h1>Lista de Libros</h1>
        <ul>
            <li v-for="libro in libros" :key="libro.id"
                :class="{ 'libro-disponible': libro.disponible, 'libro-no-disponible': !libro.disponible }">
                ID: {{ libro.id }} | Titulo: {{ libro.titulo }} | Autor: {{ libro.autor }} | Paginas: {{ libro.paginas
                }}
            </li>
        </ul>
    </section>
    <RouterView />
</template>

<style scoped>
.libro-disponible {
    background-color: aqua;
}

.libro-no-disponible {
    background-color: rgb(234, 255, 255);
}
</style>