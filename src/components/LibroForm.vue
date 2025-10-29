<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { Libro } from '../models/libro.model';
import { useBibliotecaStore } from '../store/bibliotecta.store';

const store = useBibliotecaStore();

const libroForm = ref<Libro>({
    id: 0,
    titulo: '',
    autor: '',
    paginas: 0,
    disponible: true
})

const libroId = ref<Number>(0)

const resetForm = () => {
    libroForm.value = {
        id: 0,
        titulo: '',
        autor: '',
        paginas: 0,
        disponible: true

    }
}

const handleSubmit = () => {
    store.agregarLibro(libroForm.value)
    resetForm()
}

const handleEstado = () => {
    console.log('Cambiar estado');
    console.log(libroId.value);

    store.cambiarEstado(libroId.value);
}

</script>

<template>
    <section id="agregar-libro">

        <form @submit.prevent="handleSubmit" class="flex flex-col max-w-3xs mx-auto p-10 my-15 gap-5 border">
            <h1 class="text-center text-xl font-bold">Agregar Libro</h1>
            <input v-model="libroForm.id" type="number" placeholder="ID" required>
            <input v-model="libroForm.titulo" type="text" placeholder="Titulo del libro" required>
            <input v-model="libroForm.autor" type="text" placeholder="Autor del libro" required>
            <input v-model="libroForm.paginas" type="number" min="1" placeholder="Cant de paginas" required>
            <input type="submit" value="Agregar Libro" class="bg-cyan-200">
        </form>

        <form @submit.prevent="handleEstado" class="flex flex-col max-w-3xs mx-auto p-10 my-15 gap-5 border">
            <h1 class="text-center text-xl font-bold">Cambiar Estado</h1>
            <input v-model="libroId" type="number" placeholder="ID" required>
            <input type="submit" value="Cambiar Estado" class="bg-cyan-200">
        </form>
    </section>
</template>

<style scoped>
input {
    border: 1px solid black
}
</style>