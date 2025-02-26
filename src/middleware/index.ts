import { defineMiddleware } from "astro:middleware";
import { supabase } from "../lib/supabase";
import micromatch from "micromatch";

// Добавляем путь "/ссылки" в список защищенных маршрутов
const protectedRoutes = ["/dashboard(|/)", "/ссылки(|/)"];
const redirectRoutes = ["/signin(|/)", "/register(|/)"];
const protectedAPIRoutes = ["/api/guestbook(|/)"];


export const onRequest = defineMiddleware(
  async ({ locals, url, cookies, redirect }, next) => {
    // Проверка для защищенных веб-страниц
    if (micromatch.isMatch(url.pathname, protectedRoutes)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");
      
      // Если токены отсутствуют, перенаправляем на страницу входа
      if (!accessToken || !refreshToken) {
        return redirect("/signin");
      }
      
      // Проверяем и обновляем сессию
      const { data, error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
      });
      
      // Если ошибка с токенами, очищаем куки и перенаправляем
      if (error) {
        cookies.delete("sb-access-token", {
          path: "/",
        });
        cookies.delete("sb-refresh-token", {
          path: "/",
        });
        return redirect("/signin");
      }
      
      // Сохраняем email в locals и обновляем токены
      locals.email = data.user?.email!;
      cookies.set("sb-access-token", data?.session?.access_token!, {
        sameSite: "strict",
        path: "/",
        secure: true,
      });
      cookies.set("sb-refresh-token", data?.session?.refresh_token!, {
        sameSite: "strict",
        path: "/",
        secure: true,
      });
    }
    
    // Перенаправление авторизованных пользователей со страниц входа/регистрации
    if (micromatch.isMatch(url.pathname, redirectRoutes)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");
      if (accessToken && refreshToken) {
        return redirect("/");
      }
    }
    
    // Защита API-маршрутов
    if (micromatch.isMatch(url.pathname, protectedAPIRoutes)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");
      // Проверка наличия токенов
      if (!accessToken || !refreshToken) {
        return new Response(
          JSON.stringify({
            error: "Unauthorized",
          }),
          { status: 401 },
        );
      }
      // Проверка валидности токенов
      const { error } = await supabase.auth.setSession({
        access_token: accessToken.value,
        refresh_token: refreshToken.value,
      });
      if (error) {
        return new Response(
          JSON.stringify({
            error: "Unauthorized",
          }),
          { status: 401 },
        );
      }
    }
    
    return next();
  },
);