const modules = import.meta.glob("./posts/*.tsx", { eager: true });

export const posts = Object.values(modules).map((mod: any) => ({
  ...mod.meta,
  Component: mod.default,
}));