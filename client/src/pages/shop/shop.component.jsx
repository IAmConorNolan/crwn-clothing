import React, { Component, useEffect } from 'react'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchCollectionStart} from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionContainer from '../collection/collection.container';


export const ShopPage = ({match, fetchCollectionStart}) => {


    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart])

        return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
            {
            //Remembering here that match.path returns current url
            //The important part here, is that whatever is in place of :categoryId
            //is stored as a useable value!
            }
        </div>
        )
    }


const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});


export default connect(null, mapDispatchToProps)(ShopPage);

