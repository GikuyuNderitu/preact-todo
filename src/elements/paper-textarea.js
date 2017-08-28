(function() {

    const template = document.createElement('template')

    template.innerHTML = `
                            <style>
                                :host {
                                    display: flex;
                                }
                                
                                textarea {
                                    flex: 3;
                                }
                                
                                button {
                                    flex: 1;
                                    margin-left: 15px;
                                }
                            
                                </style>
                                
                                <textarea></textarea>
                            
                            `

    
    class PaperTextArea extends HTMLElement {
        static get observedAttributes() {
            return ['value']
        }
        
        static get is() {return 'paper-textarea'}
        
        set value(val) {
            this.setAttribute('value', val)
        }
        
        constructor() {
            super();
            
            this.attachShadow({mode: 'open'})
            this.shadowRoot.appendChild(template.content.cloneNode(true))
        }
        
        connectedCallback() {
            
        }
    }
    window.customElements.define(PaperTextArea.is, PaperTextArea)
}())