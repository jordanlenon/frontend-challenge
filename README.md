# 🚀 Frontend Challenge - Order Details Page
Aplicação Vue 3 responsiva para exibição de detalhes de pedidos.

[![Vue 3](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Sass](https://img.shields.io/badge/Sass-1.9-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Vitest](https://img.shields.io/badge/Vitest-3.2-6E9F18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev/)

## 📋 Sobre o Projeto

- Este projeto implementa uma página de detalhes de pedidos seguindo um layout específico do Figma, consumindo dados de uma API REST.

## Alterações efetuadas no layout
- Normalização das colunas de contatos Addresses, o card do meio ("Bill to Pilgrims Pride Corp.") estava exibindo 1 coluna enquanto os outros estavam em 2 colunas. Para reaproveitar o código eu padronizei em 2 colunas, a primeira relacionada ao endereço e nome e a segunda com as informações de contato.

### URLs
- **Produção**: https://frontend-challenge-me.vercel.app
- **Exemplo**: https://frontend-challenge-me.vercel.app/orders/1
- **Tratamento de erro 404**: https://frontend-challenge-me.vercel.app/orders/2

### 🎯 Características Principais

- ✅ **Vue 3** com Composition API
- ✅ **Design Responsivo** para diferentes tamanhos de tela
- ✅ **Arquitetura Componentizada** com reutilização de código
- ✅ **Sistema de Grid Customizado** com Flexbox
- ✅ **Estilos SCSS** com metodologia BEM
- ✅ **API Proxy** via Vercel Functions
- ✅ **Composables Vue 3** para lógica reutilizável
- ✅ **Testes**: Vitest, MSW e Playwright

## 🚀 Deploy

### GitHub Actions + Vercel
- **Push para main** = Testes + Deploy automático de produção
- **Pull Request** = Testes automáticos
- **Testes**: Unit, Integration e E2E rodam automaticamente

## 🛠️ Tecnologias

- **Vue.js 3** - Framework principal
- **Vite** - Build tool e dev server
- **Vitest, MSW e Playwright** - Testes
- **SCSS/Sass** - Pré-processador CSS
- **Axios** - Cliente HTTP
- **Vercel** - Deploy e hosting

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 22.18 ou superior)
- npm

### Instalação

1. **Clone e instale**
   ```bash
   git clone git@github.com:jordanlenon/frontend-challenge.git
   cd frontend-challenge
   npm install
   ```

2. **Configure API** (opcional)
   ```bash
   # Crie .env na raiz
   VITE_API_URL=https://api.mercadoe.space
   ```

3. **Execute**
   ```bash
   npm run dev          # http://localhost:3040
   npm run build        # Build produção
   npm run test:all     # Todos os testes
   ```

## 🛠️ Testes

Leia mais sobre os testes em [tests/README.md](tests/README.md)

- **Unit**: Vitest + Vue Test Utils
- **Integration**: MSW (Mock Service Worker)
- **E2E**: Playwright

## 🏗️ Estrutura do Projeto

```
frontend-challenge/
├── api/                               # Vercel Functions (proxy API)
│   └── orders/[id].ts                 # Proxy para API externa
├── src/
│   ├── components/
│   │   ├── base/                      # Componentes base
│   │   └── order/                     # Componentes de pedidos
│   ├── composables/                   # Lógica reutilizável
│   └── assets/styles/                 # Estilos SCSS
├── tests/                             # Testes (unit, integration, e2e)
└── vercel.json                        # Configuração Vercel
```

## 🔧 Composables

### useHttp.js
Cliente HTTP com interceptors e tratamento de erros:
```javascript
const { get, post, put, patch, remove } = useHttp()
const response = await get('/orders/1')
```

### useOrders.js
Composable específico para pedidos:
```javascript
const { getOrderById, loading, error } = useOrders()
const orderData = await getOrderById(1)
```

### useFormatters.js
Formatação de dados:
```javascript
const { formatDate, formatCurrency, formatPhone } = useFormatters()
```

## 🎨 Sistema de Estilos

### SCSS com BEM
```scss
.order-header {
  &__title {           // Element
    font-size: 1.5rem;
  }
  &--highlighted {     // Modifier
    background: $color-primary;
  }
}
```

### Grid Responsivo
```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <!-- Conteúdo -->
    </div>
  </div>
</div>
```