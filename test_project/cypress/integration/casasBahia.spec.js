context('google', () => {
    before(() => {
        cy.visit('https://www.amazon.com/')
    })
    it('visitar amazon', () => {

                
        cy.wait(500)

        cy.get('.glow-toaster-footer > .a-button-base')
            .dblclick()

        cy.get('#twotabsearchtextbox')
            .type('Iphone 11{enter}')

        cy.get('[data-asin="B07ZPKF8RG"] > :nth-child(1) > .celwidget > .s-include-content-margin > .a-spacing-medium > :nth-child(2) > .sg-col-8-of-16 > :nth-child(1) > :nth-child(1) > .a-size-mini > .a-link-normal > .a-size-medium')
                .dblclick()

        cy.get('#add-to-cart-button')
            .dblclick()


        cy.get('#twotabsearchtextbox')
           .type('Ventilador 110V{enter}')

        cy.get('[data-asin="B06W2LC7C6"] > .sg-col-inner > .celwidget > .s-expand-height > .a-spacing-medium > :nth-child(3) > .a-size-mini > .a-link-normal > .a-size-base-plus')
            .dblclick()
        
        cy.get('#add-to-cart-button')
            .dblclick()


    })
})