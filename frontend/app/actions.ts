'use server'

import { revalidatePath } from "next/cache";

export async function refreshDashboard() {
    console.log("Refresh dashboard data");
    revalidatePath("/");
  }
