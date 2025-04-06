#!/bin/bash

# Verifica si hay cambios en archivos rastreados y no rastreados
CAMBIOS_TRACKED=$(git diff --name-only)
CAMBIOS_UNTRACKED=$(git ls-files --others --exclude-standard)

if [ -z "$CAMBIOS_TRACKED" ] && [ -z "$CAMBIOS_UNTRACKED" ]; then
  echo "✅ No hay cambios para subir. Todo está actualizado."
else
  echo "📄 Archivos modificados:"
  echo "$CAMBIOS_TRACKED"

  echo "🆕 Archivos nuevos no rastreados:"
  echo "$CAMBIOS_UNTRACKED"

  echo ""
  echo "📝 Escribe un mensaje para el commit:"
  read mensaje

  git add .
  git commit -m "$mensaje"
  git push origin main

  echo "🚀 Cambios subidos correctamente a GitHub."
fi