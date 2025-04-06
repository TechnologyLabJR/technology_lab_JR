#!/bin/bash

echo "Escribe el mensaje para el commit:"
read mensaje

git add .
git commit -m "$mensaje"
git push

echo "Actualización realizada con éxito."