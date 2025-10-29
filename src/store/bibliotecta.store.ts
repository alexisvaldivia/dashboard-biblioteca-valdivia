import { defineStore } from 'pinia';
import type { Libro } from '../models/libro.model';

interface bibliotecaState {
	loading: boolean;
	data: Libro[];
	error: string | null;
}

export const useBibliotecaStore = defineStore('biblioteca', {
	state: (): bibliotecaState => ({
		loading: false,
		data: [],
		error: null,
	}),
	getters: {
		ordenarPorTitulo: (state): Libro[] => {
			return [...state.data].sort((a, b) => a.titulo.localeCompare(b.titulo));
		},
		ordenarPorAutor: (state): Libro[] => {
			return [...state.data].sort((a, b) => a.autor.localeCompare(b.autor));
		},
		orderPorPaginas: (state): Libro[] => {
			return [...state.data].sort((a) => a.paginas);
		},
	},
	actions: {
		agregarLibro(libro: Libro) {
			this.data.push(libro);
		},
		cambiarEstado(id: Number) {
			const libro = this.data.find((el) => el.id === id);
			if (libro) libro.disponible = !libro.disponible
		},
	},
});
