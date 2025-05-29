module.exports = {
  packagerConfig: {
    asar: true,
    icon: './src/assets/auno-logo', // Updated to match the existing icon file
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'ai-nexus-desktop',
        authors: 'Sunny-Boy Shabalala',
        description: 'A simple Windows desktop application for AI interactions',
        setupIcon: './src/assets/auno-logo.ico'
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['win32'],
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'sunny-bboy',
          name: 'ai-nexus-desktop'
        },
        prerelease: false,
        draft: true
      }
    }
  ]
}; 