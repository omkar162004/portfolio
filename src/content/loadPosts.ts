const modules = import.meta.glob("./posts/*.ts", { eager: true });

export const posts = Object.values(modules).map(
  (mod: any) => mod.default
);