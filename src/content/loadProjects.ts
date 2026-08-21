const modules = import.meta.glob("./projects/*.tsx", { eager: true });

export const projects = Object.values(modules).map((mod: any) => ({
  ...mod.meta,
  Component: mod.default,
}));