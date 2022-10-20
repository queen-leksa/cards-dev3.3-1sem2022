export default {
    render(data) {
        return `
            ${this.css()}
            ${this.html(data)}
        `
    },
    html(data) {
        return `
            <div class="dream-card">
                <div class="dream-card__logo"><i class="fa-brands fa-discord"></i></div>
                <div class="dream-card__number">
                    ${data.number.map(n => `<span>${n}</span>`).join("")}
                </div>
                <div class="dream-card__user">${data.user}</div>
                <div class="dream-card__expire">${data.expire}</div>
                <div class="dream-card__type">
                    <i class="fa-brands ${data.type}"></i>
                </div>
            </div>
        `;
    },
    css() {
        return `<style>
            @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css);
            .dream-card {
                width: 85.6mm;
                height: 53.98mm;
                border-radius: 3.18mm;
                box-sizing: border-box;
                padding: 8mm;
                display: grid;
                grid-template-columns: repeat(3, auto);
                gap: 5mm;
                align-content: space-between;
                font-size: 16pt;
                font-family: sans-serif;
            }
            .dream-card__logo {
                grid-column-end: span 3;
                font-size: 24pt;
            }
            .dream-card__number {
                grid-column-end: span 3;
                display: flex;
                justify-content: space-between;
            }
            .dream-card__user {
                align-self: flex-end;
            }
            .dream-card__expire {
                justify-self: center;
                align-self: flex-end;
            }
            .dream-card__type {
                justify-self: flex-end;
                font-size: 30px;
                align-self: flex-end;
            }
        </style>`
    }
}