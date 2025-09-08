# 🚀 Integración Continua y Despliegue (CI/CD)

## 📋 Descripción
Este proyecto utiliza **GitHub Actions** para automatizar la integración continua y el despliegue. El pipeline se ejecuta automáticamente en cada push y pull request a las ramas `main` y `develop`.

## 🔧 Configuración del Pipeline

### Jobs Configurados

1. **Backend Tests** 🐍
   - Ejecuta tests de Django
   - Verifica migraciones de base de datos
   - Linting con flake8
   - Usa PostgreSQL como base de datos de prueba

2. **Frontend Tests** ⚛️
   - Instala dependencias de Node.js
   - Ejecuta tests con Vitest
   - Construye el proyecto con Vite
   - Guarda los archivos build como artifacts

3. **Integration Tests** 🔗
   - Verifica que backend y frontend funcionen juntos
   - Prueba endpoints de la API
   - Se ejecuta solo si los tests individuales pasan

## 🏃‍♂️ Cómo Ejecutar Tests Localmente

### Backend (Django)
```bash
cd backend

# Instalar dependencias de desarrollo
pip install -r requirements-dev.txt

# Ejecutar tests
python manage.py test

# Linting
flake8 .

# Con cobertura
coverage run --source='.' manage.py test
coverage report
```

### Frontend (React)
```bash
cd frontend

# Instalar dependencias
npm install

# Ejecutar tests
npm run test

# Tests con cobertura
npm run test:coverage

# Build del proyecto
npm run build
```

## 📁 Estructura de Archivos CI/CD

```
.github/
└── workflows/
    └── ci.yml              # Pipeline principal de CI/CD

backend/
├── .flake8                 # Configuración de linting
├── requirements.txt        # Dependencias base
└── requirements-dev.txt    # Dependencias de desarrollo

frontend/
├── vitest.config.js        # Configuración de testing
└── src/
    └── test/
        └── setup.js        # Setup de testing
```

## 🔍 Status Badges
Puedes agregar badges de estado a tu README principal:

```markdown
![CI/CD Status](https://github.com/tu-usuario/tu-repo/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## ⚙️ Variables de Entorno
Para el CI/CD se usan las siguientes variables:

- `DATABASE_URL`: URL de la base de datos PostgreSQL para tests
- `DJANGO_SETTINGS_MODULE`: Módulo de configuración de Django

## 🚨 Troubleshooting

### Si los tests del backend fallan:
1. Verificar que las migraciones estén actualizadas
2. Revisar la configuración de la base de datos
3. Confirmar que todas las dependencias estén en `requirements.txt`

### Si los tests del frontend fallan:
1. Ejecutar `npm install` para verificar dependencias
2. Revisar la configuración de Vitest
3. Confirmar que los tests estén en el directorio correcto

### Si el integration test falla:
1. Verificar que los endpoints de la API estén correctos
2. Confirmar que el servidor Django se inicia correctamente
3. Revisar las URLs de la API

## 📝 Próximos Pasos
- [ ] Agregar tests de cobertura de código
- [ ] Configurar deployment automático
- [ ] Agregar notificaciones de Slack/Discord
- [ ] Implementar tests end-to-end con Cypress
- [ ] Configurar análisis de seguridad con CodeQL
