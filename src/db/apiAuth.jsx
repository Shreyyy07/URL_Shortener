import supabase from "./supabase";

export async function login({email, password}) {
    // If the function throws an error, it is wrapped in a rejected promise (Promise.reject(error)).
  const { data, error } = await supabase.auth.signInWithPassword({
    //await - wait for the promise to resolve // 
email,
password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  const {data: session, error} = await supabase.auth.getSession();
  if (!session.session) return null;

  // const {data, error} = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return session.session?.user;
}

// How They Work Together
// When an async function is called, it returns a promise.
// Inside the function, await pauses execution until the promise is resolved/rejected.
// The resolved value of the promise is returned by await.