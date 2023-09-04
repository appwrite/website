module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:recommended",
    },
    collect: {
      url: ['http://localhost:4173/'],
      startServerCommand: 'pnpm preview',
      settings: {
        preset: 'desktop',
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};