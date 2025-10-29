import LibroForm from '../components/LibroForm.vue';
import Libros from '../components/Libros.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/libros',
			component: Libros,
			children: [{ path: 'nuevo', component: LibroForm }],
		},
	],
});

export default router;
