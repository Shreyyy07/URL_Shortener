import supabase from "./supabase";

export async function getClicksForUrls(urlIds) {
    const {data, error} = await supabase.from("clicks").select("*").in("url_id", urlIds);
  
    // const {data, error} = await supabase.auth.getUser();
    if (error) {
        console.error(error.message);
        throw new Error("Unable to load clicks");
    }
    return data;
  }
