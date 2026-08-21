export default {
  slug: "reproducible-ml-workflow",
  category: "MLOps",
  title: "My Reproducible ML Experiment Workflow",
  excerpt: "The boring habits — config files, seeds, and logging — that saved me from countless 'it worked yesterday' moments.",
  date: "February 18, 2026",
  readTime: "5 min read",
  content: `Nothing is more frustrating than a model that worked yesterday and doesn't today, for no obvious reason. Most of the time, the cause is boring: an unset random seed, an untracked config change, or a silently different dataset version.

I now start every experiment the same way — a config file for hyperparameters, a fixed random seed, and a logging setup that records exactly what ran. It's not exciting work, but it's saved me hours of confused debugging.`,
};