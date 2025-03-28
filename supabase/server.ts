import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// const globalForSupabase = globalThis as unknown as { supabase: Awaited<ReturnType<typeof createClient>>}
// export const supabase = globalForSupabase.supabase || await createClient();
// if (process.env.NODE_ENV !== 'production') globalForSupabase.supabase = supabase

export async function createClient() {
  const cookieStore = await cookies()

  const client = createServerClient(
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    process.env.SUPABASE_URL!,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            for (const { name, value, options } of cookiesToSet) {
              cookieStore.set(name, value, options)
            }
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
  
  return client;
}

export async function uploadToStorage(file: File, bucket: string) {
  const supabase = await createClient();

  const path = new Date().toISOString().replace(/[-:.]/g, '');
  const filename = `${crypto.randomUUID()}.${file.name.split(".").pop()?.toLowerCase()}`;
  const { data,  error } = await supabase.storage
    .from(bucket)
    .upload(`${path}/${filename}`, file);

  if (error) throw error;

  const publicUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/${data.fullPath}`
  return publicUrl;
}

function getStorageRelativeUrl(bucket: string, path: string) {
  return path.replace(`${process.env.SUPABASE_URL}/storage/v1/object/public/${bucket}/`, '');
}

export async function deleteFormStorage(bucket: string, path: string){
  const supabase = await createClient();
  const url = getStorageRelativeUrl(bucket, path);
  const {data, error} = await supabase.storage.from(bucket).remove([url]);
  if(error) throw Error(error.message);
}