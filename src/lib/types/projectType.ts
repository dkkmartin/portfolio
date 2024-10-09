export interface Root {
	projects: ProjectType[]
}

export interface ProjectType {
	id: number
	order: number
	name: string
	description: string
	images_url: string[]
	video_url: string
	technologies: TechnologiesType[]
	start_date: string
	end_date: string
	github_url: string
	live_url: string
	framework: string
}

export interface TechnologiesType {
	url: string
	title: string
}
