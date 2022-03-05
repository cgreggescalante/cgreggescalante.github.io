import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "cgreggescalante-github-io",
  // add spsModulePath when using de Scully Platform Server,
  outDir: './docs',
  routes: {},
  extraRoutes: ['/projects/spotify_history/spotify_history']
};
