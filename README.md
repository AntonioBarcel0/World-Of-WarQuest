# World of WarQuest - Gestor de misiones RPG

Un gestor de tareas temático estilo RPG medieval con diseño pixel art retro, donde tendremos un libro de misiones para cada clase de personaje (Guerrero, Pícaro, Mago).

<img width="722" height="345" alt="logo-removebg-preview" src="https://github.com/user-attachments/assets/cd77f690-be34-4844-bd98-34ff39dcf678" />


## 🎮 Descripción

World of WarQuest es una aplicación web de gestión de tareas con temática de fantasía medieval oscura y estética pixel art. Los usuarios pueden seleccionar una clase de personaje y gestionar sus misiones de forma independiente, con persistencia de datos en el navegador.

## ✨ Características

- **🎨 Diseño Pixel Art Retro**: Interfaz completa con estética de juegos clásicos 8-bit/16-bit
- **⚔️ 3 Clases de Personajes**: Guerrero, Pícaro y Mago, cada uno con su propio libro de misiones
- **💾 Persistencia de Datos**: Las misiones se guardan en LocalStorage separadas por personaje
- **✅ Sistema de Tareas Completo**: 
  - Agregar nuevas misiones
  - Marcar misiones como completadas
  - Eliminar misiones
  - Estadísticas en tiempo real
- **📱 Responsive Design**: Adaptado para móviles y desktop

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos pixel art con animaciones
- **JavaScript (Vanilla)**: Lógica de la aplicación sin frameworks
- **LocalStorage API**: Persistencia de datos del navegador
- **Google Fonts**: Press Start 2P (pixel art) y MedievalSharp

## 📁 Estructura del proyecto

to-do-list/
├── index.html # Redirección a Main
├── assets/
│ └── avatars/
  └── ui/
├── main/
│ ├── main.html # Pantalla de inicio
│ ├── main.css
│ └── main.js
├── characters/
│ ├── characters.html # Selección de personaje
│ ├── characters.css
│ └── characters.js
└── quests/
├── quests.html # Gestor de misiones
├── quests.css
└── quests.js


## 🚀 Instalación

1. **Clona el repositorio**:
``bash
git clone https://github.com/tu-usuario/quest-manager.git
cd quest-manager


# 📚 Pantallas del proyecto y funcionalidades

Este documento describe las **tres pantallas principales** del proyecto, sus secciones y las acciones que el usuario puede realizar en cada una:

- `Main` (pantalla de inicio)
- `Characters` (selección de personaje)
- `Quests` (libro de misiones / gestor de tareas)

---

## 🏰 Main (`/main/main.html`)

La pantalla **Main** es la puerta de entrada al proyecto. Sirve como menú inicial y presenta el mundo del juego.

<img width="1461" height="824" alt="Captura de pantalla 2026-01-07 a las 17 41 55" src="https://github.com/user-attachments/assets/a18c54d0-3752-41e0-b646-40ae4c358657" />

---

## 🧙‍♂️ Pantalla Characters (`/characters/characters.html`)

La pantalla **Characters** permite al usuario elegir su clase de personaje. Cada clase tendrá su propio libro de misiones independiente.

<img width="1457" height="821" alt="Captura de pantalla 2026-01-07 a las 17 43 13" src="https://github.com/user-attachments/assets/09a10e99-1dfb-4bd5-81ce-0ebe787925ef" />

---

## 📜 Pantalla Quests (`/quests/quests.html`)

La pantalla **Quests** es el corazón de la aplicación: un gestor de tareas con estética de libro de misiones pixel art.  
Aquí se crean, consultan, completan y eliminan misiones.

<img width="1460" height="823" alt="Captura de pantalla 2026-01-07 a las 17 44 14" src="https://github.com/user-attachments/assets/541d5db3-974b-4a69-a916-dbe795e8b56f" />

---

## Autor

Nombre: Antonio Barceló Berlanga

GitHub: AntonioBarcel0
