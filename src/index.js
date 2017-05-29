import App from './App';

if (!window.Ember) {
  import('./standaloneEntryPoint')
    .then(({ main }) => main());
}

export { App };
