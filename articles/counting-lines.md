---
title: "Conocer cuanto hemos aportado en GitHub"
subtitle: "Usando lines-of-gode"
categories: ["Programación", "CLI"]
date: "2022-07-30"
---

Muchas veces vemos los _commits_ en nuestros repositorios en GitHub y pensamos "¿Cuánto habré cambiado en total?". Para eso es que creé `lines-of-gode` y hoy les voy a enseñar como usarlo.

## Introducción

Hace unas semanas empecé a aprender `Go` y me parece una maravilla. Con el fin de seguir aprendiendo, decidí reversionar un proyecto al que había aportado tiempo antes pero que no había avanzado como me gustaría, aunque no por ello dejé de mencionarlo en el repositorio de `lines-of-gode`, del cual me inspiré para el nombre.

Esta CLI (Command Line Interface) se aprovecha de la GitHub API v3 para revisar todos los _commits_ del usuario en sus repositorios (o aquellos en los que participó) y, en base a una serie de filtros, determinar cuantas líneas de código se han añadido y cuantas han sido eliminadas (también pueden ser editadas).

## Características

- Inicio de sesión persistente.
- Súper rápida (<15s para más de 200 commits)
- Base de datos SQLite para mejorar el rendimiento.
- Muy ligero (~10MB)
- Simple de usar (solo 3 comandos)
- Privado (tu clave permanece solo en tu computador, no es envíada a ningún lado).

## Cómo utilizarla

Por ahora solo está disponible para Linux, pero enseñaré como usarla en Windows más adelante.

### Linux

Para usar `lines-of-gode` en Linux simplemente descarga el binario desde el [repositorio](https://github.com/ti7oyan/lines-of-gode/releases). Una vez descargado, dirígete hasta su ubicación desde la terminal (o un explorador de ficheros) y extráelo. Puedes usar el comando `tar` del siguiente modo:

```
tar -xvfz lines-of-gode-v0.1.8-linux.amd64.tar.gz
```

Una vez descomprimido, lo ejecutamos con el siguiente comando:

```
❯ ./lines-of-gode-v0.1.8-linux.amd64
```

Esto desplegará un menú de ayuda muy similar a este:

```
❯ ./lines-of-gode
NAME:
   lines-of-gode - Check how many lines of code you have contributed.

USAGE:
   lines-of-gode [global options] command [command options] [arguments...]

COMMANDS:
   auth, a    Auth yourself with your personal access token and store it locally.
   status, s  Check current authentication status.
   run, r     Count your additions and deletions of your contributions.
   help, h    Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --help, -h  show help (default: false)
```

Como podemos ver, contamos con tres comandos: `auth`, `status` y `run`.

Para empezar a usar `lines-of-gode`, correremos el comando `auth` con la flag `--token` y nuestro token de acceso personal, que podemos conseguir en [Tokens](https://github.com/settings/tokens), de este modo:

```
❯ ./lines-of-gode auth --token ghp...
```

Esto, en el caso de hacerlo correctamente, permitirá que el programa guarde el inicio de sesión para usarlo nuevamente más tarde.

Una vez nos haya reconocido la aplicación, podremos correr el comando `run`, sin más argumentos.

```
❯ ./lines-of-gode run
```

El programa empezará a solicitar a GitHub información sobre nuestros repositorios y a su vez, de sus _commits_, aunque filtrará todos aquellos que no sean del usuario (útil para proyectos grandes u open-source). También, obviará todas las adiciones o eliminaciones de archivos automatizados como `package-lock.json`, `.gitignore`, `node_modules`, etc.

Podemos ir como trabaja sobre nuestros repositorios a medida que los analiza:

```
❯ ./lines-of-gode run
Hello Ti7oyan!, fetching your repositories now...
Repository: ".github" had 25 additions and 0 deletions
Repository: "astro-profile-example" had 390 additions and 50 deletions
Repository: "bcss-maker" had 3626 additions and 1531 deletions
...
```

_NOTA: la primera ejecución será un poco lenta en comparación a las posteriores, puesto que aún no cuenta con una base de datos con la que comparar los datos que recibe, las demás funcionarán de un modo distinto y serán más veloces._

Finalmente, obtendremos un sumario de todo lo analizado:

```
You have added 22313 lines and deleted 8140 lines for a total of 30453 lines changed across 30 repositories.
```

¡Y listo! Pudimos conocer cuanto hemos cambiado a lo largo y ancho de nuestro tiempo en GitHub.

### Windows

Como ya mencioné, `lines-of-gode` actualmente solo está disponible para Linux pero, hay algunas alternativas que puedes seguir para utilizarlo en Windows.

#### WSL

Windows Subsystem for Linux (o simplemente WSL), es una plataforma que corre una distribución Linux sobre un sistema operativo Windows (10 u 11). Para instalarlo, simplemente sigue sus [instrucciones](https://docs.microsoft.com/en-us/windows/wsl/install).

Una vez configurada, sigue los pasos de la sección anterior **Linux**.

#### Docker

Si prefieres usar Docker (con su aplicación de escritorio `Docker Desktop`), puedes seguir sus instrucciones [aquí](https://docs.docker.com/desktop/install/windows-install/). Una vez instalado Docker, puedes seguir las instrucciones de este [tutorial](https://dev.to/netk/getting-started-with-docker-running-an-ubuntu-image-4lk9) para correr una imagen de Ubuntu y así poder seguir los pasos de las anteriores secciones.

#### Máquina virtual (VM)

La más tradicional de todas, una máquina virtual que corra una distribución de Linux. Podrás encontrar un tutorial [aquí](https://hipertextual.com/2017/07/instala-ubuntu-windows-maquina-virtual).

#### Compilarlo desde la fuente

Si ninguna de las anteriores soluciones te funciona o si simplemente quieres compilar tu propia versión de `lines-of-gode`, necesitarás lo siguiente:

1. `go`, preferiblemente v1.13 o más reciente.
2. `gcc`, puedes buscarlo como `mingw-w64`.
3. `git`, el sistema de control de versiones.
4. Declarar `CGO_ENABLED=1` en el `path` de Windows.

Una vez cumplidos los requisitos, clona el repositorio con `git`:

```
git clone https://github.com/Ti7oyan/lines-of-gode
```

Dirígete a él con `cd` y compílalo con `go build`

```
go build .
```

Puedes asegurarte de que funcione con:

```
.\lines-of-gode.exe
```

Para volverlo una aplicación de acceso universal, corre `go install`.

## Finalmente

Espero que la aplicación te haya servido para resolver la pregunta del principio. Si tienes problemas, dudas o sugerencias, ¡no dudes en contactarme a través de mis redes sociales!

Y tú, ¿cuántas líneas de código cambiaste?
