import { LitElement, html, css} from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './about-styles';

@customElement('app-about')
export class AppAbout extends LitElement {

  static styles = [css`${styles}`];

  /**
   * Render the About page content
   */
  render() {
    // List of licenses for the project dependencies
    const licenses = [
      {
        name: 'Lit',
        version: '3.2.1',
        license: 'BSD-3-Clause',
        link: 'https://github.com/lit/lit/blob/main/LICENSE',
      },
      {
        name: '@shoelace-style/shoelace',
        version: '2.18.0',
        license: 'MIT',
        link: 'https://github.com/shoelace-style/shoelace/blob/trunk/LICENSE',
      },
      {
        name: 'TypeScript',
        version: '5.6.3',
        license: 'Apache-2.0',
        link: 'https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt',
      },
      {
        name: 'Vite',
        version: '5.4.11',
        license: 'MIT',
        link: 'https://github.com/vitejs/vite/blob/main/LICENSE',
      },
    ];

    return html`
      <!-- Page Title -->
      <div class="licenses">
        ${licenses.map(
            (license) => html`
              <div class="license-card">
                <strong>${license.name} (v${license.version})</strong>
                <p>License: <code>${license.license}</code></p>
                <a href="${license.link}" target="_blank" rel="noopener">View License</a>
              </div>
            `
        )}
      </div>

    `;
  }
}