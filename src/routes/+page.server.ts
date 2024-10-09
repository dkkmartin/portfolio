import { supabase } from '$lib/db'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	const { data: projects, error } = await supabase.from('projects').select('*')

	if (error) {
		console.error('Error fetching projects:', error)
		return { projects: [], error: error.message }
	}

	return { projects }
}) satisfies PageServerLoad
