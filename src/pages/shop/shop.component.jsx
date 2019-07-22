import React from 'react';
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';

export const ShopPage = ( {match}) => {

    console.log(match.path);
    return (
                    <div className='shop-page'>
                         
                        <Route exact path={`${match.path}`} component={CollectionOverview} />
                        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
                        {
                        //Remembering here that match.path returns current url
                        //The important part here, is that whatever is in place of :categoryId
                        //is stored as a useable value!
                        }
                    </div>
        );
    }


export default ShopPage;

