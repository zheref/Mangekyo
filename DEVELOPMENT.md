# Development Guide

## Simple Development Setup

Your library uses a straightforward `lib/` folder approach for the example app:

### Structure
```
Mangekyo/
├── src/                          # Library source code (edit here!)
│   ├── components/
│   ├── themes/
│   └── ...
└── example/
    ├── lib/src/                  # Copy of library source (auto-synced)
    ├── App.js
    └── ...
```

### Quick Start

```bash
# From the root directory
npm run dev
```

This starts the Expo dev server for the example app.

### Syncing Changes

When you edit files in `src/`, you need to sync them to `example/lib/src`:

**Option 1: Manual sync (when needed)**
```bash
# From root directory
cp -R src example/lib/
```

**Option 2: Automated sync with watch (recommended)**
```bash
# Install a file watcher (one-time setup)
npm install -g chokidar-cli

# Run this in a separate terminal to auto-sync on changes
chokidar 'src/**/*' -c 'cp -R src example/lib/'
```

**Option 3: Add to package.json scripts**

Add this to your root `package.json`:
```json
"scripts": {
  "sync": "cp -R src example/lib/",
  "watch:sync": "chokidar 'src/**/*' -c 'npm run sync'"
}
```

Then run:
```bash
npm run watch:sync  # Auto-sync on file changes
```

### Development Workflow

1. **Start the dev server**:
   ```bash
   npm run dev
   ```

2. **In another terminal, start auto-sync** (if using Option 2 or 3 above):
   ```bash
   npm run watch:sync
   ```

3. **Edit files in `src/`** - changes will:
   - Sync to `example/lib/src/`  
   - Hot-reload in your running app

### Why This Approach?

- ✅ Simple and reliable
- ✅ No complex module resolution issues
- ✅ No native module linking problems
- ✅ Works consistently across all platforms
- ✅ Similar to how users will consume your published library

### Publishing

When ready to publish:
```bash
npm run build        # Builds to dist/
npm publish          # Publishes the package
```

External users will get the built `dist/` files, while you develop against source files.
