import { LitElement, html, css } from 'lit';
import "character-card-baljeet/src/character-card";
import "character-card-lebron3/src/character-card2";
import "davidscheerfinal3-card/src/character-card3";


const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      //display: inline-block;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <character-card>

      </character-card>
      <character-card2>

      </character-card2>
      <character-card3>
        
      </character-card3>

    `;
  }
}

customElements.define('card-list', CardList);