const { registerPlugin } = require('@scullyio/scully');

const projectURIPlugin = async (route, options) => {
  return Promise.resolve([
    { route: '/projects/spotify_history'}
  ]);
};

const validator = async conf => [];
registerPlugin('router', 'projectURIPlugin', projectURIPlugin, validator);
