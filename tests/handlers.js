import { http, HttpResponse } from 'msw'

const mockOrderData = {
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
}

export const handlers = [
  http.get('/api/orders/:id', () => {
    return HttpResponse.json(mockOrderData)
  })
]
