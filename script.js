import Card from "./components/Card/index.js";

if (!customElements.get("dream-cc")) {
    customElements.define("dream-cc", Card);
}

fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=9")
    .then(res => res.json())
    .then(data => {
        data.data.forEach(card => {
            let tag = document.createElement("dream-cc");
            console.log(card);
            tag.setAttribute("user", card.owner);
            tag.setAttribute("number", card.number);
            tag.setAttribute("expire", card.expiration);
            tag.setAttribute("type", card.type);
            document.body.append(tag);
        })
    })