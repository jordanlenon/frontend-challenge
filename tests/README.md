# Testes Simplificados

Este projeto possui uma estrutura de testes simplificada.

## Estrutura

```
tests/
├── unit/                  # Testes unitários
│   ├── components/        # Testes de componentes
│   │   ├── base/          # Componentes base
│   │   └── order/         # Componentes de pedidos
│   └── composables/       # Testes de composables
├── integration/           # Testes de integração
├── e2e/                   # Testes end-to-end simples
├── handlers.js            # Handlers do MSW (simplificados)
├── msw-setup.js           # Configuração do MSW
└── setup.js               # Configuração geral dos testes
```

## Testes Unitários

### Componentes Base

- **Card.test.js**: Testa renderização de slots e estrutura básica
- **Icon.test.js**: Testa renderização de ícones com classes
- **SkeletonLoading.test.js**: Testa renderização de loading com props

### Componentes de Pedidos

- **OrderSupplierInfo.test.js**: Testa renderização de informações do fornecedor

### Composables

- **useFormatters.test.js**: Testa formatação de data, moeda e telefone
- **useHttp.test.js**: Testa estrutura básica dos métodos HTTP
- **useOrders.test.js**: Testa estado reativo e métodos

## Testes de Integração

- **OrderDetails.integration.test.js**: Testa carregamento de dados do pedido

## Testes E2E

- **order-details.spec.js**: Testa o fluxo principal da página de detalhes do pedido

## Princípios dos Testes

1. **Simplicidade**: Testes focados apenas no essencial
2. **Legibilidade**: Código limpo e fácil de entender
3. **Manutenibilidade**: Testes que não quebram com mudanças menores
4. **Performance**: Execução rápida e eficiente

## Executando os Testes

```bash
# Executar testes unitários e integração
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com interface visual
npm run test:ui

# Executar testes com coverage
npm run test:coverage

# Executar testes e2e
npm run test:e2e
```

## Configuração

### Vitest
- **Framework**: Vitest para testes unitários e integração
- **Ambiente**: jsdom para simular DOM
- **Cobertura**: v8 provider
- **Performance**: Configurado com single fork para melhor performance

### Playwright
- **Framework**: Playwright para testes e2e simples
- **Navegador**: Apenas Chromium para simplicidade
- **Configuração**: Focada no fluxo principal

### MSW (Mock Service Worker)
- **Mock de APIs**: Para testes de integração
- **Handlers simplificados**: Apenas cenários principais
- **Setup automático**: Configurado no setup.js

### Componentes Globais
- **Registro automático**: Componentes base registrados globalmente
- **Testes isolados**: Cada teste inclui apenas os componentes necessários

## Resultados

- **26 testes unitários/integração** em ~1 segundo
- **1 teste e2e** em ~1.2 segundos