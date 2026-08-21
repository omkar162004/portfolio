const modules = import.meta.glob("./projects/*.ts", { eager: true });

export const projects = Object.values(modules).map(
  (mod: any) => mod.default
);