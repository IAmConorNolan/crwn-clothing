import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchCollectionStartAsync} from '../../redux/shop/shop.actions';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import {createStructuredSelector} from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export class ShopPage extends Component {

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {fetchCollectionStartAsync} = this.props;
        fetchCollectionStartAsync();

    }

    render() {
        const {match, isFetching} = this.props;
        console.log(isFetching);

        return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isFetching} {...props} />} />
            {
            //Remembering here that match.path returns current url
            //The important part here, is that whatever is in place of :categoryId
            //is stored as a useable value!
            }
        </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

