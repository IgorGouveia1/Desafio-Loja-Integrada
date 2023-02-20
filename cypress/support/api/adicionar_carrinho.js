Cypress.Commands.add('addCarrinho', () => {
    cy.request({
        method: 'GET',
        url: '/carrinho/valor/?envio_id=12015&envio_code=retirar_pessoalmente&valor_frete=0&valor_subtotal=80'
    }).then( (res) =>{
        expect(res).to.eq(200)
    })
  })