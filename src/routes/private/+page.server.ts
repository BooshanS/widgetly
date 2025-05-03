import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  // Fetch all columns from the widgets table
  const { data: widgets, error } = await supabase.from('widgets').select('*')
  if (error) {
    // Handle error as needed
    console.error(error)
    return { widgets: [] }
  }
  return { widgets: widgets ?? [] }
}