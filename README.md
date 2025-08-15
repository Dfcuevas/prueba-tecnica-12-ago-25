# 🛒 Prueba-tecnica, carrito de compras con Next.js 15

Una aplicación de comercio electrónico basica construida con Next.js 15, que incluye visualización de productos y carrito de compras con una API REST integrada.

## 🚀 Características

### Frontend

- ✅ **Lista de productos**
- ✅ **Carrito de compras** interactivo
- ✅ **Gestión de cantidades** (agregar/quitar)
- ✅ **Diseño responsive** con Tailwind CSS
- ✅ **Contador de productos** en navegación

### Backend API

- 🔌 **API REST completa** con Next.js App Router
- 📦 **Gestión de productos** (CRUD completo)
- ⚡ **Validación de datos** y manejo de errores
- 📊 **Cálculos automáticos** de totales y cantidades

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- bun o npm

### Pasos de instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/Dfcuevas/prueba-tecnica-12-ago-25.git
cd prueba-tecnica-12-ago-25
```

2. **Instalar dependencias**

```bash
bun install
```

3. **Iniciar el servidor de desarrollo**

```bash
bun run dev
```

4. **Abrir en el navegador**

```
http://localhost:3000
```

## 📡 API Endpoints

### Productos

| Método | Endpoint        | Descripción                 |
| ------ | --------------- | --------------------------- |
| `GET`  | `/api/products` | Obtener todos los productos |

### Carrito

| Método   | Endpoint           | Descripción                  |
| -------- | ------------------ | ---------------------------- |
| `GET`    | `/api/cart`        | Obtener carrito actual       |
| `POST`   | `/api/cart/add`    | Agregar producto al carrito  |
| `DELETE` | `/api/cart/remove` | Remover producto del carrito |

## 🎯 Funcionalidades Principales

### Gestión de Productos

- **Listado dinámico** de productos

### Carrito de Compras

- **Agregar productos**
- **Modificar cantidades**
- **Remover items**
- **Cálculo automático** de totales
- **Contador visual** en la navegación

## 📦 Dependencias Principales

| Dependencia    | Versión | Propósito        |
| -------------- | ------- | ---------------- |
| `next`         | 15.4.6  | Framework React  |
| `react`        | 19.1.0  | Biblioteca de UI |
| `tailwindcss`  | 4       | Framework CSS    |
| `lucide-react` | 0.539.0 | Iconos           |

## 👨‍💻 Autor

**Diego Cuevas Amaya**

- GitHub: [@Dfcuevas](https://github.com/Dfcuevas)
- LinkedIn: [https://www.linkedin.com/in/diego-fernando-cuevas-frontend-developer/](https://linkedin.com/in/diego-fernando-cuevas-frontend-developer/)
