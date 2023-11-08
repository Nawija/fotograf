import { cache } from "react";

export const revalidate = 3600;

export const getItem = cache(async (id) => {
    const item = await db.item.findUnique({ id });
    return item;
});
