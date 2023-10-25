import './Footer.css'
import filip from '../../src/assets/Filip.jpeg'
import krystian from '../../src/assets/Krystian.jpg'

function Footer () {
    return(
        <footer>
            <h1>Flare© 2023 Two guys doing projects</h1>
            <div className='footer--pearson' >
                <img src={krystian}></img>
                <ul>
                    <li><a href="https://twitter.com/">Twitter</a></li>
                    <li><a href="https://codepen.io/">Codepen</a></li>
                    <li><a href="#">Email</a></li>
                    <li><a href="https://github.com/">Github</a></li>
                </ul>
            </div>
            <div className='footer--pearson' >
                <img src={filip}></img>
                <ul>
                    <li><a href="https://twitter.com/">Twitter</a></li>
                    <li><a href="https://codepen.io/">Codepen</a></li>
                    <li><a href="#">Email</a></li>
                    <li><a href="https://github.com/">Github</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer