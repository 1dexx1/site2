// src/config/auth.ts
export const PROTECTED_ROUTES = [
    '/ссылки',
    '/profile',
    '/dashboard',
    '/admin',
    // добавьте другие защищенные пути
  ];
  
  export const isProtectedRoute = (path: string): boolean => {
    return PROTECTED_ROUTES.some(route => {
      // Проверяем точное совпадение или начало пути
      return path === route || 
             path.startsWith(`${route}/`);
    });
  };
  