import { writable } from 'svelte/store'

export const activeSection = writable<string | null>(null)

console.log(activeSection.subscribe((value) => console.log(value)))
