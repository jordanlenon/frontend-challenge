import { test, expect } from '@playwright/test'

test.describe('Order Details - Fluxo Principal', () => {
  test.beforeEach(async ({ page }) => {
    // Mock simples da API
    await page.route('**/api/orders/123', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          header: {
            number: 4510001114,
            buyer: 'MTP West Buyer',
            price: 20000,
            currency: 'USD',
            status: 'Need to confirm'
          },
          supplier: {
            code: '101908',
            name: 'Motion Industries INC.',
            document: {
              type: 'CNPJ',
              value: '00.823.053/0001-02'
            },
            contact: {
              name: 'Jack Jeff Ripple Applejack',
              phone: '800-296-5522'
            }
          }
        })
      })
    })
  })

  test('should load order details page', async ({ page }) => {
    await page.goto('/order/123')

    // Verificar se a página carrega
    await expect(page.locator('.order-details')).toBeVisible()

    // Verificar se os dados principais são exibidos (usando seletores mais específicos)
    await expect(page.locator('.order-header')).toBeVisible()
    await expect(page.locator('text=MTP West Buyer').first()).toBeVisible()
    await expect(page.locator('text=4510001114').first()).toBeVisible()
    await expect(page.locator('text=Motion Industries INC.').first()).toBeVisible()
  })
})
