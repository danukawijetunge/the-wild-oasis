import { PiCaretCircleDoubleRightThin } from "react-icons/pi";
import supabase from "../services/supabase";

export async function getAllCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(`${id} cabin couldn't be deleted`);
  }
}
