# Mi Entrenamiento

App web de una sola página para llevar un plan de gimnasio, caminata, comidas y progreso. Sin dependencias ni build: es un solo `index.html`.

## Qué incluye

- **Hoy**: qué toca según el día, hábitos diarios y avance de la semana.
- **Rutinas**: lunes, miércoles y viernes con 14 ejercicios. Cada uno se ve en dos posiciones (inicio y final), con vista animada, zona que trabaja y un link para buscar el video en YouTube. Temporizador de descanso al tildar cada serie y casillero para anotar el peso usado.
- **Caminar**: temporizador por intervalos para 4 semanas, de caminata rápida a trote suave.
- **Comidas**: diario de lo que comés en cada momento del día, con historial.
- **Progreso**: peso y cintura con gráfico, ritmo por semana e historial.

## Cómo usarla

Abrí `index.html` en el navegador. Los datos se guardan en el navegador de ese dispositivo (`localStorage`), así que no se comparten entre el celu y la compu. Si borrás los datos del sitio, se pierden.

## Publicarla en GitHub Pages (para usarla desde el celu)

1. Creá un repositorio nuevo en GitHub, por ejemplo `mi-entrenamiento`.
2. Subí estos archivos con **Add file → Upload files**, o por terminal:

   ```bash
   git init
   git add .
   git commit -m "App de entrenamiento"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/mi-entrenamiento.git
   git push -u origin main
   ```

3. En el repo: **Settings → Pages → Build and deployment**. En *Source* elegí **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guardá.
4. A los pocos minutos queda en `https://TU-USUARIO.github.io/mi-entrenamiento/`. Abrilo desde el celu y agregalo a la pantalla de inicio.

Si el repo es público, cualquiera con el link puede ver la app, pero no tus datos, que quedan en tu navegador.

## Estructura

```
index.html   La app completa (HTML, CSS y JavaScript)
README.md    Este archivo
PLAN.md      El plan de entrenamiento y hábitos en texto
docs/plan_cuerpo_y_mente.xlsx   Planilla semanal de hábitos y seguimiento (Excel)
```

## Notas

- Las fuentes (Inter y Space Grotesk) se cargan desde Google Fonts. Sin internet usa las del sistema.
- Los dibujos de los ejercicios son ilustraciones simples hechas en SVG. No reemplazan que un instructor te corrija la técnica.
- Fecha de inicio de los datos de ejemplo: peso inicial de 112 kg el 15/11/2026. Se puede borrar desde Progreso.
