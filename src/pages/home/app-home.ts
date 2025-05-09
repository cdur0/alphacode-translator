import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles } from './home-styles';

@customElement('app-home')
export class AppHome extends LitElement {
    // Declare reactive properties
    @state() private searchInput: string = ''; // The current search input from the user
    @state() private searchResult: Record<string, string> | null = null; // Search result object
    @state() private errorMessage: string = ''; // Error message
    private datasetUrl = '/assets/data/dataset_2024.json'; // Path to the JSON dataset

    // Apply scoped CSS styles
    static styles = [css`${styles}`];

    /**
     * Handles search logic when user searches by Alpha3_Code or Scientific_Name.
     */
    private async handleSearch() {
        if (!this.searchInput) {
            this.errorMessage = 'Please enter something to search!';
            this.searchResult = null;
            return;
        }

        try {
            // Fetch JSON data
            const response = await fetch(this.datasetUrl);
            const dataset = await response.json();

            // Search for a matching entry
            const result = dataset.find((item: any) =>
                item.Alpha3_Code?.toLowerCase() === this.searchInput.toLowerCase() ||
                item.Scientific_Name?.toLowerCase() === this.searchInput.toLowerCase()
            );

            // Update component state
            if (result) {
                this.searchResult = result;
                this.errorMessage = '';
            } else {
                this.searchResult = null;
                this.errorMessage = `No results found for "${this.searchInput}"`;
            }
        } catch (error) {
            this.errorMessage = 'An error occurred while fetching data.';
            console.error('Fetch error:', error);
            this.searchResult = null;
        }
    }

    /**
     * Input event handler for two-way binding of the search field.
     */
    private handleInput(event: Event) {
        const input = event.target as HTMLInputElement;
        this.searchInput = input.value;
    }

    /**
     * Renders the component's template.
     */
    render() {
        return html`
            <header>
                <span>PWA App</span>
                <a href="/about">About</a>
            </header>

            <div>
                <h1>Search Dataset</h1>
                <p>version : ASFIS_sp_2024_FC</p>

                <!-- Input Field -->
                <div class="search-container">
                    <input
                            type="text"
                            .value=${this.searchInput}
                            @input=${this.handleInput}
                            placeholder="Enter Alpha3 Code or Scientific name"
                    />
                    <button @click=${this.handleSearch}>Search</button>
                </div>


                <!-- Error Message -->
                ${this.errorMessage
                        ? html`<p class="error">${this.errorMessage}</p>`
                        : null}

                <!-- Search Result -->
                <div id="search-result">
                    ${this.searchResult
                            ? html`
                                <h2>Search Results:</h2>
                                <p><strong>Alpha3 Code</strong> ${this.searchResult.Alpha3_Code}</p>
                                <p><strong>Scientific name</strong> ${this.searchResult.Scientific_Name}</p>
                                <p><strong>English Name:</strong> ${this.searchResult.English_name}</p>
                                <p><strong>ISSCAAP Group:</strong> ${this.searchResult.ISSCAAP_Group}</p>
                                <p><strong>Taxonomic Code:</strong> ${this.searchResult.Taxonomic_Code}</p>
                                <p><strong>Family:</strong> ${this.searchResult.Family}</p>
                            `
                            : null}
                </div>
            </div>
        `;
    }
}