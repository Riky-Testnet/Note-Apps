class NotesBar extends HTMLElement {
    _shadowRoot = null;
    _style = null;
   
    constructor() {
      super();
   
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._style = document.createElement('style');
    }
   
    _updateStyle() {
      this._style.textContent = `
      .container {
        width: 100%;
        display: block;
        min-height: 100vh;
        background: linear-gradient(135deg, #cf9aff, #95c0ff);
        color: #fff;
        padding-top: 4%;
        padding-left: 10%;
        padding-right: 10%;
    }
    
    .container h1 {
        display: flex;
        align-items: center;
        font-size: 35px;
        font-weight: 600;
    }
    
    .container h1 img {
        width: 60px;
    }
    
    .container button img {
        width: 25px;
        margin-right: 8px;
    }
    
    .container button {
        display: flex;
        align-items: center;
        background: linear-gradient(#9418fd, #571094);
        color: white;
        font-size: 16px;
        outline: 0;
        border: 0;
        border-radius: 40px;
        padding: 15px 25px;
        margin: 30px 0 20px;
        cursor: pointer;
    }
    
    .input-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        position: relative;
        width: 100%;
        max-width: 500px;
        min-height: 150px;
        background: #fff;
        color: #333;
        padding: 20px;
        margin: 20px 0;
        outline: none;
        border-radius: 5px;
    }
    
    .input-box img {
        width: 25px;
        position: absolute;
        bottom: 15px;
        right: 15px;
        cursor: pointer;
    }
      `;
    }
   
    _emptyContent() {
      this._shadowRoot.innerHTML = '';
    }
   
    connectedCallback() {
      this.render();
    }
   
    render() {
      this._emptyContent();
      this._updateStyle();
   
      this._shadowRoot.appendChild(this._style);
      this._shadowRoot.innerHTML += `      
      <div class="container">
            <h1> <img src="images/notes.png">Note Apps Riky Testnet</h1>
            <button class="btn"><img src="images/edit.png"> Create Notes</button>
            <div class="notes-container">
                <p contenteditable="true" class="input-box">
                <img src="images/delete.png">
                </p>
            </div>
        </div>
      `;
    }
  }
   
  customElements.define('notes-bar', NotesBar);