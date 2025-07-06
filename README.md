# Shehnaz Software Solutions (3S) Website

This is a modern Angular website for Shehnaz Software Solutions (3S), following best frontend architecture and scalable folder structure.

## Folder Structure

- `src/app/core` - Singleton services, interceptors, and app-wide providers (import only in AppModule)
- `src/app/shared` - Shared components, directives, and pipes (import in any feature module)
- `src/app/features` - Feature modules (Home, About, Services, Feedback, Contact)
- `src/app/features/feedback` - Dynamic feedback section (API-driven)

## Features
- **Dynamic Feedback:**
  - Fetches feedback via API (dummy service for now)
  - Posts feedback via API (dummy service for now)
- **Lazy-loaded Feature Modules:** Home, About, Services, Feedback, Contact
- **Best Practices:**
  - Core/Shared/Feature module separation
  - Routing with lazy loading
  - SCSS styling

## Getting Started

```bash
npm install
npm start
```

## Customization
- Replace dummy feedback API with real endpoints as needed.
- Add more features or shared components as your business grows.

---

Built with ❤️ by Shehnaz Software Solutions (3S)
