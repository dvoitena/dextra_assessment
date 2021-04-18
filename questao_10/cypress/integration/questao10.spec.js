context('google', () => {
    before(() => {
        cy.visit('http://www.lourencodemonaco.com.br/vvtest/')
    })
    it('visitar pagina', () => {


        cy.get('.toggle-button')
            .dblclick()

        cy.get('#menu-item-226 > a')
            .dblclick()
        //nome
        cy.get('#nf-field-5')
            .type('Daniele')

        //sobrenome
        cy.get('#nf-field-6')
            .type('Voitena')
        //email
        cy.get('#nf-field-7')
            .type('email@email.com')

        //confirmação de email
        cy.get('#nf-field-8')
            .type('email@email.com')

        //checkbox 18-30
        cy.get('#nf-label-class-field-10-0')
            .dblclick()

        //combo-box experiência
        cy.get('#nf-field-11').select('Menos de 5 anos')

        //combo-box motivo
        cy.get('#nf-field-12').select('Sou mega chato')

        //no que precisa melhorar
        cy.get('#nf-label-class-field-13-0')
            .dblclick()

        //linguagem de programação que interessa
        cy.get('#nf-field-14')
            .type('Todas.')

        //plano para carreira
        cy.get('#nf-field-15')
            .type('Aprofundar meus conhecimentos na área de TI em especial, em automação de testes.')


        //no que precisa melhorar
        cy.get('#nf-field-16')
            .dblclick()



    })
})