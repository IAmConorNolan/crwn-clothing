import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchCollectionStartAsync} from '../../redux/shop/shop.actions';


import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionContainer from '../collection/collection.container';


export class ShopPage extends Component {

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {fetchCollectionStartAsync} = this.props;
        fetchCollectionStartAsync();
    }

    render() {
        const {match} = this.props;

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
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});


export default connect(null, mapDispatchToProps)(ShopPage);

