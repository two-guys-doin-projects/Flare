import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainContent from '../MainContent';
import './UserPage.css'

function UserPage() {
    const [selectedPage, setSelectedPage] = useState('home');
  
    const changePage = (page) => {
      setSelectedPage(page);
    };
  
    return (
      <>
        <nav className='user--menu'>
            <ul>
                <li>
                    <Link className={"link-styles"} to="/user/home" onClick={() => changePage('home')}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link className={"link-styles"} to="/user/model" onClick={() => changePage('model')}>
                    Model
                    </Link>
                </li>
                <li>
                    <Link className={"link-styles"} to="/user/dataset" onClick={() => changePage('dataset')}>
                    Dataset
                    </Link>
                </li>
                <li>
                    <Link className={"link-styles"} to="/user/training" onClick={() => changePage('training')}>
                    Training
                    </Link>
                </li>
                <li>
                    <Link className={"link-styles"} to="/user/prediction" onClick={() => changePage('prediction')}>
                    Prediction
                    </Link>
                </li>
            </ul>
        </nav>
        <MainContent selectedPage={selectedPage} />
      </>
    );
  }
  
  export default UserPage;
  