#!/bin/bash

# Verifica si hay cambios
if git diff-index --quiet HEAD --; then
  echo "✅ No hay cambios para subir. Todo está actualizado."
else
  echo "📝 Escribe un mensaje para el commit:"
  read mensaje
  git add .
  git commit -m "$mensaje"
  git push origin main
  echo "🚀 Cambios subidos correctamente."
fi
