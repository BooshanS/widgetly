import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  const { data: widgets } = await supabase.from('widgets').select('*')
  return { widgets: widgets ?? [] }
}