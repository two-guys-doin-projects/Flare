import zarys from '../../../src/assets/zarys_projektu.png'
function HomePage () {
    return (
        <div className="home-page">
            <div>
            <h1>Witamy w serwisie Flare</h1>
            </div>
            <br></br>
            <div>
                <p>Jest to projekt który umożliwi użytownikowi na stworzenie, trenowanie oraz uruchomienie wybranych modeli uczenia maszynowego z wykorzystaniem wybranych przez niego danych. Cały projekt opiera się na zamyśle korzystania z mikroserwisów które komunikują się ze sobą z wykorzystaniem RESTFul API. Wszystkie mikroserwisy są skonteneryzowane z wykorzystaniem Docker'a.</p>
                <img src={zarys} style={{ display: 'block', margin: 'auto' }}></img>
            </div>
            <div>
                <h2>Backend Data Scraping</h2>
                <p>Ten mikroserwis skupia się na udostępnienu możliwości wybrania przez użytkownika dowolnego zbioru danych pod swój model uczenia maszynowego, oczywiście o ile ten dataset znajduje się w serwisie Kaggle. Zdecydowaliśmy się na kożystanie z API kaggle ponieważ w łatwy i przystępny sposób mamy dostęp do dużej ilości zbiorów danych do daje wiele możliwości naszemu użytkownikowi.</p>
                <p></p>
                <ul>
                    <li><code>/show_available_datasets</code> - pozwala na zwrócenie listy dostępnych zbiorów danych z podanego tematu</li>
                    <li><code>/show_dataframe</code> - pozwala na wyświetlenie wybranego zbioru danych</li>
                    <li><code>/selected_columns_of_dataframe</code> - pozwala wyciąć z wybranego zbioru danych nie interesujące nas kolumny</li>
                    <li><code>/send_dataset_to_ml</code> - pozwala na wysłanie obrobionego zbioru danych do mikroserwiku uczenia maszynowego</li>
                    <li><code>/storage</code> - pozwala na wyświetlenie storage'u danego użytkownika</li>
                </ul>
            </div>
            <div>
                <h2>Backend ML</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum velit sit amet augue sodales cursus eu eu nisl. Sed euismod eget nisi ac scelerisque. Duis maximus quis nisl vel congue. In iaculis augue ac blandit interdum. Donec tellus nibh, pellentesque eget dignissim vitae, porttitor eu enim. Sed in feugiat dolor. Vivamus magna leo, cursus nec odio vitae, posuere volutpat orci. Praesent eleifend nibh sed interdum ullamcorper. Donec dui ex, scelerisque a ipsum a, efficitur fringilla nisi. Donec dui lorem, volutpat ac vulputate viverra, eleifend et nibh. Nunc sit amet odio tempor, dapibus purus nec, faucibus purus. Nulla vehicula nulla suscipit sem scelerisque, non vehicula odio pulvinar. </p>
                <p>Opis endpointów</p>
                <ul>
                    <li><code></code> - </li>
                    <li><code></code> - </li>
                    <li><code></code> - </li>
                </ul>
            </div>
            <div>
                <h2>Frontend</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum velit sit amet augue sodales cursus eu eu nisl. Sed euismod eget nisi ac scelerisque. Duis maximus quis nisl vel congue. In iaculis augue ac blandit interdum. Donec tellus nibh, pellentesque eget dignissim vitae, porttitor eu enim. Sed in feugiat dolor. Vivamus magna leo, cursus nec odio vitae, posuere volutpat orci. Praesent eleifend nibh sed interdum ullamcorper. Donec dui ex, scelerisque a ipsum a, efficitur fringilla nisi. Donec dui lorem, volutpat ac vulputate viverra, eleifend et nibh. Nunc sit amet odio tempor, dapibus purus nec, faucibus purus. Nulla vehicula nulla suscipit sem scelerisque, non vehicula odio pulvinar. </p>
            </div>
        </div>
    )
}

export default HomePage