describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('ivysaur page includes chlorophyll after click ivysaur on home page', function () {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})