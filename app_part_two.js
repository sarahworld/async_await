

// 3
$( document ).ready(
    async function(){
    console.log("Ready")
    
    let deckUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    let deck_id;
    let card;

    let singleDeckPromise = await axios.get(deckUrl)
    deck_id = singleDeckPromise.data.deck_id
    

    $('.card_button').on("click", function(){
        console.log("clicked")
        drawSingleCard()

    })})
    
// 1

    async function drawSingleCard(){
        let deckInfo = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        let deck_id = deckInfo.data.deck_id;
        const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
        let card = `${res.data.cards[0].value.toLowerCase()}_of_${res.data.cards[0].suit.toLowerCase()}.png`
        $('img').attr("src", `./cards/${card}`);
        $('img').removeClass("disabled").toggleClass("rotated")
  
    }
// 2

    async function twoCardsDraw(deckUrl){
        let firstCard;
        let secondCard;
        
        let singleDeckPromise = await axios.get(deckUrl)
        deck_id = singleDeckPromise.data.deck_id

        let firstRes = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)  
        firstCard = firstRes.data.cards[0].value + " of " + firstRes.data.cards[0].suit

        let secondRes = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
        secondCard = secondRes.data.cards[0].value + " of " + secondRes.data.cards[0].suit

    }












